import React from "react";
import Button from "./Button/Button";
import Layout from "./Layout";
import Link from "next/link";
const Open = () => {
  return (
    <>
      <Layout>
        <div className=" text-[black]  py-10 ">
          <h1 className=" text-[2em] font-[monsterrat] text-center ">
            MiM-essay
          </h1>
          <p className=" text-[1.4em] text-center font-medium font-[opensans] ">
            OTP Validation
          </p>
        </div>
        <Link
          className="w-full h-full flex justify-center item-center"
          href="/validation"
        >
          <Button buttonText="Click" />
        </Link>
      </Layout>
    </>
  );
};

export default Open;
