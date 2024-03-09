"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Chevron() {
  const router = useRouter();
  const style =
    "bg-black cursor-pointer w-10 h-10 rounded-full flex items-center justify-center";
  return (
    <div className="flex items-center justify-center gap-3">
      <div onClick={() => router.back()} className={style}>
        <MdChevronLeft size={25} className="text-gray-400" />
      </div>
      <div onClick={() => router.forward()} className={style}>
        <MdChevronRight size={25} className="text-gray-400" />
      </div>
    </div>
  );
}
