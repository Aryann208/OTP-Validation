import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className=" flex justify-center items-center h-[100vh] w-[100vw] bg-black font-black text-white">
        <div className=" flex flex-col justify-center items-center  h-[50vh] w-[30vw] bg-white rounded-2xl pb-10  ">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
