import React from "react";
import Image from "next/image";
import logoImage from "../../../public/Images/logo.svg";
// import brightNessLogo from "../../../public/Images/logoBright.svg"
// import DarkModeToggle from "./DarkModeToggle";
const Header = () => {
    return (
        <>
            <div className=" py-10 x h-[140px]  ">
                <div className=" flex justify-between  bg-[#EDF6FA] p-2 rounded-2xl">
                    <div className="p-2 text-black ">
                        <Image src={logoImage} alt="LogoImage" width={0} height={0}
                            className=" w-[150px] text-white"
                        ></Image>
                    </div>
                    <div className="bg-[#545969] rounded-2xl py-3 px-3 ">
                        {/* <Image src={brightNessLogo} width={0} height={0} className=" " alt="BrightNessLogo"

                        ></Image> */}
                        {/* <DarkModeToggle /> */}
                    </div>
                </div>

            </div >
        </>
    );
};

export default Header;
