import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Header from "../components/Header";
import Layout from '../components/Layout';

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<Layout pageTitle='Frontend Mentor'>
				{/* Feature Section */}
				<section className="section section__feature">
					<div className="container">
						<div className="row">
							<div className="col">
								<h2 className="section__title">Why choose Easybank?</h2>
								<p className="section__description"> We leverage Open Banking to turn your bank account into your financial hub. <br />
									Control your finances like never before.</p>
							</div>
						</div>

						<div className="row">
							<div className="card__feature col-md-3 card">
								<Image src="/icon-online.svg" className="card__feature--image" height={60} width={60} alt="Online Icon" />
								<div className="card__feature--content">
									<h3>Online Banking</h3>
									<p>
										Our modern web and mobile applications allow you to keep track of your finances
										wherever you are in the world.
									</p>
								</div>
							</div>
							<div className="card__feature col-md-3 card">
								<Image src="/icon-budgeting.svg" alt="Budgeting icon" className="card__feature--image" height={60} width={60} />
								<div className="card__feature--content">
									<h3>Simple Budgeting</h3>
									<p>
										See exactly where your money goes each month. Receive notifications when you are
										close to hitting your limits.
									</p>
								</div>
							</div>
							<div className="card__feature col-md-3 card">
								<Image src="/icon-onboarding.svg" alt="Onboarding icon" className="card__feature--image" height={60} width={60} />
								<div className="card__feature--content">
									<h3>Fast Onboarding</h3>
									<p>
										We don&apos;t do branches. Open your account in minutes online and start taking control
										of your finances right away.
									</p>
								</div>
							</div>
							<div className="card__feature col-md-3 card">
								<Image src="/icon-api.svg" alt="API icon" className="card__feature--image" height={60} width={60} />
								<div className="card__feature--content">
									<h3>Open API</h3>
									<p>
										Manage your savings, investments, pension, and much more from one account. Tracking
										your money has never been easier.
									</p>
								</div>
							</div>

						</div>
					</div>
				</section>

				{/* Blog Section */}
				<section className="section__blog" id='blog'>
					<div className="container">
						<div className="row">
							<div className="col">
								<h2 className="section__title">Latest Article</h2>
							</div>
						</div>

						<div className="row">
							<article className="card__blog col-md-3">
								<div className="card border-0">
									<Image src="/image-currency.webp" className="card-img-top"
										alt="Receive money in any currency with no fees" width={258} height={215}/>
									<div className="card__blog--content card-body">
										<span className="card__blog--meta">By Claire Robinson</span>
										<h3 className="card__blog--title">
											<Link href='/blog' className='stretched-link'>Receive money in any currency with no fees</Link>
										</h3>
										<p>The world is getting smaller and we&apos;re becoming more mobile. So why should you be
											forced to only receive money …</p>
									</div>
								</div>
							</article>

							<article className="card__blog col-md-3">
								<div className="card border-0">
									<Image src="/image-restaurant.webp" className="card-img-top"
										alt="Receive money in any currency with no fees" width={258} height={215} />
									<div className="card__blog--content card-body">
										<span className="card__blog--meta">By Wilson Hutton</span>
										<h3 className="card__blog--title">
											<Link href="/blog" className='stretched-link'>Treat Yourself Without Worrying About Money</Link>
										</h3>
										<p>Our simple budgeting feature allows you to separate out your spending and set
											realistic limits each month …</p>
									</div>
								</div>
							</article>

							<article className="card__blog col-md-3">
								<div className="card border-0">
									<Image src="/image-plane.webp" className="card-img-top"
										alt="Take your Easybak Whereever You Go" width={258} height={215} />
									<div className="card__blog--content card-body">
										<span className="card__blog--meta">By Wilson Hutton</span>
										<h3 className="card__blog--title">
											<Link href="/blog" className='stretched-link'>Take your Easybak Whereever You Go</Link>
										</h3>
										<p>Our simple budgeting feature allows you to separate out your spending and set
											realistic limits each month ...</p>
									</div>
								</div>
							</article>

							<article className="card__blog col-md-3">
								<div className="card border-0">
									<Image src="/image-confetti.webp" className="card-img-top"
										alt="Our invite-only Beta accounts are now live!" width={258} height={215} />
									<div className="card__blog--content card-body">
										<span className="card__blog--meta">By Claire Robinson</span>
										<h3 className="card__blog--title">
											<Link href="/blog" className='stretched-link'>Our invite-only Beta accounts are now live!</Link>
										</h3>
										<p>Our invite-only Beta accounts are now live!
											After a lot of hard work by the whole team, we&apos;re excited to launch our closed beta
											...</p>
									</div>
								</div>
							</article>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
