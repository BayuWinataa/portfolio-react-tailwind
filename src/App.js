import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
	return (
		<div>
			<Header />
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
			<Footer />
		</div>
	);
};

export default App;
