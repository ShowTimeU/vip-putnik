import { ShowcaseHotprice } from "@/components/showcaseHotprice";
import { ItTourWidget } from "@/components/itTourWidget";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-white overflow-x-hidden py-10">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center space-y-5">
          <ItTourWidget />
          <ShowcaseHotprice />
        </div>
      </div>
    </>
  );
}
