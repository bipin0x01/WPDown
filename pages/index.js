import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const plugins = [
    {
      plugin_name: "Contact Form 7",
      desc: "Contact Form 7 can manage multiple contact forms, plus you can customize the form and the mail contents flexibly with simple markup.",
      banner: "https://ps.w.org/contact-form-7/assets/banner-772x250.png",
      download_link:
        "https://downloads.wordpress.org/plugin/contact-form-7.5.5.6.1.zip",
    },
    {
      plugin_name: "Hide Admin Bar Based on User Roles",
      desc: "This plugin is very useful to hide admin bar based on selected user roles and user capabilities.",
      banner:
        "https://ps.w.org/hide-admin-bar-based-on-user-roles/assets/banner-772x250.png",
      download_link:
        "https://downloads.wordpress.org/plugin/hide-admin-bar-based-on-user-roles.3.2.zip",
    },
  ];

  const theme_download = {
    status: "success",
    message: "Theme found!",
    url: "http://gia.edu.np/wp-content/themes/gurukuldang.zip",
  };

  const theme_info = {
    theme: "EDU Theme Gurukul Academy",
    version: "1.0",
    screenshot:
      "http://gia.edu.np/wp-content/themes/gurukuldang/screenshot.png",
    author: "Tech Care",
    authorLink: "http://cuidadotechnology.com/",
    tags: ["one-column", "two-columns", "rtl-language-support", "sticky-post"],
  };

  return (
    <div className="relative h-screen w-screen min-h-screen overflow-x-auto">
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
      <div className="z-0 flex main absolute inset-0 justify-center h-full w-full my-auto">
        <div className="relative bg-slate-200 w-3/4 xl:w-halfscreen md:w-3/4 sm:w-3/4  h-screen/4 p-4 rounded-3xl place-self-center flex-row">
          {/* Search Area */}

          <div className="search-area flex flex-row gap-2 justify-center h-full items-center">
            {/* Search Box with Icon */}
            <div
              className="search-box bg-white m-2 p-2 rounded-2xl w-3/5 shadow-lg hover:shadow-md transition duration-150 ease-in-out"
              id="search-box"
            >
              {/* Text Input */}
              <input
                className="search-input form-control w-full focus:outline-none px-2 "
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
                className="search-btn text-blue-400 mx-3 px-4 py-2 font-bold rounded-3xl border-2 border-blue-300 flex flex-row leading-tight uppercase shadow-lg hover:shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out items-center"
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

      <div className=" flex main-bottom cointainer bg-slate-400 w-full rounded-t-3xl justify-center min-h-full max-h-fit h-fit">
        <div className=" z-40 flex flex-col bg-slate-200 w-3/5 mt-40 rounded-t-3xl p-6">
          {/* Centered H1 Title */}
          <h2 className=" results-title mb-4 text-center underline underline-offset-8 font-bold text-3xl ">
            Here's the Intel we've gathered for you!
          </h2>
          {/* Centered H1 Title End */}

          {/* Results Tabbed Section */}
          <div className="text-2xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap">
              <li className="mr-2">
                <Link href="#theme">
                  <a
                    className={`inline-block p-4 rounded-t-lg border-b-2 border-transparent ${
                      router.asPath === "/#theme"
                        ? "underline underline-offset-8 font-bold"
                        : ""
                    }`}
                  >
                    Theme
                  </a>
                </Link>
              </li>
              <li className="mr-2">
                <Link href="#plugins">
                  <a
                    className={`inline-block p-4 rounded-t-lg border-b-2 border-transparent ${
                      router.asPath === "/#plugins"
                        ? "underline underline-offset-8 font-bold"
                        : ""
                    }`}
                  >
                    Plugins
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* Results Tabbed Section End */}
          <hr />
          {/* Results Section */}
          <div className="results-section">
            {/* Theme Section */}
            {router.asPath === "/#theme" && (
              <>
                <div className="theme-section">
                  <h3 className="ml-4 mt-4 text-left text-md font-bold text-gray-500 dark:text-gray-400">
                    <div className="theme-name">
                      Theme Name : {theme_info.theme}
                    </div>
                    <br />
                    <div className="theme-version">
                      version: <span>{theme_info.version}</span>
                    </div>
                    <br />
                    <div className="theme-author">
                      Author:{" "}
                      <span>
                        <Link href={theme_info.authorLink}>
                          <a className="hover:text-blue-400 font-bold">
                            {theme_info.author}
                          </a>
                        </Link>
                      </span>
                    </div>
                    <br />
                    <div className="theme-tags">
                      <div className="tags-group flex flex-row max-w-sm">
                        <div className="tag-title">Tags: </div>
                        {theme_info.tags.map((tag, index) => (
                          <div
                            className="tag mx-2 px-3 rounded-xl border border-blue-400 border-2 hover:bg-blue-400 hover:text-white  text-sm"
                            key={index}
                          >
                            <Link href="#">
                              <a className="hover:text-white">{tag}</a>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    <br />
                  </h3>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
