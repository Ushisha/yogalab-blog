import Layout from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout title="About YogaLab">
      <h1 className="text-center md:text-left text-4xl border-b-4 pb-5 font-bold">
        About
      </h1>

      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-center md:text-left text-2xl mb-5">
          How it started...
        </h3>
        <p className="text-center md:text-left mb-3">
          Ikuko started her yoga journey back in 2012 when she attended her
          first yoga class at Indaba yoga studio in London. She Since then, she
          has been a regular yoga practitioner, and a primary teacher has been
          Dharma Mittra. When she went to take his class in NYC back in 2018.
          She has also practised a vegetarian and yogic lifestyle. This blog is
          about her findings and passion for yoga she wants to share with the
          world. <br />
          This is a blog built with Next.js and Markdown.
        </p>
        <p className="text-center md:text-left font-bold">Version 1.0.0</p>
      </div>
    </Layout>
  )
}
