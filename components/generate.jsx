import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Generate({ setStep }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#181A20] text-white mt-[16px] gap-4">
      <span>Get Free Configs with Gozar Collector !</span>
      <span>This tool can collect Telegram v2ray configs and test them by your network.</span>
      <button onClick={() => setStep(2)}>Generate Configs</button>
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
