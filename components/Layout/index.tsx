import Head from "next/head";
import Navbar from "../Navbar";
import { ReactNode } from "react"
import Footer from "../Footer"
import Script from "next/script";

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>{pageTitle} | Easybank landing page</title>
                <meta name="description" content="A solution to the Easybank landing page challenge on Frontend Mentor" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />

                {/* Google Tag */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-9XYMH7M46P" />
            </Head>
            <Navbar />
            <main className="main">{children}</main>
            <Footer /></>
    )
}