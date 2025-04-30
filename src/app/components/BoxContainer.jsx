import React from "react";
import Image from "next/image";
import Container from "./Container";
import Switch from "./Switch";
const BoxContainer = () => {
    const ContainerData = [
        {
            id: 1,
            name: "DevLens",
            paragraph:
                "Quickly inspect page layouts and visualize element boundaries.",
            image: "/Images/logo-console-plus.svg",
        },
        {
            id: 2,
            name: "StyleSpy",
            paragraph: "Instantly analyze and copy CSS from any webpage element.",
            image: "/Images/logo-dom-snapshot.svg",
        },
        {
            id: 3,
            name: "SpeedBoost",
            paragraph: "Optimizes browser resource usage to accelerate page loading.",
            image: "/Images/logo-grid-guides.svg",
        },
        {

            id: 4,
            name: "JSONWizard",
            paragraph:
                "Formats, validates, and prettifies JSON responses in-browser.",
            image: "/Images/logo-json-wizard.svg",
        },
        {
            id: 5,
            name: "TabMaster Pro",
            paragraph: "Organizes browser tabs into groups and sessions.",
            image: "/Images/logo-link-checker.svg",
        },
        {
            id: 6,
            name: "ViewportBuddy",
            paragraph:
                "Simulates various screen resolutions directly within the browser.",
            image: "/Images/logo-markup-notes.svg",
        },
        {
            id: 7,
            name: "Markup Notes",
            paragraph:
                "Enables annotation and notes directly onto webpages for collaborative debugging.",
            image: "/Images/logo-palette-picker.svg",
        },
        {
            id: 8,
            name: "GridGuides",
            paragraph:
                "Overlay customizable grids and alignment guides on any webpage..",
            image: "/Images/logo-speed-boost.svg",
        },
        {
            id: 9,
            name: "Palette Picker",
            paragraph: "Instantly extracts color palettes from any webpage.",
            image: "/Images/logo-tab-master-pro.svg",
        },
        {
            id: 10,
            name: "LinkChecker",
            paragraph: "Scans and highlights broken links on any page.",
            image: "/Images/logo-viewport-buddy.svg",
        },
        {
            id: 11,
            name: "DOM Snapshot",
            paragraph: "Capture and export DOM structures quickly.",
            image: "/Images/logo-style-spy.svg",
        },
        {
            id: 12,
            name: "ConsolePlus",
            paragraph:
                "Enhanced developer console with advanced filtering and logging.",
            image: "/Images/logo-devlens.svg",
        },
    ];
    return (
        <>
            <div className="grid grid-cols-12   gap-4 " >
                {ContainerData.map((data) => (
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12" key={data.id}>
                        <div key={data.id} className="dark:bg-[#323A49] dark:text-white bg-[#EDF5FB] text-black h-[200px] max-w-[600px] min-w-[200px] p-8  items-center rounded-2xl mt-2  ">
                            <div className="flex gap-3 ">
                                <Image alt="Image" width={50} height={50} src={data.image}></Image>
                                <div className="">
                                    <p className="text-2xl font-bold">{data.name}</p>
                                    <p className="text-sm">{data.paragraph} </p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center mt-4 bg">
                                <button className="border py-1 px-2 text-sm rounded-2xl  ">
                                    Remove
                                </button>
                                <Switch className="border  p-1 rounded-2xl">on/off</Switch>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BoxContainer;
