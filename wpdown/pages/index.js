import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-screen min-h-screen">
      <Head>
        <title>WPDown - Watcha Theme!</title>
        <meta
          name="description"
          content="WPDown - Check for Exposed Theme Files"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-top cointainer h-halfscreen ">
        <div className="flex flex-col justify-center h-full">
          <h1 className="font-bold text-center font-im-fell m-auto">
            <span className="text-8xl">WPDOWN</span>
            <br />
            <span className="text-4xl">Watcha Theme!</span>
          </h1>
        </div>
      </div>
      <div className=" flex main absolute inset-0 justify-center h-full w-full ">
        <div className="relative bg-slate-200 w-3/4 xl:w-halfscreen md:w-3/4 sm:w-3/4  h-screen/4 p-4 rounded-xl place-self-center flex-row">
          {/* Search Area */}

          <div className="search-area flex flex-row justify-center">
            {/* Search Box with Icon */}
            <div
              className="search-box bg-white m-2 p-2 rounded-2xl w-3/5"
              id="search-box"
            >
              {/* Text Input */}
              <input
                className="search-input w-full focus:outline-none px-2"
                type="text"
                placeholder="Enter the name of the website you want to inspect..."
                id="search-input"
                pattern="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})"
              />
            </div>
            {/* Search Button */}
            <div className="search-button w-auto ">
              <button
                type="button"
                className="search-btn bg-white m-2 p-2 rounded-2xl flex flex-row"
              >
                <div className="search-icon ">
                  <svg
                    className="fill-current text-gray-500 h-6 w-6 p-1 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>
                <div>
                  <span>Search</span>
                </div>
              </button>
            </div>
          </div>

          {/* Search Area End*/}
        </div>
        {/* <div className="absolute bg-slate-200 w-halfscreen h-screen/4 p-4 rounded-xl place-self-center">
          sad
        </div> */}
      </div>

      <div className="main-bottom cointainer bg-slate-400 h-halfscreen rounded-t-3xl"></div>
    </div>
  );
}
