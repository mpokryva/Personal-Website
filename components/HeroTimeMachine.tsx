'use client'

import { useState } from 'react'
import type { StaticImageData } from 'next/image'
import desktop2024 from '@/assets/hero-time-machine/2024-desktop.webp'
import mobile2024 from '@/assets/hero-time-machine/2024-mobile.webp'
import desktop2025 from '@/assets/hero-time-machine/2025-desktop.png'
import mobile2025 from '@/assets/hero-time-machine/2025-mobile.png'
import desktopNow from '@/assets/hero-time-machine/now-desktop.png'
import mobileNow from '@/assets/hero-time-machine/now-mobile.png'

type HeroEra = {
  date: string
  image: {
    desktop: StaticImageData
    mobile: StaticImageData
  }
}

const HERO_ERAS: HeroEra[] = [
  {
    date: 'Apr 2026',
    image: { desktop: desktopNow, mobile: mobileNow },
  },
  {
    date: 'Aug 2025',
    image: { desktop: desktop2025, mobile: mobile2025 },
  },
  {
    date: 'May 2024',
    image: { desktop: desktop2024, mobile: mobile2024 },
  },
]

export default function HeroTimeMachine() {
  const [activeEraIndex, setActiveEraIndex] = useState(0)
  const activeEra = HERO_ERAS[activeEraIndex]
  const showNextEra = () =>
    setActiveEraIndex((index) => (index + 1) % HERO_ERAS.length)

  return (
    <>
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        {HERO_ERAS.map((heroEra, index) => (
          <picture
            key={heroEra.date}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              activeEraIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source
              media="(max-width: 639px)"
              srcSet={heroEra.image.mobile.src}
            />
            <img
              src={heroEra.image.desktop.src}
              alt=""
              fetchPriority={index === 0 ? 'high' : undefined}
              decoding="async"
              className="h-full min-h-screen w-full object-cover object-center"
            />
          </picture>
        ))}
      </div>
      <button
        type="button"
        aria-label={`Showing ${activeEra.date} model. Cycle hero background era.`}
        className="absolute right-4 top-4 z-30 flex min-h-11 items-center gap-2 rounded-full border border-[#4A2410]/20 bg-white/72 px-3.5 py-2 text-sm font-medium text-[#4A2410] shadow-sm backdrop-blur-md transition hover:bg-white/88 focus:outline-none focus:ring-2 focus:ring-[#4A2410]/45 sm:right-6 sm:top-6"
        onClick={showNextEra}
      >
        <span aria-hidden>Model</span>
        <span
          aria-live="polite"
          className="rounded-full bg-[#4A2410] px-2 py-0.5 text-xs text-white"
        >
          {activeEra.date}
        </span>
      </button>
    </>
  )
}
