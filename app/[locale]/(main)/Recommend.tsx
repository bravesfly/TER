"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('feature');
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
    <WobbleCard
      containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
      className=""
    >
      <div className="max-w-md">
        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        {t('one')}
        </h2>
        <p className="mt-4 text-left  text-base/6 text-neutral-200">
        {t('oneMore')}
        </p>
      </div>
      <Image
        src="/calculator.svg"
        width={500}
        height={500}
        alt="linear demo image"
        className="absolute -right-0 lg:-right-[20%] grayscale filter -bottom-10 object-contain rounded-2xl"
      />
    </WobbleCard>
    <WobbleCard containerClassName="col-span-1 min-h-[300px]">
      <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
      {t('two')}
      </h2>
      <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
      {t('twoMore')}
      </p>
    </WobbleCard>
    <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
      <div className="max-w-4xl">
        <h2 className="max-w-4xl md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        {t('three')}
        </h2>
        <p className="mt-4 max-w-2xl text-left  text-base/6 text-neutral-200">
        {t('threeMore')}
        </p>
      </div>
      <Image
        src="/spending-money.svg"
        width={500}
        height={500}
        alt="linear demo image"
        className="absolute -right-10 md:-right-[40%] lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
      />
    </WobbleCard>
  </div>
  )
}