"use client";
import DropBox from "@/app/components/DragDrop/DropBox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col item-center  p-24">
      <div className="flex h-20 justify-center p-4 bg-red-100">
        file conversion website
      </div>
      <div className="flex w-full h-full">
        <DropBox />
        {/* <div>
          <DragFile />
        </div>
        <div className="my-8 mx-8 rounded-xl border w-fit" ref={dropRef}>
          <div className="my-4">
            <div>
              <p className="mx-16 font-bold text-black">Droped Items</p>
            </div>
            {isOver ? <div>is getting draged</div> : <div>not draged</div>}

            {basket.map((e: any, i: number) => (
              <p
                key={i}
                className="border w-fit my-2 p-2 mx-16 rounded bg-indigo-400 text-white font-bold cursor-pointer"
              >
                {e.name}
              </p>
            ))}
          </div>
        </div> */}
      </div>
    </main>
  );
}
