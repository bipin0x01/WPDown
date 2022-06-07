import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button";

export default function ThemeSection({ theme }) {
  return (
    <div className="theme-section w-full sm:p-0 p-4 border-2 shadow-lg hover:shadow-md transition ease-in-out auto shadow-slate-200 m-2 my-4 ">
      {/* Theme Section Left */}

      <div className=" results-title m-2 p-2 px-4 text-white font-left bg-smooth-blue font-bold text-xl ">
        Theme Details
      </div>
      <theme className=" flex flex-col lg:flex-row items-center">
        <div className="theme-section-left flex flex-row justify-center">
          <div className="theme-screenshot w-full p-2">
            <Image
              src={
                "https://res.cloudinary.com/kaji/image/fetch/" +
                theme.theme_info.screenshot
              }
              alt="theme screenshot"
              height={350}
              width={500}
            />
          </div>
        </div>
        {/* Theme Section Left End */}
        {/* Theme Section Right */}

        <div className="theme-section-right w-full ">
          <h3 className="m-4 mt-4 text-left text-lg font-bold ">
            <div className="theme-name mb-3">
              Theme Name :{" "}
              <span className="font-normal text-black ml-2">
                {theme.theme_info.theme}
              </span>
            </div>
            <div className="theme-version mb-3">
              version:{" "}
              <span className="font-normal text-black ml-2">
                {theme.theme_info.version}
              </span>
            </div>
            <div className="theme-author mb-3">
              Author:{" "}
              <span className="font-normal text-black ml-2">
                <Link href={theme.theme_info.authorLink}>
                  <a className="hover:text-smooth-blue">
                    {theme.theme_info.author}
                  </a>
                </Link>
              </span>
            </div>
            <div className="theme-tags whitespace-normal">
              <div className="tags-group flex flex-row">
                <div className="tag-title ">Tags: </div>
                <div className="tags-list ml-2 flex flex-wrap font-medium">
                  {theme.theme_info.tags.map((tag, index) => (
                    <div
                      className="text-sm m-2 hover:border-2 hover:bg-smooth-blue hover:text-white tag mx-1 mt-1 px-1 rounded-xl min-w-fit border-2 border-smooth-blue"
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
            {/* Download Button */}
            {theme.theme_download.status === "success" ? (
              // Download Button
              <>
                <div className="download-button flex flex-row mt-6">
                  <Button label="Download" link={theme.theme_download.url} />
                </div>
              </>
            ) : (
              <>
                <div className="download-button flex flex-row mt-6">
                  <div className="text-md text-red-500">
                    {theme.theme_download.message}
                  </div>
                </div>
              </>
            )}
          </h3>
        </div>
        {/* Theme Section Right End */}
      </theme>
    </div>
  );
}
