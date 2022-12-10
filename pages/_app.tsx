import { Public_Sans } from '@next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

const pubclicSans = Public_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  
  return <>
    <style jsx global>{`
        html {
          font-family: ${pubclicSans.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </>
}
