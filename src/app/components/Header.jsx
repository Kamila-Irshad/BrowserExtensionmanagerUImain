import React from "react";
import Image from "next/image";
import logoImage from "../../../public/Images/logo.svg";
import brightNessLogo from "../../../public/Images/logoBright.svg"
const Header = () => {
    return (
        <div className=" h-screen bg-[#09153e]  border-gray-700 p-10  ">
            <div className="flex justify-between bg-[#212636] p-2 rounded-2xl">
                <div className="p-2 text-white">
                    <Image src={logoImage} alt="LogoImage" width={150} height={200}
                        className=""
                    ></Image>
                </div>
                <div className=" p-4  bg-[#2f364b] rounded-2xl">
                    <Image src={brightNessLogo} width={20} height={20} className=" " ></Image>
                </div>
            </div>

        </div >
    );
};

export default Header;
