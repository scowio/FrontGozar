"use client";
import { useState } from "react";
import Image from "next/image";
import ConfigBox from "./config-box";
import Results from "./result";
import Generate from "./generate";
import Progress from "./progress";

export default function ConfigContainer() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center bg-[#181A20] text-white p-[24px]">
      <div className="flex items-center justify-center gap-[4px]">
        <Image src="/pics/logo.png" alt="logo" width={24} height={24} />
        <h1 className="text-[24px] font-[700]">GozarX</h1>
      </div>
      <div className="h-[2px] bg-white w-auto"></div>
      {step === 1 ? <Generate setStep={setStep} /> : step === 2 ? <Progress setStep={setStep} time={3000} /> : <Results/>}
    </div>
  );
}
