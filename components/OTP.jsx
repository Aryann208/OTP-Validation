"use client";
import { useState } from "react";
import Input from "./Input";
import OtpInput from "react-otp-input";
const OTP = ({ value, valueLength, onChange }) => {
  const [otp, setOtp] = useState("");
  return (
    <div className=" rounded-xl py-3 bg-gray-400  w-full my-3 flex justify-center ">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        inputType="number"
        inputStyle={{ borderRadius: "5px", width: "1.5em" }}
        renderSeparator={<span className="mx-1">-</span>}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
};

export default OTP;
