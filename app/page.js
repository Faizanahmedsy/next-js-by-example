"use client";

import AddTwoNumbers from "@/components/AddTwoNumbers";
import CustomButton from "@/components/CustomButton";
import ShowName from "@/components/ShowName";

export default function HomePage() {
  let name = "Sumit"; //This is a regular javascript variable that can be used in the return statement below but changing this would not cause the page to re-render

  return (
    <>
      <div className="bg-black h-screen text-white flex flex-col gap-5 justify-center items-center">
        <div>
          <h1 className="text-3xl font-bold underline">Hello {name}!</h1>
        </div>

        <CustomButton />
        <ShowName />

        <AddTwoNumbers num1={7} num2={3} />
      </div>
    </>
  );
}
