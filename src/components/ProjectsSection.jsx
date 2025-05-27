import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Movie Night Page",
        description: "A responsive movie streamming web page using HTML, CSS and JavaScript.",
        image: "/projects/MovieNight.png",
        tags: ["HTML/CSS", "JavaScript"],
        demoUrl: "https://happy-espresso-bear-792.vscodeedu.app",
        githuburl: "#",
    },

    {
        id: 2,
        title: "Daily Planner App",
        description: "A daily planner app with basic features using JavaFX.",
        image: "/projects/DailyPlannerApp.png",
        tags: ["JavaFX"],
        // demoUrl: "https://happy-espresso-bear-792.vscodeedu.app",
        githuburl: "#",
    },

    {
        id: 3,
        title: "Airport App",
        description: "An airport app to calculate the shortest distance between the airports using Java",
        //image: "/projects/MovieNight.png",
        tags: ["Java"],
        //demoUrl: "https://happy-espresso-bear-792.vscodeedu.app",
        githuburl: "#",
    },

    {
        id: 4,
        title: "Chat Server and Client Application",
        description: "A designed server and multi-client chat application using sockets and multithreading in C",
        //image: "/projects/MovieNight.png",
        tags: ["C"],
        //demoUrl: "https://happy-espresso-bear-792.vscodeedu.app",
        githuburl: "#",
    },

];

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md-text-4xl font-bold mb-4 text-center">
                {" "}
                Featured<span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully crafted
                with attention to detail, performance, and user experience. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden"> 
                                <img src={project.image} alt={project.tilte} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/> 
                            </div>

                            <div className="p-6"> 
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {
                                        project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))
                                    }
                                </div>

                                <h3 className="text-xl font-semibold mb-1" >{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                            <a href ={project.demoUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <ExternalLink size={20}/>
                                            </a>

                                            <a href ={project.githuburl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <Github size={20} />
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                target="_blank"
                href="https://github.com/thflinh">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>;
};