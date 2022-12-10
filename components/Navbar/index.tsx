import Link from "next/link"
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Navbar() {
	const router = useRouter();
	return <nav className="navbar py-2 navbar-expand-lg bg-white">
		<div className="container">
			<Link href="/" className="navbar-brand"><Image src="/logo.svg" alt="Easybank Logo" height={20} width={139} /></Link>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav mx-auto">
					<li className="nav-item">
						<Link href="/" className={`nav-link ${router.pathname == "/" ? "active" : ""}`}>Home</Link>
					</li>
					<li className="nav-item">
						<Link href="/#about" className={`nav-link ${router.pathname == "/#about" ? "active" : ""}`}>About</Link>
					</li>
					<li className="nav-item">
						<Link href="/#contact" className={`nav-link ${router.pathname == "/#contact" ? "active" : ""}`}>Contact</Link>
					</li>
					<li className="nav-item">
						<Link href="/blog" className={`nav-link ${router.pathname == "/blog" ? "active" : ""}`}>Blog</Link>
					</li>
					<li className="nav-item">
						<Link href="/#career" className={`nav-link ${router.pathname == "/#career" ? "active" : ""}`}>Careers</Link>
					</li>
				</ul>

				<button className="button button__cta rounded-pill" type="button">Request Invite</button>
			</div>
		</div>
	</nav>
}