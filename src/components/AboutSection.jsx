import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-24 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="font-bold text-2xl text-center">Passionate Full-stack Developer</h3>
                    <p className="text-muted-foreground">
                        I'm a Computer Science student at Cal Poly Pomona 
                        with a passion for software development, clean code, 
                        and solving real-world problems through technology.
                    </p>
                    <p className="text-muted-foreground">
                        I enjoy working on full-stack web development, 
                        exploring data structures & algorithms, 
                        and continuously learning new technologies. 
                        I'm actively seeking opportunities to grow as a developer 
                        and contribute to meaningful projects.
                    </p>

                    <div className= "flex flec-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        <a href="/Linh%20Pham_Resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            download 
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            {" "}
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                {" "}
                                <p className="text-muted-foreground">Creating responsive websites and 
                                    web applications with modern framework.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                {" "}
                                <p className="text-muted-foreground">Designing intuitive user interfaces 
                                    and seamless user experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                {" "}
                                <p className="text-muted-foreground">Leading projects from conception to 
                                    completion with agile methodologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};