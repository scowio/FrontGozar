import Image from "next/image";
import ConfigBox from "./config-box";

export default function ConfigContainer({ configs }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#181A20] text-white p-[24px]">
      <div className="flex items-center justify-center gap-[4px]">
        <Image src="/pics/logo.png" alt="logo" width={24} height={24} />
        <h1 className="text-[24px] font-[700]">GozarX</h1>
      </div>
      
      <div className="h-[2px] bg-white w-auto"></div>
      <div className="flex flex-col items-start gap-[8px] my-[16px]">
        <span>Configs generated successfully !</span>
        <span>Quick Add only available for v2rayNG & Streisand .</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center bg-linear-to-bl from-[#335EF7] to-[#5F82FF] py-[11px] px-[48px] rounded-[12px]">Test Again</button>
        <button className="flex items-center justify-center bg-white text-black py-[11px] px-[48px] rounded-[12px]">Regenerate</button>
        <button className="col-span-2 flex items-center justify-center bg-linear-to-bl from-[#335EF7] to-[#5F82FF] py-[11px] px-[48px] rounded-[12px]">Sorting By Test Results</button>
      </div>
      <div className="overflow-y-scroll flex flex-col gap-[24px]">
        {configs.map((config, index) => (
          <ConfigBox config={config} key={index} />
        ))}
      </div>
    </div>
  );
}
