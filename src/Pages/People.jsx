import React from "react";
import LeftPart from '../assets/VectorL_6.png'
import RightPart from '../assets/VectorR_7.png'
import Head from '../assets/VectorH_9.png'
import LongLeg from '../assets/VectorHi_10.png'
import shortLeg from '../assets/VectorM_8.png'

const People = () => {
  return (
      <div className="relative grid place-items-center h-[200px] w-[200px]">
        {/* center man */}
        <img src={LeftPart} alt="" className="absolute left-[35%]" />
        <img src={RightPart} alt="" className="absolute right-[35%]" />
        <img src={shortLeg} alt="" className="absolute bottom-[31%]" />
        <img src={Head} alt="" className="absolute top-[13%]" />

        {/* Left */}
        <img src={LeftPart} alt="" className="absolute bottom-[31%] left-[15%]" />
        <img src={LongLeg} alt="" className="absolute bottom-[31%] left-[30%]" />
        <img src={Head} alt="" className="absolute left-[20%] top-[10%]" />

        {/* right */}
        <img src={RightPart} alt="" className="absolute bottom-[31%] right-[15%]" />
        <img src={LongLeg} alt="" className="absolute bottom-[31%] right-[30%]" />
        <img src={Head} alt="" className="absolute right-[20%] top-[10%]" />

        {/* extra heads */}
        <img src={Head} alt="" className="absolute left-[33%] top-0" />
        <img src={Head} alt="" className="absolute right-[33%] top-0" />
      </div>
  );
};

export default People;
