import Layout from '@/components/Layout'
import Post from '@/components/Post'
import fs from 'fs'
import path from 'path'
import { getPosts } from '@/lib/posts'
import matter from 'gray-matter'
import CategoryList from '@/components/CategoryList'

export default function CategoryBlogPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      <div className="flex flex-col-reverse  md:flex-row md:justify-between">
        <div className="w-auto md:w-3/4 mx-5 md:mr-10">
          <h1 className="text-center md:text-left text-4xl border-b-4 p-5 font-bold">
            Posts in{' '}
            {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
        <div className="w-auto md:w-1/4">
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return frontmatter.category.toLowerCase()
  })

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { category_name } }) {
  const posts = getPosts()
  //Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)

  const uniqueCategories = [...new Set(categories)]
  //filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  )

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  }
}
