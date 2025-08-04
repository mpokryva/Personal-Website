import Image from 'next/image'
import Social from '@/components/Social'
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
            <div
              className="text-5xl sm:text-6xl pb-8 font-display font-extrabold leading-tight sm:leading-tight max-w-screen-l"
              // style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}
            >
              Hi, I'm Miki Pokryvailo
            </div>
            <div
              className="text-lg sm:text-xl sm:leading-loose max-w-screen-sm font-medium"
              // style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}
            >
              I'm a software engineer based in NYC, focused on backend and
              product. I love early stage startups and problems — I'm often the
              person unafraid to hack on and ship the weird idea that becomes a
              10x improvement. Most recently, I did this as the first hire at{' '}
              <a
                href="https://thenile.dev"
                target="_blank"
                className="font-medium underline decoration-yellow-200 decoration-2 hover:decoration-yellow-400"
                rel="noopener noreferrer"
              >
                Nile
              </a>
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
            <a
              href="https://news.ycombinator.com/item?id=32241820"
              target="_blank"
              className="font-medium underline decoration-yellow-200 decoration-2 hover:decoration-yellow-400"
              rel="noopener noreferrer"
            >
              HN-viral
            </a>{' '}
            <a
              href="https://www.thenile.dev/blog/app/blog/row-level-security"
              className="font-medium underline decoration-yellow-200 decoration-2 hover:decoration-yellow-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </a>{' '}
            about it. When we pivoted to a tenant-aware database, I built our
            SQL parsing framework, worked on the Rust database sync engine,
            helped define the SDK experience, made CI go fast, and more.
            <br />
            <br />
            Before Nile, I worked at{' '}
            <a
              href="https://confluent.io"
              target="_blank"
              className="font-medium underline decoration-yellow-200 decoration-2 hover:decoration-yellow-400"
              rel="noopener noreferrer"
            >
              Confluent
            </a>{' '}
            and{' '}
            <a
              href="https://madhive.com"
              target="_blank"
              className="font-medium underline decoration-yellow-200 decoration-2 hover:decoration-yellow-400"
              rel="noopener noreferrer"
            >
              MadHive
            </a>{' '}
            on API infra.
            <br />
            <br />
            Outside of work, I'm a home-renowned chef 👨‍🍳 and salsa dancer 💃.
            <br />
            <br />
            You can reach me at
            <a
              href="mailto:mpokryva@gmail.com"
              className="font-medium underline decoration-yellow-200 decoration-2 hover:decoration-yellow-400"
            >
              {' '}
              mpokryva@gmail.com
            </a>
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
