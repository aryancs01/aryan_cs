import Button from '../ui/Button';
import Tag from '../ui/Tag';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  img: string;
}

const projects: Project[] = [
  {
    title: "Coming Soon",
    desc: "Coming Soon.",
    tags: ["Nodejs", "Python", "Nextjs"],
    img: "https://placehold.co/600x400/000000/FFF?text=PROJECT+01"
  },
];

const Projects = () => {
  return (
    <>
      <div className="col-span-12 bg-brutal-text text-brutal-bg p-4 sm:p-6 md:p-8 border-b-2 border-brutal-line">
        <h2 className="text-xl sm:text-2xl font-bold uppercase">// Projects_Directory</h2>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="bg-brutal-bg p-4 sm:p-6 md:p-8 col-span-12 md:col-span-6 flex flex-col justify-between">
          <div>
            <div className="border-2 border-brutal-text mb-3 sm:mb-4 overflow-hidden aspect-video bg-black">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale contrast-125 image-pixelated hover:grayscale-0 transition-all duration-300" 
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold uppercase mb-2">{project.title}</h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-gray-700">{project.desc}</p>
            <div className="mb-4 sm:mb-6">
              {project.tags.map(tag => <Tag key={tag} label={tag} />)}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button href="#">GitHub</Button>
            <Button href="#">Live_Demo</Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;