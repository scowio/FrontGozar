import Image from "next/image"

export default function UnknownFlag() {
    return (
        <div className="w-[32px] h-[32px] flex items-center justify-center rounded-[100%]">
            <div className="w-[32px] h-[32px] rounded-[100%] bg-[#04060F] text-white flex items-center justify-center">
                <Image src="/pics/un.jpg" alt="unknown" width={32} height={32} />
            </div>
        </div>
    )
}