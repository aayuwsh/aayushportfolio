const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and analytics.",
      technologies: ["Next.js", "MongoDB", "WebSocket", "Tailwind"],
      link: "#"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool leveraging machine learning for blog posts and social media.",
      technologies: ["Python", "OpenAI", "React", "FastAPI"],
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with interactive charts, data visualization, and reporting.",
      technologies: ["TypeScript", "D3.js", "Express", "Redis"],
      link: "#"
    },
    {
      title: "Social Media App",
      description: "Modern social networking platform with posts, stories, messaging, and user profiles.",
      technologies: ["React Native", "GraphQL", "AWS", "DynamoDB"],
      link: "#"
    },
    {
      title: "Portfolio CMS",
      description: "Headless CMS for managing portfolio content with drag-and-drop editor and API access.",
      technologies: ["Vue.js", "Strapi", "MySQL", "Docker"],
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
