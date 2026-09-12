
import Image from "next/image";
const Projects = () => {
    const projects = [
        {
            id: 0,
            title: 'Mango Mart BD',
            category: 'Clients E-commerce/ Next Js',
            image: "/p0.png", // Replace with your actual screenshot
            liveLink: 'https://www.mangomartbd.shop/',
            repoLink: 'https://github.com/mohammad-tayeb/mango-mart.git'
        },
        {
            id: 1,
            title: 'ZAPSHIFT DELIVERY SERVICE',
            category: 'Web App/ React JS',
            image: "/p3.png", // Replace with your actual screenshot
            liveLink: '#',
            repoLink: '#'
        },
        {
            id: 2,
            title: 'CARX',
            category: 'Web App/ Next JS',
            image: "/p2.png", // Replace with your actual screenshot
            liveLink: 'https://carx-one.vercel.app/',
            repoLink: 'https://github.com/mohammad-tayeb/carx'
        },
        {
            id: 3,
            title: 'FNM  Automatives',
            category: 'Ecommerce',
            image: "/p1.png", // Replace with your actual screenshot
            liveLink: 'https://fnm-automative.vercel.app/',
            repoLink: 'https://github.com/mohammad-tayeb/fnm-automative'
        },
        {
            id: 3,
            title: 'Shopno',
            category: 'Financial Organisation',
            image: "/shopno.png", // Replace with your actual screenshot
            liveLink: 'https://shopno-six.vercel.app/',
            repoLink: 'https://github.com/mohammad-tayeb/shopno'
        },
    ];

    return (
        <section id='projects' className="bg-white text-slate-900 py-20 px-6 md:px-12 lg:px-24 border-t border-slate-100">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-slate-900 mb-3 uppercase">
                        Featured Projects
                    </h2>
                    <p className="text-slate-500 max-w-md">
                        A curated selection of my recent design and development work.
                    </p>
                </div>

                {/* Projects Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl shadow-lg"
                        >
                            {/* Image */}
                            <div className="relative h-[400px] overflow-hidden rounded-2xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
                                    className="object-cover object-top scale-105 transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 opacity-100 transition-all duration-500 md:opacity-0 md:group-hover:opacity-100" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
                                <div className="opacity-100 translate-x-0 transition-all duration-500 md:translate-x-[-40px] md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100">
                                    <span className="mb-3 inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                                        {project.category}
                                    </span>

                                    <h3 className="mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-col gap-3">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-full max-w-52 rounded-md bg-orange-500 py-3 text-center font-bold uppercase tracking-wider text-white transition hover:bg-orange-600"
                                        >
                                            Live Preview
                                        </a>

                                        <a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-full max-w-52 rounded-md bg-white py-3 text-center font-bold uppercase tracking-wider text-slate-900 transition hover:bg-slate-100"
                                        >
                                            Repository
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;