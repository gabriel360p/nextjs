  
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import TagHead  from '@/components/Head'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <TagHead  title="Index"/>
    </>
  )
}
