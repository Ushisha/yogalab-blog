import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default (req, res) => {
  // console.log('search posts')
  let posts
  const query = req.query.q.toLowerCase()

  if (process.env.NODE_ENV === 'production') {
    //fetch from cache
    posts = require('../../cache/data').posts
  } else {
    const files = fs.readdirSync(path.join('posts'))

    posts = files.map((filename) => {
      const slug = filename.replace('.md', '')

      const markdownWithMeta = fs.readFileSync(
        path.join('posts', filename),
        'utf-8'
      )

      const { data: frontmatter } = matter(markdownWithMeta)

      return {
        slug,
        frontmatter,
      }
    })
  }
  const results = posts.filter(
    ({ frontmatter: { title, excerpt, category } }) =>
      [title, excerpt, category].some((field) =>
        field.toLowerCase().includes(query)
      )
  )

  res.status(200).json(JSON.stringify({ results }))
}
