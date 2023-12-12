import React from "react"
import image1 from '../assets/Vector_1.png'
import image2 from '../assets/Vector_2.png'

const Building = () => {
  return (
      <div className="relative h-[200px] w-[200px] m-auto ">
        <img src={image1} className="w-full" alt="" />

        <img
          src={image2}
          className="absolute top-[57%] left-[10%] font-bold"
          alt=""
        />
        <img src={image2} className="absolute top-[66%] left-[10%]" alt="" />
        <img src={image2} className="absolute top-[75%] left-[10%]" alt="" />

        <img src={image2} className="absolute top-[57%] left-[19%]" alt="" />
        <img src={image2} className="absolute top-[66%] left-[19%]" alt="" />
        <img src={image2} className="absolute top-[75%] left-[19%]" alt="" />

        <img src={image2} className="absolute top-[57%] left-[44%]" alt="" />
        <img src={image2} className="absolute top-[57%] left-[52.5%]" alt="" />
        <img src={image2} className="absolute top-[58%] left-[76%]" alt="" />

        <img src={image2} className="absolute top-[66%] left-[76%]" alt="" />
        <img src={image2} className="absolute top-[75%] left-[76%]" alt="" />

        <img src={image2} className="absolute top-[57%] left-[85%]" alt="" />
        <img src={image2} className="absolute top-[66%] left-[85%]" alt="" />
        <img src={image2} className="absolute top-[75%] left-[85%]" alt="" />
      </div>
  );
};

export default Building;
