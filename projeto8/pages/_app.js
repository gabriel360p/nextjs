import '@/styles/globals.css'
import Master from '@/components/Master'

export default function App({ Component, pageProps }) {
  return <Master> <Component {...pageProps} /> </Master>
}
