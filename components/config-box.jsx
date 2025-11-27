import React from "react";
import Flags from "country-flag-icons/react/1x1";
import UnknownFlag from "./unknowen";

export default function ConfigBox({ config }) {
  const countryCode = config?.country;
  let FlagComponent = Flags[countryCode.toUpperCase()];
  if (!FlagComponent) {
    console.log(config);
    console.error(`Flag component not found for code: ${countryCode}`);
    return null;
  }

  return (
    <div className="p-3 w-[376px] h-[82px] bg-[#04060F0] flex flex-col items-center justify-center rounded">
      <div className="w-[344px] h-[50px] flex bg-gray-500 items-center justify-center gap-4 rounded">
        <div className="w-[32px] h-[32px] flex items-center justify-center rounded-[100%]">
          {countryCode === "UN" ? (
            <UnknownFlag />
          ) : (
            <FlagComponent className="w-[32px] h-[32px] rounded-[100%]" />
          )}
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
