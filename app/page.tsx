import Image from 'next/image'
import Social from '@/components/Social'
import StyledLink from '@/components/StyledLink'
import backgroundImage from '@/public/bg-new.png'
import backgroundImageMobile from '@/public/bg-new-mobile.png'
import backgroundImageTablet from '@/public/bg-new-tablet.png'

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
        <div
          className="absolute top-0 left-0
          w-full
          px-2 pt-16
          min-h-[110vh] flex flex-col
          sm:h-auto sm:min-h-0 sm:justify-start
          tracking-wide contain-content sm:pl-[5vw] sm:pt-[16vh] text-black"
        >
          <div className="backdrop-blur-[3px] p-8 max-w-2xl">
            <div className="text-5xl sm:text-6xl pb-8 font-display font-extrabold leading-tight sm:leading-tight max-w-screen-l">
              Hi, I'm Miki Pokryvailo
            </div>
            <div className="text-lg sm:text-xl sm:leading-loose max-w-screen-sm font-medium">
              I'm a software engineer based in SF, focused on backend and
              product at{' '}
              <StyledLink
                href="https://yutori.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yutori
              </StyledLink>
              . I'm often the person unafraid to hack on and ship the weird idea
              that becomes a 10x improvement. Most recently, I did this as the
              first hire at{' '}
              <StyledLink
                href="https://thenile.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nile
              </StyledLink>
              .
            </div>
          </div>
        </div>
      </div>
      <div className="about-me-body flex flex-col items-start bg-white text-black py-6 sm:pb-6 pb-10">
        <div className="py-10 px-6 sm:px-32 about-me-main-content">
          <div className="text-3xl sm:text-4xl font-display font-bold">
            More about me
          </div>
          <div className="my-8 text-base sm:text-lg about-me-body leading-loose sm:leading-loose max-w-screen-sm">
            At Nile, I built a lot of our initial product, introduced row-level
            security and wrote an{' '}
            <StyledLink
              href="https://news.ycombinator.com/item?id=32241820"
              target="_blank"
              rel="noopener noreferrer"
            >
              HN-viral
            </StyledLink>{' '}
            <StyledLink
              href="https://www.thenile.dev/blog/app/blog/row-level-security"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </StyledLink>{' '}
            about it. When we pivoted to a tenant-aware database, I built our
            SQL parsing framework, worked on the Rust database sync engine,
            helped define the SDK experience, made CI go fast, and more.
            <br />
            <br />
            Before Nile, I worked at{' '}
            <StyledLink
              href="https://confluent.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Confluent
            </StyledLink>{' '}
            and{' '}
            <StyledLink
              href="https://madhive.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              MadHive
            </StyledLink>{' '}
            on API infra.
            <br />
            <br />
            Outside of work, I'm a home-renowned chef 👨‍🍳 and salsa dancer 💃.
            <br />
            <br />
            You can reach me at
            <StyledLink href="mailto:mpokryva@gmail.com">
              {' '}
              mpokryva@gmail.com
            </StyledLink>
            .
          </div>
        </div>
      </div>
      <div className="bg-white social-logos flex justify-center pb-8">
        <Social />
      </div>
    </>
  )
}
