"use client";
import { useState } from "react";
import Image from "next/image";
import Results from "./result";
import Generate from "./generate";
import Progress from "./progress";

export default function ConfigContainer() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center text-white p-[24px] max-w-[480px]">
      <div className="flex items-center justify-center gap-[4px]">
        <Image src="/pics/logo.png" alt="logo" width={24} height={24} />
        <h1 className="text-[24px] font-[700]">GozarX</h1>
      </div>
      <div className="h-[2px] bg-linear-to-bl from-[#335EF7] to-[#5F82FF] w-full"></div>
      {step === 1 ? <Generate setStep={setStep} /> : step === 2 ? <Progress setStep={setStep} time={3000} /> : <Results/>}
    </div>
  );
}
