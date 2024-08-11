import React from 'react';

const ProjectsSection = () => {
	const projects = [
		{
			title: 'Project One',
			description: 'Description of project one.',
			link: '#',
		},
		{
			title: 'Project Two',
			description: 'Description of project two.',
			link: '#',
		},
		// Add more projects as needed
	];

	return (
		<section id="projects" className="py-16 bg-white">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold mb-4">Projects</h2>
				<div className="flex flex-wrap justify-center">
					{projects.map((project, index) => (
						<div key={index} className="max-w-xs bg-gray-100 p-4 m-4 rounded-lg shadow-lg">
							<h3 className="text-2xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-700 mb-4">{project.description}</p>
							<a href={project.link} className="text-blue-500 hover:underline">
								Learn More
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
