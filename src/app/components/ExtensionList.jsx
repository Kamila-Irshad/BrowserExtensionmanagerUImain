'use client'
import React from "react";
import { useState } from "react";
import Container from "./Container";
import Button from "./Button";
import BoxContainer from "./BoxContainer";
import Header from "./Header";
const ExtensionList = () => {
    const [showBox, setShowBox]=useState("all")
   
    
    return (
        <Container>
            <Header />
            <div className="">
                <div className="flex justify-between lg:flex-row md:flex-row flex-col text-center items-center space-y-3 ">
                    <h1 className="text-white text-3xl font-bold">Extension List</h1>
                    <div className=" flex  flex-row gap-2 ">
                        <Button onClick={()=>setShowBox ('all')} >All</Button>
                        <Button onClick={()=>setShowBox("active")}>Active</Button>
                        <Button onClick={()=>setShowBox('inActive')}>UnActive</Button>
                    </div>
                </div>
                <div>
                    <BoxContainer filtereBox={showBox}></BoxContainer>


                </div>
            </div>
        </Container>
    );
};

export default ExtensionList;
