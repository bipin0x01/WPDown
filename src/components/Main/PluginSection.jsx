import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const style = {
    pluginContainer:
        'plugin-container w-full my-4 sm:p-0 p-4 border-2 border-t-0 shadow-lg hover:shadow-md transition ease-in-out auto shadow-slate-200 mx-2 ',
    pluginTitle:
        ' results-title m-2 p-2 px-4 text-white font-left bg-smooth-blue font-bold text-xl ',
    horizontalLine:"border border-2 bg-gray-200 m-2 ",
    downloadBtnSection:"plugin-download-section m-2 p-2 self-left lg:self-center items-center justify-center bg-white",
    content:"font-normal text-black ml-2",
    themeDetailsSection:"plugin-section-bottom px-4 w-full",
    themeDetails:"m-4 text-left text-lg font-bold ",
    pluginScreenshotSection:"plugin-section-top  justify-center flex flex-col items-center",
        pluginScreenshot:"plugin-banner relative h-fit",

}

export default function PluginSection({ plugins }) {
    return (
        <div className={style.pluginContainer}>
            {/* Plugins Section */}
            <div className={style.pluginTitle}>Plugin Details</div>
            {plugins.map((plugin, index) => (
                <section key={index}>
                    <div className="flex flex-row justify-center w-full">
                        {/* Plugin Numbering */}

                        <div className="plugins-section flex flex-col p-2 md:flex-row gap-2 ">
                            {/* Plugin Section Top */}

                            <div className={style.pluginScreenshotSection}>
                                <div className={style.pluginScreenshot}>
                                    <Image
                                        src={
                                            'https://res.cloudinary.com/kaji/image/fetch/' +
                                            plugin.banner
                                        }
                                        alt="plugin-banner"
                                        className="w-full h-full"
                                        height={150}
                                        width={600}
                                        responsive="true"
                                    />
                                </div>
                            </div>
                            {/* Plugin Section Top End */}

                            {/* Plugin Section Bottom */}

                            <div className={style.themeDetailsSection}>
                                <h3 className={style.themeDetails}>
                                    <div className="plugin-name mb-3">
                                        Plugin Name :{' '}
                                        <span className={style.content}>
                                            {plugin?.plugin_name}
                                        </span>
                                    </div>
                                    <div className="theme-version">
                                        Description:{' '}
                                        <span className={style.content}>
                                            {plugin?.desc}
                                        </span>
                                    </div>
                                </h3>
                            </div>
                            {/* Plugin Section Bottom End */}

                            {/* Plugin Download Section */}
                            <div className={style.downloadBtnSection}>
                                <Button
                                    label="Download"
                                    link={plugin?.download_link}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Don't show line at last */}
                    {index !== plugins?.length - 1 && (
                        <div className={style.horizontalLine}></div>
                    )}
                </section>
            ))}
            {/* Plugins Section End */}
        </div>
    )
}
