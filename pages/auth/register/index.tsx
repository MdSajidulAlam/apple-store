import Input from "@/components/shared/Input/Input";
import React from "react";

const index = () => {
  return (
    <div className="my-[80px] w-[52%] mx-auto ">
      <p className="text-[40px] font-semibold">
        Register for better experience
      </p>
      <form className="flex flex-col justify-center">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          className="w-"
        />
      </form>
    </div>
  );
};

export default index;
