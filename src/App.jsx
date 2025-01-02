import Project from "./Project"
import BulletinBoardUrl from './assets/bulletin-board.png'
import CVAppUrl from './assets/cv-app.png'
import ToDoUrl from './assets/todo.png'
import WeatherAppUrl from './assets/weather-app.png'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "#skills", label: "Skills" },
    { href: "#exp", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" }
  ];

  return (
    <header className="sticky top-0 z-10 bg-stone-900">
      <div className="flex items-center w-full px-4 py-4">
        <a 
          href="#header" 
          className="font-mono text-xl font-bold outline-none text-stone-200 hover:text-blue-400 sm:text-2xl"
        >
          OM KAUSHIK
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden gap-8 ml-auto font-mono md:flex text-stone-300">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a 
                className="p-2 hover:text-blue-400" 
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="p-2 ml-auto md:hidden text-stone-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="border-t md:hidden bg-stone-900 border-stone-800">
          <ul className="py-2 font-mono text-stone-300">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a 
                  className="block px-4 py-2 hover:text-blue-400 hover:bg-stone-800"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

function App() {

  return (
    <main className="relative flex justify-center min-h-screen bg-stone-900">
      <div className="container max-w-[700px] w-full px-4">
        <Header />
        {/* <section className="pt-8 mb-12 scroll-m-16"id="header">
          <h1 className="font-sans text-3xl font-semibold text-stone-50">Hey, I'm Om 👋</h1>
          <h3 className="mt-4 text-lg text-stone-300" >A full-stack developer passionate about creating seamless user experiences.</h3>
        </section> */}
        <section class="pt-8 mb-12 scroll-m-16"id="header">
  <div>
    <h1 class="text-3xl md:text-3xl font-bold text-white mb-4" id="header">
      Hey, I'm Om <span class="text-yellow-400">👋</span>
    </h1>
    <div class="space-y-4">
      <p class="text-lg md:text-xl text-gray-200">
        Finding opportunities in challenges
      </p>
      <p class="text-base md:text-lg text-gray-400">
       Always curious, always learning
      </p>
    </div>
  </div>
  
  <div class="mt-8 flex flex-wrap gap-4">
    <span class="text-sm text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
      Full-stack Developer
    </span>
    <span class="text-sm text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
      Problem Solver
    </span>
    <span class="text-sm text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
      Continuous Learner
    </span>
    <span class="text-sm text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
     Tech Enthusiast
    </span>
  </div>
</section>
        <section className="mt-8 scroll-m-28"id="skills">
          <h1  className="font-sans text-3xl font-semibold text-stone-50">Tools <span className="text-blue-300">& Technologies</span></h1>
          <section className="grid grid-cols-3 mt-8 font-mono sm:grid-cols-4 gap-y-4 text-stone-200">
              <div className="flex flex-col items-center gap-2">
                <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <span className="text-stone-200">HTML</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                <span className="text-stone-200">CSS</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <span className="text-stone-200">Javascript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" />
                <span className="text-stone-200">TypeScript</span>
              </div>

              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <span className="text-stone-200">React.js</span>
              </div>
          
              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                <span className="text-center text-stone-200">Redux Toolkit</span>
              </div>
              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] brightness-110 w-auto" src="https://raw.githubusercontent.com/pmndrs/zustand/refs/heads/main/examples/demo/public/logo192.png" />
                <span className="text-center text-stone-200">Zustand</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
            <img className="invert h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-plain.svg" />
                <span className="text-center text-stone-200">React Router</span>
              </div>
              <div className="flex flex-col items-center gap-2">
            <img className="invert h-[50px] w-auto"  src="https://static.cdnlogo.com/logos/e/72/expo-go-app.svg" />
                <span className="text-center text-stone-200">Expo</span>
              </div>
              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto"  src="https://img.icons8.com/nolan/64/react-native.png" alt="react-native" />
                <span className="text-center text-stone-200">React Native</span>
              </div>
               <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/capacitor/capacitor-original.svg" />
                <span className="text-stone-200">Capacitor</span>
              </div>
              <div className="flex flex-col items-center gap-2">
            <img className="invert h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" />
                <span className="text-center text-stone-200">Three.js</span>
              </div>
          
              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                <span className="text-center text-stone-200">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto"src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"  />
                <span className="text-center text-stone-200">Bootstrap</span>
              </div>
              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"  />
                <span className="text-center text-stone-200">Material UI</span>
              </div>

              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" />
                <span className="text-stone-200">Jest</span>
              </div>
              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto brightness-200 hue-rotate-180" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" />
                <span className="text-stone-200">Selenium</span>
              </div>

              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                <span className="text-stone-200">Git</span>
              </div>
              <div className="flex flex-col items-center gap-2">
            <img className="invert h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                <span className="text-stone-200">Github</span>
              </div>
              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />
                <span className="text-stone-200">Bash</span>
              </div>
             

              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg" />
                <span className="text-stone-200">Appwrite</span>
              </div>


              <div className="flex flex-col items-center gap-2">
        
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
          
                <span className="text-stone-200">Figma</span>
              </div>
              <div className="flex flex-col items-center gap-2">
        
            <img className="h-[50px] w-auto invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
          
                <span className="text-stone-200">Express</span>
              </div>
              <div className="flex flex-col items-center gap-2">
        
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" />
          
                <span className="text-stone-200">Nginx</span>
              </div>
              <div className="flex flex-col items-center gap-2">
        
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
          
                <span className="text-stone-200">AWS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
        
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
          
                <span className="text-stone-200">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
        
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
          
                <span className="text-stone-200">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-2">
        
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
          
                <span className="text-stone-200">Postman</span>
              </div>
              <div className="flex flex-col items-center gap-2">
        
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg" />
          
                <span className="text-stone-200">Webpack</span>
              </div>
              <div className="flex flex-col items-center gap-2">
        
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
          
                <span className="text-stone-200">PostgreSQL</span>
              </div>

              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                <span className="text-stone-200">PHP</span>
              </div>
              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" />
                <span className="text-stone-200">jQuery</span>
              </div>

              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
          
                <span className="text-stone-200">MySQL</span>
              </div>

              <div className="flex flex-col items-center gap-2">
           
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
          
          
                <span className="text-stone-200">Java</span>
              </div>
              <div className="flex flex-col items-center gap-2">
           
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg"/>
          
                <span className="text-stone-200">C</span>
              </div>
              <div className="flex flex-col items-center gap-2">
           
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
          
                <span className="text-stone-200">C++</span>
              </div>

          </section>
        </section>
        <section className="mt-8 scroll-m-28" id="exp">
 <h1 className="font-sans text-3xl font-semibold text-stone-50">Experience</h1>
 {/* Code Backward labs */}
 <div className="flex items-start gap-4 my-8">
  <div className="sm:w-[45px] sm:h-[45px]">
    <img className="mt-4 rounded-full" src="https://media.licdn.com/dms/image/v2/C4D0BAQEoVwovW2RMRA/company-logo_100_100/company-logo_100_100/0/1647099564262?e=1738195200&v=beta&t=5P5pskd7Y1elDUybA1c4K-Cb-RQqpdsJkoiCyLZsu0I" alt="" />
    </div>
   <div>
     <h1 className="mt-4 text-xl text-stone-100">Full Stack Developer Intern</h1>
     <div className="text-stone-400"><a className="text-stone-200 hover:text-blue-500" href="https://www.linkedin.com/company/brand-boom-digital-solutions/posts/?feedView=all">Code Backward Lab</a> , Oct 2024 - Present </div>
     <ul className="px-2 mt-4 list-disc text-stone-200">
      <li className="my-2">Worked on backend technologies such as MongoDB, Express.js, Node.js and PostgreSQL</li>
      <li className="my-2">Maintained modular codebase and implemented industry standard practices</li>
      <li>Designed and developed RESTful APIs with secure authentication and authorization flows</li>
      <li>Integrated third-party APIs and services to enhance application functionality</li>
     </ul>
   </div>
 </div>
 {/* DPI Infotech */}
 <div className="flex items-start gap-4 my-8">
  <div className="sm:w-[45px] sm:h-[45px]">
    <img className="mt-4 rounded-full" src="https://media.licdn.com/dms/image/v2/C4D0BAQG9aDmiWin4BQ/company-logo_100_100/company-logo_100_100/0/1630533785718/dpi_infotech_logo?e=1738195200&v=beta&t=QI1efsuftWGj6uzazT2keBKJhO070vxtpSdKA-FzfDo" alt="" />
    </div>
   <div>
     <h1 className="mt-4 text-xl text-stone-100">Backend Developer Intern</h1>
     <div className="text-stone-400"><a className="text-stone-200 hover:text-blue-500" href="https://www.linkedin.com/company/dpi-infotech/">DPI Infotech</a> , Aug 2024 - Sep 2024 </div>
     <ul className="px-2 mt-4 list-disc text-stone-200">
      <li className="my-2">Built dynamic and responsive web applications with Javascript, AJAX, PHP and MySQL</li>
      <li className="my-2">Worked on managing both frontend and backend of a large ecommerce platform</li>
      <li className="my-2">Created user-friendly interface with modern libraries and frameworks.</li>
     </ul>
   </div>
 </div>
        </section>
        <section className="mt-8 scroll-m-28" id="projects" >
           <h1 className="font-sans text-3xl font-semibold text-stone-50">Projects</h1>
<Project
title="Bulletin Board"
imageUrl={BulletinBoardUrl}
tags= "React.js, Redux Toolkit, Axios, Tailwind CSS"
liveLink="https://bulletin-board-virid.vercel.app/"
repoLink="https://github.com/kaushikom/Bulletin-Board"
content="Bulletin Board is a dynamic platform that allows users to post, react, and read concise news updates. Built with React.js and Redux Toolkit, it offers efficient state management and handles asynchronous actions seamlessly. The application provides a user-friendly interface, ensuring a smooth and engaging experience. Key features include real-time updates, interactive reactions, and a clean, responsive design."
/>
<Project 
title="CV Builder"
imageUrl={CVAppUrl}
tags= "React.js"
liveLink="https://cv-app-om-kaushiks-projects.vercel.app/"
repoLink="https://github.com/kaushikom/CV-App"
content="CV Builder is an interactive web application developed with React.js, designed to help users create and download personalized resumes. This project was created to practice managing state, props, and data flow in React applications. Users can add unlimited fields in each section, customize their resumes, and download the final version with ease. The application provides a user-friendly interface, making resume creation intuitive and flexible."
/>
<Project 
title="Todo App"
imageUrl={ToDoUrl}
tags="React.js, Tailwind CSS"
liveLink="https://todo-app-iota-woad-27.vercel.app/"
repoLink="https://github.com/kaushikom/Todo-App"
content="Todo App is a task management application built with React.js and Tailwind CSS, offering a sleek and mobile-responsive design. Users can effortlessly add, delete, and check tasks, with haptic feedback enhancing the experience on mobile devices. The app includes features such as clearing all tasks or only completed tasks, and provides three distinct views: All, Active (incomplete tasks), and Completed. This project combines functionality with an intuitive user interface for efficient task management."
/>
<Project
title="Weather App"
imageUrl={WeatherAppUrl}
tags="JavaScript, API, HTML, CSS"
liveLink="https://kaushikom.github.io/Weather-App/"
repoLink="https://github.com/kaushikom/Weather-App"
content="Weather App is built with HTML, CSS, and JavaScript to practice API calls and asynchronous code handling. It provides temperature readings in both Celsius and Fahrenheit, with dynamic backgrounds that change according to the weather conditions—sunny, rainy, and more—offering a visually engaging user experience."
/>
        </section>
        <section className="my-8" id="about" >
           <h1 className="font-sans text-3xl font-semibold text-stone-50">About</h1>
      <p className="mt-4 text-lg text-justify text-stone-300 font-Poppins">Hello! I'm a developer from Delhi who believes in learning and adapting to whatever technology best suits the needs. I enjoy the challenge of picking up new technologies and frameworks as needed.
In my free time, I get inspiration from other people's work and try out new technologies to build side projects, learn from the dev community, or read a good book.
<br />Feel free to reach out and say hello at: <a className="text-blue-400 underline" href="mailto:omkaushik015@gmail.com">omkaushik015@gmail.com</a></p>
      <ul className="flex justify-around mt-10 mb-10 font-semibold text-stone-300">
        <li><a className="flex flex-col items-center transition-transform hover:scale-110" href="https://x.com/OmKaushik_"><img className="invert h-[30px] w-auto" src="https://img.icons8.com/?size=100&id=8824&format=png&color=000000" alt="" />Twitter</a></li>
        <li><a className="flex flex-col items-center transition-transform hover:scale-110" href="https://www.linkedin.com/in/om-kaushik-a59017205"><img className="invert h-[30px] w-auto" src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="" />LinkedIn</a></li>
        <li><a className="flex flex-col items-center transition-transform hover:scale-110" href="https://github.com/kaushikom"><img className="invert h-[30px] w-auto" src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="" />Github</a></li>
      </ul>
        </section>
      </div>
      
    </main>
  )
}
// About section

export default App
