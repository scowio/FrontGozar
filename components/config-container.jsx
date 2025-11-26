import ConfigBox from "./config-box";

export default function ConfigContainer({ configs }) { 
  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center">
      {configs.map((config , index) => (
        <ConfigBox config={config} key={index} />
      ))}
    </div>
  );
}