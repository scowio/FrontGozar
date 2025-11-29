import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Progress({setStep, time}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            setStep(3);
        }, time);
        return () => clearTimeout(timer);
    }, [setStep, time]);
    return(
        <div>
            <span>Get Free Configs with Gozar Collector !</span>
            <span>This tool can collect Telegram v2ray configs and test them by your network.</span>
            <div className="flex">
                <Image src="/pics/Group28.png" alt="progress" width={100} height={100} />
                <div>
                    <span>Generating...</span>
                    <span>wait a moment</span>
                </div>
                <div></div>
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
    )
}