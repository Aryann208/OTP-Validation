import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className=" flex justify-center items-center h-[100vh] w-[100vw] bg-black font-black text-white">
        <div className="h-[95vh] w-[100vw] flex flex-col justify-center items-center sm:h-[80vh] sm:w-[60vw]  md:h-[70vh] md:w-[50vw] lg:h-[60vh] mlgd:w-[40vw]  bg-white rounded-2xl pb-10  ">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
