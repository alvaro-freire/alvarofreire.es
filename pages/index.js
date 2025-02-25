import Link from "next/link";
import Seo from "../components/seo";
import SocialMedia from "../components/socialmedia";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Seo title="Álvaro Freire - Online CV" />

      {/* Barra de navegación */}
      <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-semibold">Álvaro Freire</h1>
        <div className="space-x-6">
          <Link href="/travel_map">
            <a className="text-gray-300 hover:text-white transition duration-200">Travel Map</a>
          </Link>
        </div>
      </nav>

      <div className="bg-gray-50 min-h-screen flex justify-center items-center p-8">

        <div className="bg-white shadow-xl rounded-xl max-w-4xl w-full p-12">

          {/* Header Section */}
          <div className="text-center">
            <Image 
              src="/alvaro.jpg" 
              alt="Álvaro Freire" 
              width={160} 
              height={160} 
              className="mx-auto rounded-full border-4 border-gray-300 shadow-sm mb-4"
            />
            <h1 className="text-4xl font-extrabold text-gray-900">Álvaro Freire</h1>
            <p className="text-lg text-gray-600">Software Engineer & Project Manager</p>
          </div>
          
          {/* About Me */}
          <section className="mt-10 border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              I am a Software Engineer with experience in software development and project management at
              <a href="https://innogando.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Innogando</a>. My mission is to identify inefficiencies and implement solutions that improve team productivity. 
              I am an active participant in hackathons and tech events, including <a href="https://fosdem.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FOSDEM</a> and <a href="https://hackupc.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HackUPC</a>, and I organize <a href="https://hackudc.gpul.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HackUDC</a>, one of Spain&apos;s largest student hackathons.
            </p>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Outside of my professional work, I have been deeply involved in Erasmus+ projects, where I had the opportunity to participate, organize, and facilitate exchanges that fostered cultural understanding and personal growth. These experiences have greatly enhanced my initiative, communication, and relationship management skills, all of which have played a crucial role in both my personal and professional development.
            </p>
            <p className="text-gray-600 mt-3 leading-relaxed">
              I am a very curious person, always eager to learn and explore new things. I also have a passion for sports, music, guitar, and exploring music mixing and production.
            </p>
          </section>

          
          {/* Experience */}
          <section className="mt-12 border-t pt-6">
            <h2 className="text-3xl font-semibold text-gray-800">Experience</h2>
            <ul className="mt-6 space-y-8">
              {[
                {
                  title: "Software Engineer & Project Manager",
                  company: "Innogando",
                  period: "Jul 2022 - Present",
                  description: (
                    <>
                      <p className="text-gray-600 text-base">
                        Leading software development projects with a focus on automation, IoT, and cloud architectures.
                      </p>
                      <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-600 text-sm">
                        <li>Contributed to the migration of the main database from InfluxDB to MongoDB, and later to PostgreSQL.</li>
                        <li>Developed frontend functionalities in Flutter and backend services in Python.</li>
                        <li>Automated sales processes by creating scripts and working with APIs such as TeleGram and Holded CR&.</li>
                        <li>Implemented CI/CD pipelines for all company projects, ensuring continuous integration and deployment.</li>
                        <li>Developed an inventory management app in Flutter, a Python API with Telegram integration, and a PostgreSQL database.</li>
                        <li>Supervised the use of GitFlow workflows and documentation across all development projects.</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "Hackathon Organizer",
                  company: "HackUDC, GPUL",
                  period: "Sept 2022 - Present",
                  description: "Organizing and facilitating this student hackathon for three years in a row, securing sponsorships, and promoting collaboration among developers.",
                },
                {
                  title: "Treasurer",
                  company: "GPUL",
                  period: "Apr 2023 - Present",
                  description: "Managing financial operations, ensuring transparency, and supporting open-source projects and workshops.",
                },
                {
                  title: "Mobility Coordinator",
                  company: "Xeración",
                  period: "Apr 2024 - Present",
                  description: "Coordinating Erasmus+ mobility programs, expanding international youth exchange initiatives.",
                },
                {
                  title: "Mentor",
                  company: "Xuventude Mentoring Galicia",
                  period: "Feb 2025 - Present",
                  description: "Guided a young professional in career development, technical skills enhancement, and job-seeking strategies. Provided insights into industry trends and helped them build a strong professional network.",
                },
                {
                  title: "Mentor",
                  company: "Xuventude Mentoring Galicia",
                  period: "May 2024 - Jun 2024",
                  description: "Guided a young professional in career development, technical skills enhancement, and job-seeking strategies. Provided insights into industry trends and helped them build a strong professional network.",
                },
                {
                  title: "Software Engineer Intern",
                  company: "Avansig",
                  period: "Sep 2023 - Dec 2023",
                  description: "Developed geospatial data processing solutions, optimized database queries, and enhanced GIS applications.",
                },
              ].map((job, index) => (
                <li key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:bg-gray-100 transition duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                      <span className="text-gray-500 text-sm">{job.company} | {job.period}</span>
                    </div>
                  </div>
                  <div className="mt-3">{job.description}</div>
                </li>
              ))}
            </ul>
          </section>

          
          {/* Education */}
          <section className="mt-10 border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center gap-2">
                🎓 Computer Engineering | Universidade da Coruña 🇪🇸 <span className="text-gray-500 text-sm">[2020 - 2024]</span>
              </li>
              <li className="flex items-center gap-2">
                🌍 Erasmus+ | Universitatea de Vest din Timișoara 🇷🇴 <span className="text-gray-500 text-sm">[2024]</span>
              </li>
            </ul>
          </section>
          
          {/* Skills */}
          <section className="mt-10 border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {["Python", "Flutter", "Next.js", "React", "PostgreSQL", "Firebase", "Docker", "Project Management", "CI/CD", "GitFlow", "Grafana", "Leadership", "Flask", "FastAPI", "pandas"].map(skill => (
                <span key={skill} className="bg-gray-200 px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </section>
          
          {/* Footer */}
          <footer className="mt-12 border-t pt-6 text-center">
            <SocialMedia />
            <p className="text-gray-600 text-sm mt-4">© {new Date().getFullYear()} Álvaro Freire. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}