import About from '../components/Home/About';
import Work from '../components/Home/Work';
import Hero from '../components/Home/Hero';
import Footer from '../components/Layout/Footer';
import Contact from '../components/Home/Contact';

export default function Home({}) {
	return (
		<div className="relative flex w-screen flex-col">
			<Hero />
			<About />
			<Work />
			<Contact />
			<Footer />
		</div>
	);
}
