import Image from "next/image"
export default function Pic() {
    return(
        <div className="bg-black">
            <center><Image
              src="/assests/cev.jpg"
              alt="hero image"
              className=""
              width={600}
              height={600}
            /></center>
        </div>
    )
    
}