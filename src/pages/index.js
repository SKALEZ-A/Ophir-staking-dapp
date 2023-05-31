import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/footer";

export default function Home() {
	return (
		<div className="gradient-bg-welcome">
			<Navbar />
			<Hero />
			<Footer />
		</div>
	);
}
