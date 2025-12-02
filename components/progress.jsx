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

export default function Progress({ setStep, time, setConfigs }) {
  const [channelsWithProxies, setChannelsWithProxies] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(3);
    }, time);
    const fetchData = async () => {
      const data = await get_channels_data();
      setChannelsWithProxies(data);
    };
    fetchData();
    return () => clearTimeout(timer);
  }, [setStep, time]);
  useEffect(() => {
    if (!channelsWithProxies) return;

    const channels = channelsWithProxies.channels || [];

    const proxies = channels.flatMap((channel) => channel.proxies || []);
    const active_proxies = proxies.filter((proxy) => proxy.ping !== null);

    setConfigs(active_proxies);
  }, [channelsWithProxies, setConfigs]);
  return (
    <div>
      <span>Get Free Configs with Gozar Collector !</span>
      <span>
        This tool can collect Telegram v2ray configs and test them by your
        network.
      </span>
      <div className="flex">
        <Image
          src="/pics/Group28.png"
          alt="progress"
          width={100}
          height={100}
        />
        <div>
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
