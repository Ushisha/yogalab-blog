import Link from "next/link";
export default function CategoryLabel({ children }) {
  const colorKey = {
    Asana: "purple",
    Recipe: "green",
    Mindfulness: "pink",
    Product: "red",
    Travel: "yellow",
  };

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-500 text-gray-100 font-medium rounded`}
    >
      <Link href={`/blog.category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
