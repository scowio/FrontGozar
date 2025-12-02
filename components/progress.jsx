import Image from "next/image";
import { useEffect , useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProgressBar from "./progress-bar";
import { get_channels_data } from "@/utils/api";
import { useMemo } from "react";

export default function Progress({ setStep, time, setConfigs }) {
  const [channelsWithProxies, setChannelsWithProxies] = useState();
  useEffect(() => {
    const timer = setTimeout(() => {
      //setStep(3)
    }, time)

    return () => clearTimeout(timer)
  }, [time, setStep])

  useEffect(() => {
    let cancelled = false

    async function fetchData() {
      try {
        const data = await get_channels_data()
        console.log('Fetched Channels Data:', data)
        if (!cancelled) {
          setChannelsWithProxies(data)
        }
      } catch (err) {
        console.error('Error fetching channels data:', err)
      }
    }

    fetchData()
    return () => {
      cancelled = true
    }
  }, []) 

  const activeProxies = useMemo(() => {
    if (!channelsWithProxies) return []

    const channels = channelsWithProxies.channels || []
    return channels
      .flatMap(channel => channel.proxies || [])
      .filter(proxy => proxy && proxy.ping != null)
  }, [channelsWithProxies])

  useEffect(() => {
    if (!activeProxies.length) return
    setConfigs(activeProxies)
    setStep(3)
    console.log('Active Proxies:', activeProxies)
  }, [activeProxies, setConfigs])
  return (
    <div className="flex flex-col items-start justify-center bg-[#181A20] text-white gap-4 w-full">
      <span className="text-[18px] font-[700]">Get Free Configs with Gozar Collector!</span>
      <span className="text-[14px] text-[#E0E0E0] font-[500]">
        This tool can collect Telegram v2ray configs and test them by your
        network.
      </span>
      <div className="flex items-center justify-center gap-[24px] w-full">
        <Image
          src="/pics/Group28.png"
          alt="progress"
          width={100}
          height={100}
        />
        <div className="flex flex-col justify-center gap-[4px]">
          <span>Generating...</span>
          <span>wait a moment</span>
        </div>
        <ProgressBar duration={time} />
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
