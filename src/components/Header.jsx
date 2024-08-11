import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="bg-gray-800 p-4 text-white shadow-md fixed top-0 w-full z-50">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo */}
				<h1 className="text-2xl font-bold">
					<Link to="/" className="hover:text-yellow-400">
						MyPortfolio
					</Link>
				</h1>

				{/* Hamburger Menu for Mobile */}
				<button className="block md:hidden text-3xl focus:outline-none z-50" onClick={toggleMenu}>
					{isOpen ? '✖️' : '☰'}
				</button>

				{/* Navigation Menu */}
				<nav
					className={`fixed top-0 right-0 w-full h-full bg-gray-800 md:static md:w-auto md:h-auto md:flex md:items-center md:space-x-6 md:bg-transparent transition-transform transform ${
						isOpen ? 'translate-x-0' : 'translate-x-full'
					} md:translate-x-0 z-40`}
				>
					<ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 px-4 py-6 md:px-0 md:py-0">
						<li>
							<Link to="/" className="text-lg hover:text-yellow-400 transition-colors">
								Home
							</Link>
						</li>
						<li>
							<a href="#about" className="text-lg hover:text-yellow-400 transition-colors">
								About
							</a>
						</li>
						<li>
							<a href="#projects" className="text-lg hover:text-yellow-400 transition-colors">
								Projects
							</a>
						</li>
						<li>
							<a href="#contact" className="text-lg hover:text-yellow-400 transition-colors">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
