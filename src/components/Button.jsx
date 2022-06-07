import Link from "next/link";

export default function Button({ label, link }) {
  return (
    <>
      <button className="download-btn border-2 text-sm shadow-xl shadow-smooth-blue hover:shadow-lg bg-smooth-blue text-white font-bold hover:text-smooth-blue hover:bg-white  mx-2 px-4 py-2 rounded-3xl  flex flex-row leading-tight uppercase  focus:ring-0 transition duration-240 ease-in-out">
        <Link href={link}>
          <a>
            <span>{label}</span>
          </a>
        </Link>
      </button>
    </>
  );
}
