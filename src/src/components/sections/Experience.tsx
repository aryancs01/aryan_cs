interface Job {
  role: string;
  company: string;
  period: string;
  details: string[];
}

const jobs: Job[] = [
  {
    role: "Backend Intern",
    company: "Fonix Technologies",
    period: "[SEPT2025-PRSNT]",
    details: ["> Exploring Node.js and Express.js ecosystem, understanding backend architecture and server-side logic."]
  },
  {
    role: "Software Developer Intern",
    company: "Compitcom Digital Solutions Pvt. Ltd.",
    period: "[JUNE2025-JULY2025]",
    details: ["> Built a complete slot booking system with real-time updates, Razorpay integration, and email notifications using Next.js and Firebase.", "> Created dynamic, responsive websites with a focus on clean UI, SEO, and performance using Next.js, Tailwind CSS, and HTML.", "> Worked with Shopify app development using Remix and integrated monitoring tools like Prometheus, Grafana, and Loki for better system reliability."]
  }
];

const Experience = () => {
  return (
    <div className="bg-brutal-bg p-4 sm:p-6 md:p-8 col-span-12">
      <h2 className="text-xl sm:text-2xl font-bold uppercase mb-4 sm:mb-6 md:mb-8"> Experience_Log</h2>
      <div className="space-y-4 sm:space-y-6">
        {jobs.map((job, index) => (
          <div key={index} className="border-b-2 border-dashed border-brutal-text pb-4 sm:pb-6 last:border-0">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
              <h3 className="font-bold uppercase text-sm sm:text-base">{job.role}</h3>
              <span className="text-xs sm:text-sm font-bold whitespace-nowrap">{job.period}</span>
            </div>
            <p className="mb-2 text-sm sm:text-base">{job.company}</p>
            <div className="text-xs sm:text-sm text-gray-600">
              {job.details.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;