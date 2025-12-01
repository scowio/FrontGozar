import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Generate({ setStep }) {
  return (
    <div className="flex flex-col items-start justify-center bg-[#181A20] text-white gap-4">
      <span className="text-[18px] font-[700]">Get Free Configs with Gozar Collector!</span>
      <span className="text-[14px] text-[#E0E0E0] font-[500]">
        This tool can collect Telegram v2ray configs and test them by your
        network.
      </span>
      <button
        onClick={() => setStep(2)}
        className="w-full flex items-center justify-center bg-linear-to-bl from-[#335EF7] to-[#5F82FF] py-[11px] px-[48px] rounded-[12px]"
      >
        Generate Configs
      </button>
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
