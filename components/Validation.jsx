import Layout from "./Layout";
import Button from "./Button/Button";

import OTP from "./OTP";

const Validation = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center text-black h-[100%]  ">
        <div className="flex flex-col">
          <h2 className="text-black text-center  ">Phone Verification</h2>
          <p className="font-thin text-gray-500">
            Enter the OTP you received on 89206-6XXXX
          </p>
        </div>
        <OTP />
        <div className=" font-[calibri] flex justify-between font-normal text-blue-600 mb-5">
          <p>Change Number</p>
          <p>Re-send OTP</p>
        </div>
        <Button className="px-3 " buttonText="Verify Phone Number" />
      </div>
    </Layout>
  );
};

export default Validation;
