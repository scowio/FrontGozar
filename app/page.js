// Components
import ConfigContainer from "@/components/config-container";

export default async function Home() {
  return (
    <div className="max-h-screen h-screen overflow-y-hidden bg-[#181A20] flex items-start justify-center">
      <ConfigContainer/>
    </div>
  );
}
