"use client";
import { useEffect , useState } from "react";
import ConfigBox from "./config-box";
import { get_channels_data } from "@/utils/api";

export default function Results({ configs }) {
  /* const [channelsWithProxies, setChannelsWithProxies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await get_channels_data();
      setChannelsWithProxies(data);
    };
    fetchData();
  }, []);
  
  const channels = channelsWithProxies ? channelsWithProxies.channels : [];

  let proxies = []
  channels.forEach((channel) => {
    proxies = proxies.concat(channel.proxies)
  })

  let active_proxies = proxies.filter((proxy) => proxy.ping !== null) */
  return (
    <div className="flex flex-col items-baseline justify-center bg-[#181A20] text-white">
      <div className="flex flex-col items-start gap-[8px] my-[16px]">
        <span>Configs generated successfully !</span>
        <span>Quick Add only available for v2rayNG & Streisand .</span>
      </div>
      <div className="grid grid-cols-2 gap-4 justify-between mb-[16px] w-full">
        <button className="flex items-center justify-center bg-linear-to-bl from-[#335EF7] to-[#5F82FF] py-[11px] px-[48px] rounded-[12px]">
          Test Again
        </button>
        <button className="flex items-center justify-center bg-white text-black py-[11px] px-[48px] rounded-[12px]">
          Regenerate
        </button>
        <button className="col-span-2 flex items-center justify-center bg-linear-to-bl from-[#335EF7] to-[#5F82FF] py-[11px] px-[48px] rounded-[12px]">
          Sorting By Test Results
        </button>
      </div>
      <div className="overflow-y-scroll flex h-full flex-col gap-[24px]">
        {configs && configs.map((config, index) => (
          <ConfigBox config={config} key={index} />
        ))}
      </div>
    </div>
  );
}
