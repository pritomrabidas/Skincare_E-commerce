import Link from "next/link";

export default function Breadcrumb({ heading, bread }) {
  return (
    <section
      className="relative bg-gray-100 flex items-center py-20 px-6 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('about3/about-1.webp')" }}
    >
      <div className="w-full">
        <div className="md:text-5xl text-4xl font-semibold text-white font-Montserrat">
          {heading}
        </div>
        <div className="flex items-center space-x-2 text-brand text-sm pt-2">
          <Link href="/" className="hover:text-white font-Opensans">
            Home Page
          </Link>
          <span className="text-gray-400">&rarr;</span>
          <span className="font-Popins">{bread}</span>
        </div>
      </div>
    </section>
  );
}
