import Image from 'next/image'
import Social from '@/components/Social'
import StyledLink from '@/components/StyledLink'
import backgroundImage from '@/public/bg-new.png'
import backgroundImageMobile from '@/public/bg-new-mobile.png'
import backgroundImageTablet from '@/public/bg-new-tablet.png'

const HERO_COLOR = '#4A2410'

function Divider() {
  return <div aria-hidden className="h-px w-10 bg-current opacity-30" />
}

export default function Home() {
  return (
    <>
      <div className="image-container relative">
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet={backgroundImageMobile.src}
          />
          <source
            media="(max-width: 1024px)"
            srcSet={backgroundImageTablet.src}
          />
          <Image
            src={backgroundImage}
            alt="Background image"
            className="bg-image min-h-screen object-cover object-center w-full blur-[1px]"
            priority
            fill
          />
        </picture>
        <div className="horizontal-scrim invisible xl:visible absolute top-0 left-0 w-full h-full pointer-events-none"></div>
        <div className="vertical-scrim xl:invisible absolute top-0 left-0 w-full h-full pointer-events-none"></div>
        <div className="absolute -bottom-1 left-0 w-full h-[30%] bg-gradient-to-b from-transparent to-white pointer-events-none" />
        <div
          className="absolute top-0 left-0
          w-full
          px-2 pt-16
          min-h-[110vh] flex flex-col
          sm:h-auto sm:min-h-0 sm:justify-start
          tracking-wide contain-content sm:pl-[5vw] sm:pt-[16vh] text-black"
        >
          <div
            className="backdrop-blur-gradient max-w-[40rem] p-8"
            style={{ color: HERO_COLOR }}
          >
            <div
              className="pb-8 font-semibold"
              style={{
                fontFamily: '"Fraunces", serif',
                fontSize: '56px',
                lineHeight: 1,
                letterSpacing: '-0.01em',
              }}
            >
              Hi, I'm Miki Pokryvailo
            </div>
            <div
              className="max-w-[40rem] text-xl leading-[1.7]"
              style={{ fontFamily: '"Source Serif 4", serif' }}
            >
              I'm a software engineer based in SF, focused on backend and
              product at{' '}
              <StyledLink
                href="https://yutori.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yutori
              </StyledLink>
              . I'm often the person unafraid to hack on and ship the weird
              idea that becomes a 10x improvement.
            </div>
          </div>
        </div>
      </div>
      <section
        className="bg-white text-black"
        style={{ fontFamily: '"Source Serif 4", serif' }}
      >
        <div className="w-full max-w-[40rem] px-6 py-20 sm:py-28 sm:pl-[5vw] sm:pr-8">
          <Divider />
          <h2
            className="mt-8 font-medium tracking-[-0.01em] text-[1.875rem] leading-[1.15] sm:text-[2.25rem]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            More about me
          </h2>
          <div className="mt-10 space-y-6 text-base leading-[1.7] sm:text-[1.0625rem]">
            <p>
              I'm the first product hire at Yutori, and the second hire
              overall. I've built much of the{' '}
              <StyledLink
                href="https://scouts.yutori.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                product
              </StyledLink>{' '}
              backend including durable workflows, user-facing APIs, and our
              onboarding (which I really like). I also solo full-stack'ed the
              early demos and initial data collection tooling.
            </p>
            <p>
              Previously, I was the first employee at{' '}
              <StyledLink
                href="https://www.thenile.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nile
              </StyledLink>
              . I worked on the initial product, and when we pivoted to a
              tenant-aware database, I built our SQL parsing framework,
              worked on the Rust database sync engine, helped define the SDK
              experience, made CI go fast, and more. I also wrote a{' '}
              <StyledLink
                href="https://news.ycombinator.com/item?id=32241820"
                target="_blank"
                rel="noopener noreferrer"
              >
                popular blog post
              </StyledLink>{' '}
              about Postgres row-level security.
            </p>
            <p>
              Before Nile, I worked on API infra at{' '}
              <StyledLink
                href="https://www.confluent.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Confluent
              </StyledLink>{' '}
              and{' '}
              <StyledLink
                href="https://www.madhive.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madhive
              </StyledLink>
              .
            </p>
            <p>
              Outside of work, I'm a home-renowned chef 👨‍🍳 and salsa
              dancer 💃.
            </p>
          </div>

          <div className="mt-16 sm:mt-20">
            <Divider />
            <div className="mt-6 text-[0.72rem] uppercase tracking-[0.22em] opacity-55">
              Elsewhere
            </div>
            <p className="mt-5 text-base leading-[1.7] sm:text-[1.0625rem]">
              You can reach me at{' '}
              <StyledLink href="mailto:mpokryva@gmail.com">
                mpokryva@gmail.com
              </StyledLink>
              .
            </p>
            <div className="mt-6">
              <Social />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
