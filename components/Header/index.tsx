import Image from "next/image"

export default function Header() {
	return <header className="header">
		<div className="container">
			<div className="row">
				<div className="header__wrapper col-md-5">
					<h1 className="header__title">Next Generation Digital Banking</h1>
					<p>
						Take your financial life online. Your Easybank account will be a one-stop-shop
						for spending, saving, budgeting, investing, and much more.
					</p>
					<button className="button button__cta rounded-pill">Request Invite</button>
				</div>
				<div className="col-md-6 offset-2 header__image-container">
					<Image src="/image-mockups.png" alt="" className='img-fluid' width={581} height={712}/>
				</div>
			</div>
		</div>
	</header>
}