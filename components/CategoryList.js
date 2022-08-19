import Link from 'next/link'

export default function CategoryList({ categories }) {
  const colorKey = {
    Asana: 'text-purple-600',
    Recipe: 'text-green-600',
    Mindfulness: 'text-pink-600',
    Product: 'text-red-600',
    Travel: 'text-yellow-600',
  }
  const colorKeyHover = {
    Asana: 'text-purple-400',
    Recipe: 'text-green-400',
    Mindfulness: 'text-pink-400',
    Product: 'text-red-400',
    Travel: 'text-yellow-400',
  }
  return (
    <div className="w-full p-1 md:p-5 bg-white rounded-lg shadow-none md:shadow-md mt-0 md:mt-6">
      <h3 className="hidden md:block text-2xl text-gray-800  p-1 md:p-3 rounded text-center">
        Categories
      </h3>
      <ul className="flex md:flex-col justify-around divide-y-0 md:divide-y divide-gray-300">
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <li
              className={`p-1 md:p-4 cursor-pointer ${colorKey[category]} hover:${colorKeyHover[category]} text-center`}
            >
              {category}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
