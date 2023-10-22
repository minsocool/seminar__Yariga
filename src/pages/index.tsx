import Image from "next/image";
import Sea from "@/public/sea-bay.jpg";

export default function Home() {
  return (
    <>
      <div className="">
        {/* <img src="/sea-bay.jpg" alt="sea" /> */}
        <Image src={Sea} alt="sea" />
      </div>
    </>
  );
}
