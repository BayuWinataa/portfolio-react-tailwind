import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div name="about" id="about" className="w-full h-screen bg-[#0a192f] text-gray-300 font-sans">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8">
						<p className="text-4xl font-bold inline border-b-8 border-[#C23B22]">About</p>
					</div>

					<div></div>
				</div>

				<div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
					<div className="sm:text-right text-4xl font-bold" data-aos="fade-right" data-aos-duration="1000">
						<p>
							Hi, I am <span className="text-[#C23B22]">Rameez</span>, Nice to meet you, Please take a look of my Projects, <span className="text-[#C23B22]">Thank You</span>.
						</p>
					</div>
					<div data-aos="fade-up" data-aos-duration="1000">
						<p>
							Unlock the full potential of your web presence with a seasoned Frontend Developer deeply passionate about crafting captivating digital experiences. With expertise in HTML, CSS, JavaScript, and TypeScript, coupled with a flair
							for creating visually stunning interfaces, I am committed to delivering cutting-edge websites that leave a lasting impact. Together, let's transform your visions into reality and elevate your online journey to new heights of
							success.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
