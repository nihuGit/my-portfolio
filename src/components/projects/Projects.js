import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-commerce website"
          des=" Full-stack e-commerce site with seller dashboard. Features secure checkout, product filtering, and admin-driven order tracking using Next.js + Node.js."
          src={projectOne}
          gitLink={"https://github.com/nihuGit/buzzer-app"}
          webLink={"https://buzzer-app-seven.vercel.app"}
        />
        <ProjectsCard
          title="Portfolio Website"
          des="Dynamic portfolio built with Next.js, Firebase, and Node.js. Responsive design, secure contact system, and real-time content control."
          src={projectTwo}
          gitLink={"https://github.com/nihuGit/my-portfolio"}
          webLink={"https://buzzer-app-seven.vercel.app"}
        />
        <ProjectsCard
          title="NEWS Blog Site"
          des="Responsive news blog with HTML/CSS/JS. Features category filters, dynamic content loading. Converted frontend into a responsive WordPress theme."
          src={projectThree}
          gitLink={"https://github.com/nihuGit/newTry"}
          webLink={"https://github.com/nihuGit/newTry"}
        />
        {/* <ProjectsCard
          title="AirBnb Clone"
          des=" Next.js-powered Airbnb clone with secure payments, dynamic listings, and host-controlled availability updates via Node.js + MongoDB backend."
          src={projectFour}
          gitLink={"https://github.com/nihuGit/OpenBlog"}
          webLink={"https://nihugit.github.io/OpenBlog/"}
        /> */}
         <ProjectsCard
          title="Cybersecurity Blog"
          des=" Single-page cyber info hub with dynamic TOC, scroll progress bar, and responsive design. Built with vanilla HTML/CSS/JS for fast, interactive content navigation."
          src={projectFour}
          gitLink={"https://github.com/nihuGit/OpenBlog"}
          webLink={"https://nihugit.github.io/OpenBlog/"}
        />
        <ProjectsCard
          title="Interior Service Website"
          des="Built a responsive service website with HTML/CSS and interactive sections. Features contact forms, and mobile-first layouts using vanilla JavaScript."
          src={projectFive}
          gitLink={"https://github.com/nihuGit/InterioVibe"}
          webLink={"https://nihugit.github.io/InterioVibe/"}
        />
        <ProjectsCard
          title="E-commerce Frontend Demo"
          des="Built a responsive online store using vanilla HTML/CSS/JS. Features product filtering, cart management, and favorite list simulation with browser storage."
          src={projectSix}
          gitLink={"https://github.com/nihuGit/Ecommerce-app/tree/staring"}
          webLink={"https://nihugit.github.io/Ecommerce-app/"}
        />
      </div>
    </section>
  );
}

export default Projects