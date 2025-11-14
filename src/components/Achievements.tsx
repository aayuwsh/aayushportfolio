const Achievements = () => {
  const achievements = [
    {
      year: "2024",
      title: "Senior Developer Promotion",
      description: "Promoted to Senior Full Stack Developer role, leading a team of 5 developers on enterprise projects."
    },
    {
      year: "2023",
      title: "Best Innovation Award",
      description: "Received company-wide innovation award for developing an AI-powered solution that increased efficiency by 40%."
    },
    {
      year: "2022",
      title: "Open Source Contribution",
      description: "Became a core contributor to popular React UI library with over 10K+ stars on GitHub."
    },
    {
      year: "2021",
      title: "Certification Achievement",
      description: "Completed AWS Solutions Architect and Google Cloud Professional certifications."
    }
  ];

  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground">Milestones in my career journey</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border"></div>

          <div className="space-y-12">
            {achievements.map((achievement, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Year badge */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center glow-effect z-10">
                  <span className="text-sm font-bold text-primary-foreground">{achievement.year}</span>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ml-24 md:ml-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="bg-card rounded-xl p-6 border border-border hover-glow">
                    <h3 className="text-2xl font-bold text-primary mb-3">{achievement.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
