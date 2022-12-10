import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return < footer className = 'footer' >
      <div className="container">
        <div className="row justify-content-center footer__widget">
          <div className="col-md-2">
            <Image src="/logo-white.svg" alt="Easybank logo" height={20} width={139}/>

            <ul className="list-inline footer__social mt-4">
              <li className="list-inline-item">
                <Link href="https://github.com/elamaravati" target={'_blank noopener noreferrer'} aria-label={'Github'}><i className="bi bi-github"></i></Link>
              </li>
              <li className="list-inline-item">
                <Link href="https://www.behance.net/langitamaravati" target={'_blank noopener noreferrer'} aria-label={'Behance'}><i className="bi bi-behance"></i></Link>
              </li>
              <li className="list-inline-item">
                <Link href="https://id.linkedin.com/in/langitamaravati" target={'_blank noopener noreferrer'} aria-label={'Linkedin'}><i className="bi bi-linkedin"></i></Link>
              </li>
              <li className="list-inline-item">
                <Link href="https://www.twitter.com/elamaravati" target={'_blank noopener noreferrer'} aria-label={'Twitter'}><i className="bi bi-twitter"></i></Link>
              </li>
            </ul>
          </div>

          <div className="col-md-2 ps-md-5">
            <ul className="list-unstyled">
              <li className='mb-2'>
                <Link href={'#'}>About Us</Link>
              </li>
              <li className='mb-2'>
                <Link href={'#'}>Contact</Link>
              </li>
              <li className='mb-2'>
                <Link href={'#'}>Blog</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 ps-md-5">
            <ul className="list-unstyled">
              <li className='mb-2'>
                <Link href={'#'}>Careers</Link>
              </li>
              <li className='mb-2'>
                <Link href={'#'}>Support</Link>
              </li>
              <li className='mb-2'>
                <Link href={'#'}>Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 offset-1 text-center">
            <button className="button button__cta rounded-pill">Request Invite</button>
            <p className='mt-4'>© Easybank. All Rights Reserved</p>
          </div>
        </div>

        {/* Attribution */}
        <div className="attribution row pt-4">
          <div className="col-12">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
            Coded by <a href="https://www.langitamaravati.com">Langit Amaravati</a>.
          </div>
        </div>
      </div>
			</footer >
}