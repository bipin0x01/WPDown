import Link from "next/link";

export default function Button({ label, link }) {
  return (
    <>
      <button className="download-btn text-sm bg-smooth-blue text-white font-bold hover:text-smooth-blue hover:bg-white mx-2 px-4 py-2 rounded-3xl border-2 border-black flex flex-row leading-tight uppercase  focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
        <Link href={link}>
          <a>
            <span>{label}</span>
          </a>
        </Link>
      </button>
    </>
  );
}
