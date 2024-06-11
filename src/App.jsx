import "./styles/reset.css";
import "./styles/global.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<body>
			<Header />
			<Hero />
			<Features />
			<Articles />
			<Footer />
		</body>
	);
}

export default App;
