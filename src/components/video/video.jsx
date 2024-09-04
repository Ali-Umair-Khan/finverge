/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './video.scss';
import RevealCover from '@/UI/RevealCover';
import MaskText from '@/UI/MaskText';
import AnimatedLink from '@/UI/AnimatedLink';
const Video = () => {
  const works = 'See how it works and get started in less than 2 minutes';
  return (
    <div><div className='hero__video'>
        <div className='maskH1'>
            <MaskText phrases={works} tag='h1'/>
        </div>
        <div className='imageCover'>
            <RevealCover/>
            <div className='hero__video-img'>
                <img src='/video__th-01.webp' alt="" className='hero__video-img'/>
            </div>
        </div>
        <button className='hero__video-btn'><AnimatedLink title='Get Started' /></button>
    </div>
    </div>
  )
}

export default Video