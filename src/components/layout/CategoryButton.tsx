import Link from "next/link";

interface CategoryButtonProps {
    title: string;
    href: string;
    bgColor: string;
  }
  
  export default function CategoryButton({ title, href, bgColor }: CategoryButtonProps) {
    return (
      <Link
        href={href}
        className={`block w-full max-w-sm mx-auto p-6 text-center text-white font-bold rounded-lg shadow-md ${bgColor} hover:opacity-90 transition-opacity`}
        style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {title}
      </Link>
    );
  }