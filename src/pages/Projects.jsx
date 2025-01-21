const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A modern e-commerce platform with a sleek design and robust features.",
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal website to showcase my skills and projects.",
      link: "#",
    },
    {
      id: 3,
      title: "Task Manager App",
      description: "A web app to manage tasks and boost productivity.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 text-gray-800" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center">My Projects</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="mt-4 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="mt-6 inline-block text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
