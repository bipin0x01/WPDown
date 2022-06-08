import Head from "next/head";
import { useState } from "react";
import Loader from "../src/components/Loader";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// Components Import
import PluginSection from "../src/components/Main/PluginSection";
import ThemeSection from "../src/components/Main/ThemeSection";

// change value of search results to string
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await axios.post(`${process.env.API_URL}/theme/info`, {}`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [search_url, setSearchUrl] = useState("");
  const [searchResults, setSearchResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(search_url);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      setSearchResults(true);
      // randomly toggle between true and false to simulate a search result
      searchResults
        ? toast.success("Search results found!")
        : toast.error("Sorry! The site doesn't seem to use Wordpress.");
    }, 5000);
  };

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

  const theme = { theme_info, theme_download };
  return (
    <div className="relative h-screen w-screen min-h-screen overflow-x-auto transition-duration-300 ease-in">
      <Head>
        <title>WPDown - Watcha Theme!</title>
        <meta
          name="description"
          content="WPDown - Check for Exposed Theme Files"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <div className="main-top cointainer h-halfscreen ">
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="flex flex-col justify-center h-full ">
          <h1 className="font-bold text-center font-im-fell m-auto">
            <span className="sm:text-8xl text-5xl">WPDOWN</span>
            <br />
            <span className="sm:text-4xl text-2xl">Watcha Theme!</span>
          </h1>
        </div>
      </div>
      {/* Header End */}
      {/* Main Content */}
      {/* Search Section */}
      <div
        className={`z-0 flex main absolute inset-0 justify-center h-full w-full my-auto`}
      >
        <form
          onSubmit={handleSubmit}
          className={`fixed text-white bg-inherit xl:w-halfscreen sm:w-3/4 rounded-xl sm:h-screen/4 p-4  place-self-center flex-row transition transition-duration-400 ease-in auto  shadow-slate-400 ${
            loading &&
            "bg-smooth-blue border-0 shadow-0 hover:shadow-0 bg-inherit "
          }`}
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              {/* Search Area */}
              <div className="search-area py-2 px-4 rounded-xl bg-smooth-blue flex flex-row justify-center h-full items-center">
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
                      onChange={(e) => setSearchUrl(e.target.value)}
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                {/* Search Button */}
                <div className="search-button w-auto ">
                  <button
                    type="submit"
                    className="search-btn text-white mx-3 px-4 py-2 font-bold rounded-3xl border-2 border-white flex flex-row leading-tight uppercase hover:text-smooth-blue hover:bg-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out items-center"
                  >
                    <div>
                      <span>Search</span>
                    </div>
                  </button>
                </div>
                {/* Search button End */}
              </div>
              {/* Search Area End*/}
            </>
          )}
        </form>
      </div>
      {/* Search Section End */}

      {/* Search Results Section */}
      <div
        className={`flex main-bottom bg-slate-200 text-white cointainer justify-center max-h-fit h-fit ${
          searchResults ? "min-h-full" : ""
        }`}
      >
        {searchResults && (
          <>
            <div className="z-40 flex flex-col container bg-white text-smooth-blue shadow-xl shadow-slate-300 items-center mt-40 p-10">
              {/* Results Section */}
              {/* Theme Section */}
              <ThemeSection theme={theme} />
              {/* Plugin Container */}
              <PluginSection plugins={plugins} />
              {/* Plugin Container End */}
            </div>
          </>
        )}
      </div>
      {/* Search Results Section End */}
      {/* Main Content End */}
    </div>
  );
}
