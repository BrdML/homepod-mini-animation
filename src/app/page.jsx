import Image from "next/image";
import './index.css';

export default function Home() {
  return (
    <main className="w-full h-full mt-20 overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="gradiantText text-7xl font-extrabold">Nothing Short</h1>
        <h2 className="gradiantText text-7xl font-extrabold">Of amazing</h2>
        <h3 className="text-4xl font-bold">HomePod mini</h3>
      </div>
      <div className="homePod-white flex justify-center w-full">
        <Image className="absolute bottom-0 w-[75%] h-[230px]" src="/assets/images/homePod.svg" alt="homePod" width={1399} height={438}/>
        <div className="imgblur blur opacity-[.97] absolute -bottom-2 w-[75%] h-[83px]">

        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="discoverBtn absolute bottom-[120px] bg-black text-white px-4 h-10 rounded-full cursor-pointer">Découvrir↓</button>
      </div>
    </main>
  );
}
