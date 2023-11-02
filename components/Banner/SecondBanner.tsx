import React from "react";
import { BsChevronRight } from "react-icons/bs";
import Button from "../shared/Button/Button";

const SecondBanner = () => {
  return (
    <div
      className={`bg-white bg-[3008px 624px] bg-no-repeat bg-bottom h-[624px]`}
      style={{
        backgroundImage: 'url("/images/hero_iphone15_announce_large.jpg")',
      }}>
      <div className="pt-[47px]">
        <p className="text-center text-[56px] text-secondary font-semibold leading-[1.07143] tracking-[-.005em]">
          iPhone 15 Pro
        </p>
        <p className="text-center text-[28px] text-secondary font-normal leading-[1.07143] tracking-[-.005em] m-[6px]">
          New camera. New design. Newphoria.
        </p>
        <div className="flex justify-center items-center gap-[35px] mt-8">
          <Button className="flex items-center justify-center text-common-button tracking-[inherit] text-[21px] leading-[1.381] font-normal ">
            <span className="underline-appear hover:underline-appear">
              Learn more
            </span>{" "}
            <span className="text-[15px]">
              <BsChevronRight />
            </span>
          </Button>
          <Button className="flex items-center justify-center text-common-button tracking-[inherit] text-[21px] leading-[1.381] font-normal">
            <span className="underline-appear hover:underline-appear">Buy</span>{" "}
            <span className="text-[15px]">
              <BsChevronRight />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
