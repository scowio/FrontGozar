// Components
import ConfigContainer from "@/components/config-container";
// Utils
import { get_channels_data } from "@/utils/api";

export default async function Home() {
  const channels_with_proxies = await get_channels_data() 
  //console.log(channels_with_proxies)
  const channels = channels_with_proxies.channels
  //console.log("channels:", channels)

  let proxies = []
  channels.forEach((channel) => {
    proxies = proxies.concat(channel.proxies)
  })

  let active_proxies = proxies.filter((proxy) => proxy.ping !== null)
  
  console.log(proxies[0])
  /* const countryCode = proxies[0]?.flag|| 'US'; 
  console.log("raw:", countryCode);
  console.log("length:", countryCode?.length);
  console.log("chars + codes:", [...countryCode].map(ch => `${ch} (U+${ch.codePointAt(0).toString(16).toUpperCase().padStart(4,'0')})`));
  console.log(JSON.stringify(countryCode)) */
  
  
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <ConfigContainer configs={active_proxies} />
    </div>
  );
}
