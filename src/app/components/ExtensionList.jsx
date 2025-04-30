import React from "react";
import Container from "./Container";
import Button from "./Button";
import BoxContainer from "./BoxContainer";
import Header from "./Header";
const ExtensionList = () => {
    return (
        <Container>
            <Header />
            <div className="">
                <div className="flex justify-between lg:flex-row md:flex-row flex-col text-center items-center space-y-3 ">
                    <h1 className=" dark:text-white text-3xl text-black font-bold">Extension List</h1>
                    <div className=" flex  flex-row gap-2 ">
                        <Button>All</Button>
                        <Button>Active</Button>
                        <Button>UnActive</Button>
                    </div>
                </div>
                <div>
                    <BoxContainer></BoxContainer>


                </div>
            </div>
        </Container>
    );
};

export default ExtensionList;
