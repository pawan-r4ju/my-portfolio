import{j as e,m as i,u as o,v as r}from"./index-DPEdNxr5.js";const l=[{title:"POKEDEX",description:"a api based pokemon information web app which is responsive and it gives 648 pokemon details .",tags:["React","Tailwind CSS","Poke Api"],github:"https://github.com/pawan-r4ju/Pokedex_Reactjs",demo:"https://pawan-r4ju.github.io/Pokedex_Reactjs/",image:"pokedex.png"},{title:"THE MOVIES HUB",description:"A MERN based fullstack web app which allows admin to manage the movies and also allows user to interact with the movies and also added the search.",tags:["React","Node.js","MongoDB","Express.js"],github:"https://github.com/pawan-r4ju/movie-MERN-app",demo:"https://github.com/pawan-r4ju/movie-MERN-app/blob/main/thumb.png",image:"thumb.png"},{title:"HOOBANK",description:"A Responsive react js Based Landing page for the finance service Firm",tags:["React js","Tailwind CSS"],github:"https://github.com/pawan-r4ju/hoobank",demo:"https://hoobank-85kn.onrender.com/",image:"hoobank.png"},{title:"VIZARD",description:"A responsive web application that represents the services provided by the VIZARD.",tags:["JavaScript","HTML","CSS"],github:"https://github.com/nikhiltelase/image-search",demo:"https://pawan-r4ju.github.io/VIZARD/",image:"vizard.png"}],d=()=>e.jsx("section",{id:"projects",className:"py-20 backdrop-blur-0",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[e.jsxs(i.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1.5},className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"My Projects"}),e.jsx("p",{className:"text-gray-400 text-lg max-w-3xl mx-auto",children:"A showcase of my technical projects, demonstrating my expertise in various technologies and problem-solving abilities."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:l.map((t,a)=>e.jsxs(i.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:a*.2},className:"bg-tertiary rounded-lg overflow-hidden",children:[e.jsx("div",{className:"relative p-8 bg-black-200",children:t.image&&e.jsx("img",{src:t.image,alt:`${t.title} Preview`,className:"w-full h-full object-cover rounded-lg"})}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:t.title}),e.jsx("p",{className:"text-gray-400 mb-4",children:t.description}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:t.tags.map((s,n)=>e.jsx("span",{className:"bg-black-100 text-white px-3 py-1 rounded-full text-sm",children:s},n))}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white hover:text-accent transition-colors",children:[e.jsx(o,{})," Code"]}),t.demo&&e.jsxs("a",{href:t.demo,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white hover:text-accent transition-colors",children:[e.jsx(r,{})," Live Demo"]})]})]})]},a))})]})});export{d as default};
