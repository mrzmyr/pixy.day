import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Review } from '../components/review'
import { openGraph } from "../config/seo"

const Tagline = () => {
  return (
      <div className='flex'>
        <div className="bg-green-100 dark:bg-green-900 px-2 rounded-full py-1 pr-4 flex flex-row items-center">
          <div className="bg-white dark:bg-white/10 rounded-full py-1 px-3 text-sm dark:text-green-200">New</div>
          <p className="text-sm ml-1 font-medium text-green-700 dark:text-green-200">Cateogrize your entries with tags</p>
        </div>
      </div>
  )
}

export default function Home() {
  const [phoneType, setPhoneType] = useState('android')
  
  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   setPhoneType(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? 'ios' : 'android')
    // }
  }, [])

  return (
    <div className="">
      <NextSeo
        title={openGraph.title}
        description={openGraph.description}
        openGraph={{
          ...openGraph,
        }}
      />

      <div className="max-w-7xl mt-8 px-4 mx-auto">
        <Header />
      </div>

      <main className="">
        <div className="max-w-7xl mb-8 px-4 mx-auto">
          <div className='flex flex-col lg:flex-row'>
            <div className='flex flex-col basis-1/2 justify-center'>
              <div className='flex flex-col lg:items-start items-center'>
                <Tagline />
                <h1 className='mt-4 text-4xl lg:text-5xl font-bold font-manrope leading-tight lg:leading-snug tracking-tight text-center lg:text-left'>Track your Mood<br />with One Pixel a Day</h1>
                <h2 className='text-lg lg:text-xl font-medium text-black dark:text-white opacity-60 leading-relaxed mt-4 max-w-lg text-center lg:text-left'>The best app for identifying mood patterns for people facing mental health issues.</h2>
              </div>
              <div className='mt-12'>
                <div className='flex flex-row lg:justify-start justify-center'>
                  <div className='mr-4'>
                    <a href="https://play.google.com/store/apps/details?id=com.devmood.pixymoodtracker" target={'_blank'} rel="noreferrer">
                      <Image
                        alt="Download on Google Play"
                        width={168}
                        height={50}
                        src="/images/android-download.svg"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="https://apps.apple.com/de/app/pixy-mood-tracker/id1605327124" target={'_blank'} rel="noreferrer">
                      <Image
                        alt="Download on App Store"
                        width={168}
                        height={50}
                        src="/images/apple-download.svg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:my-0 flex relative basis-1/2 justify-center items-center'>
              {phoneType == 'android' && (
                <div className='h-[700px] flex relative lg:basis-1/2 justify-center items-center'>
                  <picture className='absolute z-30'>
                    <img
                      src={'/images/google-pixel.svg'}
                      alt={'iPhone'}
                    />
                  </picture>
                  <div className='relative z-20 w-full flex flex-row justify-center max-w-[309px] rounded-[20px] lg:rounded-[40px] overflow-hidden'>
                    <video className='hidden dark:block' width={'91%'} autoPlay muted loop playsInline>
                      <source src="/videos/android-demo-dark.mp4" type="video/mp4" />
                    </video>
                    <video className='block dark:hidden' width={'91%'} autoPlay muted loop playsInline>
                      <source src="/videos/android-demo-light.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <picture className='absolute top-1/2 -translate-y-1/2'>
                    <svg width="405" height="474" viewBox="0 0 405 474" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className='fill-[#F4F4F4] dark:fill-neutral-900' d="M344.927 229.5C446.631 306 412.737 474 291.821 474C170.905 474 0.238037 359.995 0.238037 246.5C0.238037 133.005 25.6146 0 146.531 0C267.446 0 243.224 153 344.927 229.5Z" />
                    </svg>
                  </picture>
                </div>
              )}
              {phoneType == 'ios' && (
                  <div className='h-[700px] flex relative lg:basis-1/2 justify-center items-center'>
                  <picture className='absolute z-30'>
                    <img
                      src={'/images/iphone.png'}
                      alt={'iPhone'}
                    />
                  </picture>
                  <div className='relative z-20 w-full flex flex-row justify-center -mt-[2px] max-w-[309px] rounded-[20px] lg:rounded-[40px] overflow-hidden'>
                    <video className='hidden dark:block' width={'89%'} autoPlay muted loop playsInline>
                      <source src="/videos/ios-demo-dark.mp4" type="video/mp4" />
                    </video>
                    <video className='block dark:hidden' width={'89%'} autoPlay muted loop playsInline>
                      <source src="/videos/ios-demo-light.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <picture className='absolute top-1/2 -translate-y-1/2'>
                    <svg width="405" height="474" viewBox="0 0 405 474" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className='fill-[#F4F4F4] dark:fill-neutral-900' d="M344.927 229.5C446.631 306 412.737 474 291.821 474C170.905 474 0.238037 359.995 0.238037 246.5C0.238037 133.005 25.6146 0 146.531 0C267.446 0 243.224 153 344.927 229.5Z" />
                    </svg>
                  </picture>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='bg-[#F9F9FB] dark:bg-black p-4 lg:p-12'>
          <div className="max-w-7xl px-4 mx-auto">
            <h3 className='text-2xl mb-8 font-bold font-manrope'>What others say…</h3>
            <div className='grid lg:grid-cols-3 lg:grid-rows-none grid-rows-3 gap-6'>
              <div className=''>
                <Review 
                  comment={'“Nice app. I use it daily now. Tracking my mood helps me reflect on my days and weeks. It wouldn\'t be so easy for me without this app.”'} 
                  author={'🇩🇪 Mathias B.'} 
                />
              </div>
              <div className=''>
                <Review 
                  comment={'“I use this app daily. It really helps me to zoom out and keep regular checks on my change in mood over longer periods. Super helpful.”'} 
                  author={'🇬🇧 Thomas M.'} 
                />
              </div>
              <div className=''>
                <Review 
                  comment={'"Tracking my mood is so easy with this app. I liked that it is so minimalistic. Would recommend to my friends.”'} 
                  author={'🇺🇸 Jessie B.'} 
                />
              </div>
            </div>
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  )
}
