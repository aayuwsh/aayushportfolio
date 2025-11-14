const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">Let's work together on your next project</p>
        </div>

        <div className="bg-card rounded-xl p-8 md:p-12 border border-border glow-effect">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                <a href="mailto:aayushkumarsinghhh@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  aayushkumarsinghhh@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Location</h3>
                <p className="text-muted-foreground">Delhi, India</p>
              </div>
            </div>

            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea 
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
              <button className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover-glow">
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-muted-foreground">
          <p>© 2025 Aayush Kumar Singh. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
