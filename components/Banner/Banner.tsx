import React from "react";
import Button from "../shared/Button/Button";
import { BsChevronRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div
      className={`bg-secondary  bg-[3008px 736px] bg-no-repeat bg-bottom h-[736px]`}
      style={{
        backgroundImage: 'url("/images/hero_iphone15pro_large.jpg")',
      }}>
      <div className="pt-[55px] mt-[44px]">
        <p className="text-center text-[56px] text-common font-semibold leading-[1.07143] tracking-[-.005em]">
          iPhone 15 Pro
        </p>
        <p className="text-center text-[28px] text-common font-normal leading-[1.07143] tracking-[-.005em] m-[6px]">
          Titanium. So strong. So light. So Pro.
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

export default Banner;
