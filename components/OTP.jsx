"use client";
import { useState } from "react";
import Input from "./Input";
import OtpInput from "react-otp-input";
const OTP = ({ value, valueLength, onChange }) => {
  const [otp, setOtp] = useState("");
  return (
    <div className=" w-full my-3 flex justify-center ">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span className="mx-3"> - </span>}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
};

export default OTP;
