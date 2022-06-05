import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
        <div className="shadow-md fixed text-white bg-smooth-blue xl:w-halfscreen sm:w-3/4  sm:h-screen/4 p-4 rounded-xl place-self-center flex-row">
          {/* Search Area */}

          <div className="search-area bg-smooth-blue flex flex-row justify-center h-full items-center">
            {/* Search Box with Icon */}
            <div
              className="search-box border-white border-2 m-2 p-2 rounded-2xl w-3/5 sm:w-4/5 shadow-lg hover:shadow-md transition duration-150 ease-in-out"
              id="search-box"
            >
              {/* Text Input */}
              <div className="search-input ">
                <input
                  className="search-input form-control w-full focus:outline-none px-2 bg-smooth-blue text-slate-300 font-bold"
                  type="text"
                  placeholder="https://"
                  id="search-input"
                  pattern="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})"
                />
              </div>
            </div>
            {/* Search Button */}
            <div className="search-button w-auto ">
              <button
                type="button"
                className="search-btn text-white mx-3 px-4 py-2 font-bold rounded-3xl border-2 border-white flex flex-row leading-tight uppercase hover:text-smooth-blue hover:bg-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out items-center"
              >
                <div className="search-icon hover:text-smooth-blue">
                  <svg
                    className="fill-current text-white h-6 w-6 p-1 mr-1 hover:text-smooth-blue font-bold"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>
                <div className="sm:block hidden">
                  <span>Search</span>
                </div>
              </button>
            </div>
            {/* Search button End */}
          </div>

          {/* Search Area End*/}
        </div>
        {/* <div className="absolute bg-slate-200 w-halfscreen h-screen/4 p-4 rounded-xl place-self-center">
          sad
        </div> */}
      </div>

      <div className=" flex main-bottom text-slate-800 cointainer bg-blue-100 justify-center min-h-full max-h-fit h-fit">
        <div className=" z-40 flex flex-col container bg-white shadow-lg shadow-alpha items-center mt-40 p-20">
          {/* Centered H1 Title */}
          <h2 className=" results-title mb-4 text-center font-bold text-3xl ">
            Here's the Intel we've gathered for you!
          </h2>
          {/* Centered H1 Title End */}

          <hr />
          {/* Results Section */}
          <div className="results-container p-4">
            {/* Theme Section */}{" "}
            <>
              <div className="theme-section  flex flex-col lg:flex-row gap-4">
                {/* Theme Section Left */}
                <div className="theme-section-left flex flex-row justify-center ">
                  <div className="theme-screenshot p-4 m-4 ">
                    <Image
                      src={
                        "https://res.cloudinary.com/kaji/image/fetch/" +
                        theme_info.screenshot
                      }
                      alt="theme screenshot"
                      className="w-full h-full"
                      height={220}
                      width={400}
                    />
                  </div>
                </div>
                {/* Theme Section Left End */}

                {/* Theme Section Right */}

                <div className="theme-section-right w-full">
                  <h3 className="ml-4 mt-4 text-left text-md font-bold ">
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
                    <div className="theme-tags flex flex-row">
                      <div className="tags-group flex flex-row">
                        <div className="tag-title">Tags: </div>
                        <div className="tags-list flex flex-row">
                          {theme_info.tags.map((tag, index) => (
                            <div
                              className="hover:border-0 hover:bg-smooth-blue hover:text-white tag mx-2 px-3 rounded-xl min-w-fit text-sm"
                              key={index}
                            >
                              <Link href="#">
                                <a className="p-1 my-1">{tag}</a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <br />
                  </h3>
                </div>
                {/* Theme Section Right End */}
              </div>
            </>
          </div>
          {/* Plugins Section */}
          <div className="plugins-container p-4">
            <h3>Plugins</h3>
          </div>
          {/* Plugins Section End */}
        </div>
      </div>
    </div>
  );
}
