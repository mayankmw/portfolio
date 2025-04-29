import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutMayank extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about mayank" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="mayank's education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="mayank's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="mayank's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="mayank's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutMayank;

export const displayAboutMayank = () => {
    return <AboutMayank />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Mayank Wadhwa Logo" />
            </div>
            <div className="mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Mayank Wadhwa</span>,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Software Developer!</span></div>
            </div>
            <div className="mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className="list-pc">
                    I'm a <span className="font-medium">Software Developer</span> currently working at 
                    <u className="cursor-pointer">
                        <a href="https://www.itsabacus.com/" target="_blank" rel="noreferrer"> Abacus Consultancy Services</a>
                    </u>. I specialize in full-stack development with a focus on React.js and Node.js.
                </li>
                <li className="mt-3 list-building">
                    I enjoy building scalable and efficient software solutions that solve real-world problems.
                </li>
                <li className="mt-3 list-time">
                    When I'm not coding, I like exploring new technologies, playing football and binge watching
                </li>
                <li className="mt-3 list-star">
                    My recent projects include <b>ZeroDB</b>, a document store database, and <b>NeoTrack</b>, a general tracker application.
                </li>
                <li className="mt-3 list-email">
                    Feel free to connect with me at <a className="text-underline" href="mailto:wadhwa.mayankreal9149@gmail.com"><u>wadhwa.mayankreal9149@gmail.com</u></a>.
                </li>
            </ul>
        </>
    );
}

function Education() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className="w-10/12 mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className="text-lg md:text-xl text-left font-bold leading-tight">
                        ShivajiRao Kadam Institute of Technology and Management
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">2018 - 2022</div>
                    <div className="text-sm md:text-base">B.Tech in Computer Science and Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 7.47/10</div>
                </li>
                <li className="list-disc mt-5">
                    <div className="text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup>
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">2016 - 2018</div>
                    <div className="text-sm md:text-base">Maths, Physics, Chemistry</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 74.4%</div>
                </li>
                <li className="list-disc mt-5">
                    <div className="text-lg md:text-xl text-left font-bold leading-tight">
                        Class 10<sup>th</sup>
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">2014 - 2016</div>
                    <div className="text-sm md:text-base">General Subjects</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 76%</div>
                </li>
            </ul>
        </>
    );
}

function Skills() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className="tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>My areas of expertise are <strong className="text-pink-600">Back-end development, React.js, and JavaScript!</strong></div>
                </li>
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used:</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className="text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className="text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000" alt="JavaScript" />
                        <img className="m-1" src="https://img.shields.io/badge/-TypeScript-%23007ACC?style=flat&logo=typescript&logoColor=ffffff" alt="TypeScript" />
                        <img className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="HTML5" />
                        <img className="m-1" src="https://img.shields.io/badge/-CSS3-%231572B6?style=flat&logo=css3&logoColor=ffffff" alt="CSS3" />
                        <img className="m-1" src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="Git" />
                        <img className="m-1" src="https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=docker&logoColor=ffffff" alt="Docker" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                <div className="flex flex-wrap justify-center items-start w-full mt-2">
                    <img className="m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="React" />
                    <img className="m-1" src="https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=ffffff" alt="NestJS" />
                    <img className="m-1" src="https://img.shields.io/badge/-Redux-764ABC?style=flat&logo=redux&logoColor=ffffff" alt="Redux" />
                    <img className="m-1" src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=ffffff" alt="Node.js" />
                    <img className="m-1" src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=ffffff" alt="Tailwind CSS" />
                    <img className="m-1" src="https://img.shields.io/badge/-Express.js-000000?style=flat&logo=express&logoColor=ffffff" alt="Express.js" />
                    <img className="m-1" src="https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=ffffff" alt="MongoDB" />
                    <img className="m-1" src="https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=mysql&logoColor=ffffff" alt="MySQL" />
                </div>

                </div>
            </div>
            <ul className="tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span>And of course,</span> <img className="inline ml-1" src="https://img.shields.io/badge/-Linux-FCC624?style=flat&logo=linux&logoColor=000000" alt="Linux" /> <span>!</span>
                </li>
            </ul>
        </>
    );
}


function Projects() {
    const project_list = [
        {
            name: "ZeroDB",
            date: "2025",
            link: "https://github.com/mayankmw/ZeroDB",
            description: [
                "A JavaScript-based document store database system built from scratch.",
            ],
            domains: ["javascript"]
        },
        {
            name: "NeoTrack - Currently Working on",
            date: "2025",
            link: "https://github.com/mayankmw/NeoTrack",
            description: [
                "A MERN-based general tracker with features like trip tracking, expense tracking, notifications, and a chatbot.",
                "Tech Stack: React.js, Shadcn, Node.js, MongoDB, Twilio Voice, Pinecone"
            ],
            domains: ["react.js", "node.js", "mongodb", "twilio", "pinecone"]
        },
        {
            name: "Chrome Extension (Website Summarizer)",
            date: "2024",
            link: "https://github.com/mayankmw/Website-Content-Summarizer",
            description: [
                "A Chrome extension that summarizes website content using the OpenAI API. Allows customizable summary lengths and highlights key information.",
                "Tech Stack: React.js, OpenAI API"
            ],
            domains: ["react.js", "chrome-extension", "openai-api"]
        },
        {
            name: "News App",
            date: "2023",
            link: "https://github.com/mayankmw/News_App",
            description: [
                "A dynamic news app that integrates with a third-party API to display news across various categories. Includes pagination.",
                "Tech Stack: React.js, Node.js, MongoDB"
            ],
            domains: ["react.js", "node.js", "mongodb"]
        },
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600",
        "openai-api": "blue-600",
        "node.js": "green-500",
        "mongodb": "green-400",
        "twilio": "orange-500",
        "pinecone": "purple-700"
    }

    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className="text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=mayankmw&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className="tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ? 
                                            project.domains.map((domain, index) => {
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                                            })
                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}

function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Mayank-Wadhwa-Resume.pdf" title="mayank wadhwa resume" frameBorder="0"></iframe>
    )
}