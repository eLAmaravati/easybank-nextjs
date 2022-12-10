import { Public_Sans } from '@next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script'

const pubclicSans = Public_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {

  return <>
    <style jsx global>{`
        html {
          font-family: ${pubclicSans.style.fontFamily};
        }
      `}</style>

    <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-9XYMH7M46P" />
    <Script id='google-analytics' strategy='afterInteractive'>
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-9XYMH7M46P');
      `}
    </Script>

    <Component {...pageProps} />
  </>
}
