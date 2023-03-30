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
          Ikuko started Yoga in 2013 at Indaba studios in London, practising
          Vinyasa Yoga, Ashtanga Yoga and Iyengar Yoga under the guidance of
          different yoga instructors. In 2014, she went to New York to accompany
          her friend's teacher training trip and visited Dharma Yoga New York
          Center. She took her first class with Sri Dharma Mittra, and she
          started her new life the same day. She found her Guru, found Yoga.
          <br />
          <br />
          She is passionate about the philosophy of Yoga and the yogic way of
          life. She loves sharing the central teachings of the philosophy and
          wisdom she has learnt. She is reminded every day of the power of Yoga:
          on her body, as Yoga has helped her remain strong and build more
          strength, and on her well-being and her mind, as Yoga gives us the
          tools to find the peace we need when we are so busy off the mat.
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
            src="/images/about.png"
            object-cover
          />
        </div>

        <p className="text-center md:text-left font-bold">Version 1.1.0</p>
      </div>
    </Layout>
  )
}
