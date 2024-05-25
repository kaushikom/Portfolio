import Project from "./Project"
import BulletinBoardUrl from './assets/bulletin-board.png'
import CVAppUrl from './assets/cv-app.png'
import ToDoUrl from './assets/todo.png'
import WeatherAppUrl from './assets/weather-app.png'

function App() {

  return (
    <main className="min-h-screen bg-stone-900 flex justify-center">
      <div className="container max-w-[700px] w-full px-4">
        <header className="py-4 flex items-center sticky top-0 bg-stone-900 w-full z-10" >
          <a href="#header" className="font-mono  text-stone-200 text-xl font-bold hover:text-blue-400 sm:text-2xl outline-none p-2">OM KAUSHIK</a>
          <ul className="text-stone-300 flex gap-4 px-4 ml-auto font-mono sm:gap-8">
            <a className="hover:text-blue-400 p-2" href="#skills">Skills</a>
            <a className="hover:text-blue-400 p-2" href="#projects">Projects</a>
            <a className="hover:text-blue-400 p-2" href="#about">About</a>
          </ul>
        </header>
        <section className="pt-8 mb-12 scroll-m-16"id="header">
          <h1 className="text-stone-50 text-3xl font-semibold font-sans">Hey, I'm Om 👋</h1>
          <h3 className="text-stone-300 mt-4 text-lg" >A front-end developer passionate about creating seamless user experiences.</h3>
        </section>
        <section className="mt-8 scroll-m-24"id="skills">
          <h1  className="text-stone-50 text-3xl font-semibold font-sans">Tools <span className="text-blue-300">& Technologies</span></h1>
          <section className="grid grid-cols-3 mt-8 sm:grid-cols-4 gap-y-4 font-mono text-stone-200">
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
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <span className="text-stone-200">React.js</span>
              </div>
          
              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                <span className="text-stone-200">Redux Toolkit</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
            <img className="invert h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-plain.svg" />
                <span className="text-stone-200">React Router</span>
              </div>
          
              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                <span className="text-stone-200">Tailwind CSS</span>
              </div>

              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" />
                <span className="text-stone-200">Jest</span>
              </div>

              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                <span className="text-stone-200">Git</span>
              </div>

              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg" />
                <span className="text-stone-200">Appwrite</span>
              </div>

              <div className="flex flex-col items-center gap-2">
            <img className="h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
                <span className="text-stone-200">Vite</span>
              </div>

              <div className="flex flex-col items-center gap-2">
            <img className="invert h-[50px] w-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />
                <span className="text-stone-200">Vercel</span>
              </div>

          </section>
        </section>
        <section className="mt-8 scroll-m-20" id="projects" >
           <h1 className="text-stone-50 text-3xl font-semibold font-sans">Projects</h1>
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
           <h1 className="text-stone-50 text-3xl font-semibold font-sans">About</h1>
      <p className="text-stone-300 mt-4 text-lg font-Poppins text-justify">I'm a front-end developer from Delhi, India. I enjoy seeking out creative solutions to complex problems. I thrive in dynamic environments and am always eager to learn and implement the latest in web development. <br />In my free time, I get inspiration from other people's work and try out new technologies to build side projects. Apart from that, I also read books sometimes. <br />Feel free to reach out and say hello at: <a className="text-blue-400 underline" href="mailto:omkaushik015@gmail.com">omkaushik015@gmail.com</a></p>
      <ul className="text-stone-300 font-semibold flex justify-around mt-10 mb-10">
        <li><a className="flex flex-col items-center hover:scale-110 transition-transform" href="https://x.com/OmKaushik_"><img className="invert h-[30px] w-auto" src="https://img.icons8.com/?size=100&id=8824&format=png&color=000000" alt="" />Twitter</a></li>
        <li><a className="flex flex-col items-center hover:scale-110 transition-transform" href="https://www.linkedin.com/in/om-kaushik-a59017205"><img className="invert h-[30px] w-auto" src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="" />LinkedIn</a></li>
        <li><a className="flex flex-col items-center hover:scale-110 transition-transform" href="https://github.com/kaushikom"><img className="invert h-[30px] w-auto" src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="" />Github</a></li>
      </ul>
        </section>
      </div>
      
    </main>
  )
}
// About section

export default App
