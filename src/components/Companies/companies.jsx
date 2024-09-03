

import React from 'react'
import './companies.scss';
import MaskText from '@/UI/MaskText';
const Companies = () => {
  const trust = "trusted by over 900+ professional";
  const product = "Our products are tailored to act as your perfect online manager, helping you in all organizational tasks.";
  const need = "Start with cold email and more whenever you need.";
  return (
        <div className='hero__companies-detail'>
                    <div className='hero-comp'>
                        <MaskText phrases={trust} tag='h1'/>
                    </div>
                    <div className='hero-comp-product'>
                         <p>{product}</p>
                    </div>
                    <MaskText phrases={need} tag='p'/>
        </div>
  )
}

export default Companies