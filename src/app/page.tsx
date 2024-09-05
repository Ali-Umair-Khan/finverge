import Image from 'next/image';
import Hero from '@/components/H/h';
import Featured from '@/components/Featured';
import Companies from '@/components/Companies/companies';
import Video from '@/components/video/video';
import Pricing from '@/components/pricing/pricing'
import Faq from '@/components/faq/faq';
import './globals.css';
export default function Home() {
  return (
    <main>
      <Hero/>
      <Featured/>
      <Companies/>
      <Video/>
      <Pricing/>
      <Faq/>
    </main>
  )
}