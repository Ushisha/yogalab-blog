import Layout from '@/components/Layout'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <Layout title="About YogaLab">
      <h1 className="text-center md:text-left text-4xl border-b-4 pb-5 font-bold">
        About
      </h1>
      {/* bg-white */}

      <div className="shadow-md rounded-lg px-10 py-6 mt-6 bg-[url('/../public/images/about.png')]">
        <h3 className="text-center md:text-left text-2xl mb-5">
          How it started...
        </h3>
        <p className="text-center md:text-left mb-3">
          Ikuko started her Yoga journey in 2013 at Triyoga Studios in London,
          practising Vinyasa, Ashtanga and Iyengar under the guidance of
          different yoga instructors. In 2014, she went to New York to accompany
          her friend's teacher training trip and visited Dharma Yoga Center in
          New York. She took her first class with Sri Dharma Mittra and started
          her new life the same day. She found her Guru, found Yoga.
          <br />
          <br />
          She is passionate about the philosophy of Yoga and the yogic way of
          life. She loves sharing the central teachings of the philosophy and
          wisdom she has learnt.
          <br />
          <br />
          She is reminded every day of the power of Yoga; Yoga helps her remain
          strong, builds more strength, and brings peace to her mind despite our
          busy lives off the mat.
          <br />
          <br />
          This blog is about her findings and passion for Yoga she wants to
          share with the world.
        </p>
        <div className="text-center mt-6">
          <Image
            alt=""
            height={300}
            width={450}
            src="/images/about.jpg"
            object-cover
          />
        </div>

        <p className="text-center md:text-left font-bold">
          Created with Next.js
          <br />
          Version 1.1.0
        </p>
      </div>
    </Layout>
  )
}
