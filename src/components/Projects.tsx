const Projects = () => {
  const projects = [
    {
      title: "Amazon Clone",
      description: "A fully functional e-commerce website clone inspired by Amazon, featuring product listings and shopping cart functionality.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#"
    },
    {
      title: "Spotify Clone",
      description: "Music streaming platform clone with playlist management and audio player interface, mimicking Spotify's design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#"
    },
    {
      title: "Restaurant Website",
      description: "Modern restaurant website with menu showcase, reservation system, and responsive design for seamless user experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">Things I've built</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a 
              key={idx}
              href={project.link}
              className="group bg-card rounded-xl p-6 border border-border hover-glow block"
            >
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIdx) => (
                  <span 
                    key={techIdx}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
