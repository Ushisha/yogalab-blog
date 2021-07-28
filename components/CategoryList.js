import Link from "next/link";

export default function CategoryList({ categories }) {
  return (
    <div className="w-full p-1 md:p-5 bg-white rounded-lg shadow-none md:shadow-md mt-0 md:mt-6">
      <h3 className="hidden md:block text-2xl text-gray-800  p-1 md:p-3 rounded text-center">
        Categories
      </h3>
      <ul className="flex md:flex-col justify-around divide-y-0 md:divide-y divide-gray-300">
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <li className="p-1 md:p-4 cursor-pointer text-gray-500 hover:text-indigo-300 text-center">
              {category}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
