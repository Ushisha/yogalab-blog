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
          Ikuko's journey into the world of Yoga is a captivating and
          transformative tale. Her initiation at Indaba Studios in London in
          2013 marked the beginning of a profound exploration of various yoga
          styles, including Vinyasa, Ashtanga, and Iyengar. The diversity of
          instructors she encountered during this time undoubtedly enriched her
          practice and laid the foundation for her spiritual journey.
          <br />
          <br />
          The pivotal moment in Ikuko's Yoga odyssey occurred in 2014 when she
          ventured to New York to support her friend's teacher training trip.
          Visiting Dharma Yoga Center New York proved to be a life-changing
          experience, as she took her first class with the renowned Sri Dharma
          Mittra. This encounter sparked a new chapter in her life, leading her
          to discover her Guru and fully embrace the transformative power of
          Yoga.
          <br />
          <br />
          Passion for the philosophy of Yoga and the yogic way of life has
          become a driving force in Ikuko's journey. Her commitment to sharing
          the central teachings and wisdom she has accumulated is a testament to
          her dedication to the practice. Through her blog, she aims to
          communicate her findings and kindle the flame of her passion for Yoga
          in the hearts of readers.
          <br />
          <br />
          Ikuko's daily reflections underscore the profound impact of Yoga on
          her life. Despite the hectic nature of our lives beyond the yoga mat,
          she finds strength, builds resilience, and cultivates inner peace
          through her consistent practice. This blog serves as a platform for
          Ikuko to articulate her personal experiences, insights, and the
          invaluable lessons she has gained on her Yoga journey.
          <br />
          <br />
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

        <p className="text-center text-gray-400 md:text-left font-bold">
          @ Regent Park, London
          <br />
          Created with Next.js Version 1.1.0
        </p>
      </div>
    </Layout>
  )
}
