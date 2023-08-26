import Head from 'next/head';
import AboutSection from './component/AboutSection';
import Clients from './component/Clients';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import Nav from './component/Nav';
import OurTeam from './component/OurTeam';
import Work from './component/Work';
import ProblemsSection from './component/ProblemsSection';
import ContactUs from './component/ContactUs';
import seoDetails from './Schema.json'
import Blogs from './component/Blog';
import OurRates from './component/OurRates';
import Specialization from './component/Specialization';
import Tech from './component/Services/tech';
export default function Home() {
	return (
		<>
			<Head>
				<title>Web & Mobile App Development | API Development | DevOps | Automation | Digital Marketing | UI/UX | IT Consultancy - Alvrio Labs</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@ alvriolabs" />
				<meta name="twitter:title" content="Alvrio Labs India | A global technology consultancy  | Alvrio labs" />
				<meta name="twitter:description" content="A global technology consultancy that integrates strategy, design and engineering to drive digital innovation" />
				<meta name="twitter:image" content="https://beta.alvrio.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falvrio-logo.86c87c70.jpeg&w=640&q=75" />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(seoDetails) }}
				/>
			</Head>
			<Nav />
			<div className="mx-auto px-4 container">
				<HeroSection />
				<AboutSection />
				<Work />
				<ProblemsSection />
				<Tech />
				<Specialization />
				<OurRates />
				<OurTeam />
				<Clients />
				<ContactUs />
				<Footer />
			</div>
		</>
	);
}