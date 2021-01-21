import Link from 'next/link';

const pages = [
  {
    name: "The Nag's Head",
    path: '/nags',
  },
];

export default function Home() {
  return (
    <>
      <div className="font-sans mt-10 w-2/3 mx-auto">
        <h1 className="text-7xl">Pubs</h1>
        <ul className="mt-20 text-3xl">
          {pages.map((page) => (
            <li>
              <Link href={page.path}>
                <a className="underline hover:bg-black hover:text-white">
                  {page.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
