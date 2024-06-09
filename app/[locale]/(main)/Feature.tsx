import BoxReveal from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
export default function Feature() {
  const t = useTranslations('energy');
  return (
    <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#687af0"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
        Save Up to 80%<span className="text-[#687af0]">.</span>
        </p>
      </BoxReveal>
 
      <BoxReveal boxColor={"#687af0"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
        on Transaction Costs with {" "}
          <span className="font-semibold text-[#687af0]">Tron Energy Leasing!</span>
        </h2>
      </BoxReveal>
 
      <BoxReveal boxColor={"#687af0"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; Tired of high transaction fees? With Tron Energy Leasing, each transaction costs only 
            <span className="font-semibold text-[#687af0]"> 1 TRX</span>,allowing you to save 
            <span className="font-semibold text-[#687af0]"> 9-10 TRX</span> effortlessly!<br />
            -&gt; Every wallet address can view its energy and bandwidth usage in real-time, ensuring transparency and security. 
            You can also easily check the energy consumption of each transaction hash, making it completely 
            <span className="font-semibold text-[#687af0]"> trustworthy!</span><br />
          </p>
        </div>
      </BoxReveal>
 
      <BoxReveal boxColor={"#687af0"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#687af0]">Explore</Button>
      </BoxReveal>
    </div>
  )
}