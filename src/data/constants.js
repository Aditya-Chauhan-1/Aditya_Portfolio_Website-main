import immigrationImg from "../images/projects/immigration.jpg";
import mernCrudImg from "../images/projects/mern-crud.jpg";
import weatherImg from "../images/projects/weather.jpg";
import ecommerceImg from "../images/projects/ecommerce.jpg";
import qrImg from "../images/projects/qr.jpg";
import todoImg from "../images/projects/todo.jpg";
import mlWorkbenchImg from "../images/projects/ml-workbench.png";
import agronoidPhoto from "../images/projects/agronoid-2.jpg";
import agronoidDiagram from "../images/projects/agronoid-smart-farm.png";
import iftmGoldMedal from "../images/education/iftm-gold-medal.jpg";
import iftmGoldMedalCertificate from "../images/education/iftm-gold-medal-certificate.jpg";
import iftmDiplomaCse from "../images/education/iftm-diploma-cse.jpg";

export { certificates } from "./certificates";

export const Bio = {
  name: "Aditya Chauhan",
  roles: [
    "Software Engineer",
    "Technical Corporate Trainer",
    "Data Scientist",
    "Frontend Engineer",
    "Backend Engineer",
  ],
  description:
    "Software Engineer and Corporate Trainer specializing in the MERN stack, Data Science, and Generative AI. I build scalable web applications for international clients and train professionals to become industry-ready developers and data scientists.",
  email: "aadityachauhan6395@gmail.com",
  location: "Amroha, Uttar Pradesh, India",
  availability: "Open to opportunities",
  github: "https://github.com/Aditya-Chauhan-1",
  resume:
    "https://drive.google.com/file/d/1v4WGmzfnapNKh5Z92VDoTF1WSCOjQuOZ/view",
  linkedin: "https://www.linkedin.com/in/aditya63/",
  insta: "https://www.instagram.com/shyam_diwana6395",
  whatsapp: "916395756268",
};

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "6+", label: "Live Projects" },
  { value: "4", label: "Companies" },
  { value: "MERN", label: "Core Stack" },
];

export const services = [
  {
    title: "Full Stack Development",
    desc: "End-to-end MERN applications — APIs, databases, authentication, and deployment — built for real business needs.",
    icon: "code",
  },
  {
    title: "Frontend Engineering",
    desc: "Responsive, accessible React interfaces with clean UI, smooth motion, and production-ready performance.",
    icon: "design",
  },
  {
    title: "Generative AI",
    desc: "LLM apps, RAG pipelines, and agent workflows using LangChain, LlamaIndex, vector databases, and OpenAI.",
    icon: "ai",
  },
  {
    title: "Corporate Training",
    desc: "Hands-on corporate training for students and teams — Full Stack (MERN), JavaScript, and Data Science, from fundamentals to deployable projects.",
    icon: "teach",
  },
  {
    title: "Data Science Training",
    desc: "Train teams as Data Scientists — Python, Pandas, NumPy, SQL, machine learning, visualization, and real datasets used in industry projects.",
    icon: "science",
  },
];

const icon = (pack, file = `${pack}-original.svg`) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${pack}/${file}`;

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "React Js", image: icon("react") },
      { name: "HTML", image: icon("html5") },
      { name: "CSS", image: icon("css3") },
      { name: "JavaScript", image: icon("javascript") },
      { name: "Bootstrap", image: icon("bootstrap") },
      { name: "Material UI", image: icon("materialui") },
      { name: "Tailwind CSS", image: icon("tailwindcss") },
      { name: "jQuery", image: icon("jquery") },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node Js", image: icon("nodejs") },
      { name: "Express Js", image: icon("express"), darkLogo: true },
      { name: "Python", image: icon("python") },
      { name: "Flask", image: icon("flask"), darkLogo: true },
      { name: "Django", image: icon("django", "django-plain.svg"), darkLogo: true },
      { name: "MySQL", image: icon("mysql") },
      { name: "PostgreSQL", image: icon("postgresql") },
      { name: "MongoDB", image: icon("mongodb") },
      { name: "Firebase", image: icon("firebase", "firebase-plain.svg") },
    ],
  },
  {
    title: "Data Science",
    groups: [
      {
        title: "Core",
        skills: [
          { name: "Python", image: icon("python") },
          { name: "Pandas", image: icon("pandas") },
          { name: "NumPy", image: icon("numpy") },
          {
            name: "SciPy",
            image: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/scipy.svg",
            darkLogo: true,
          },
          { name: "SQL", image: icon("mysql") },
          {
            name: "Excel",
            image:
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='4' fill='%23217346'/%3E%3Cpath fill='white' d='M8 7h3.6v10H8V7zm4.4 0H16v4.6h-3.6V7zm0 5.4H16V17h-3.6v-4.6z'/%3E%3C/svg%3E",
          },
        ],
      },
      {
        title: "Machine Learning",
        skills: [
          { name: "Scikit-learn", image: icon("scikitlearn") },
          { name: "TensorFlow", image: icon("tensorflow") },
          { name: "Keras", image: icon("keras") },
        ],
      },
      {
        title: "Visualization",
        skills: [
          { name: "Matplotlib", image: icon("matplotlib") },
          {
            name: "Seaborn",
            image:
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='5' fill='%234C78A8'/%3E%3Cpath d='M5 16c2.2-4 4.4-6 7-6s4.8 2 7 6' fill='none' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='8' cy='9' r='1.4' fill='%23F58518'/%3E%3Ccircle cx='16' cy='8' r='1.4' fill='%2354A24B'/%3E%3C/svg%3E",
          },
          { name: "Plotly", image: icon("plotly") },
        ],
      },
      {
        title: "Tools",
        skills: [
          { name: "Jupyter", image: icon("jupyter") },
          { name: "Google Colab", image: icon("googlecolab") },
          { name: "Streamlit", image: icon("streamlit") },
        ],
      },
    ],
  },
  {
    title: "Generative AI",
    groups: [
      {
        title: "Core",
        skills: [
          {
            name: "LLM",
            image:
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='6' fill='%2310A37F'/%3E%3Ccircle cx='8' cy='12' r='2' fill='white'/%3E%3Ccircle cx='16' cy='12' r='2' fill='white'/%3E%3Ccircle cx='12' cy='8' r='2' fill='white'/%3E%3Ccircle cx='12' cy='16' r='2' fill='white'/%3E%3Cpath d='M8 12h8M12 8v8' stroke='white' stroke-width='1.4' opacity='0.75'/%3E%3C/svg%3E",
          },
          {
            name: "RAG",
            image:
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='6' fill='%230EA5E9'/%3E%3Crect x='5' y='5' width='14' height='3.2' rx='1' fill='white'/%3E%3Crect x='5' y='10.4' width='14' height='3.2' rx='1' fill='white' opacity='0.85'/%3E%3Crect x='5' y='15.8' width='9' height='3.2' rx='1' fill='white' opacity='0.7'/%3E%3C/svg%3E",
          },
          {
            name: "Generative AI",
            image:
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='6' fill='%238B5CF6'/%3E%3Cpath d='M12 4l1.4 5.2L18 12l-4.6 2.8L12 20l-1.4-5.2L6 12l4.6-2.8L12 4z' fill='white'/%3E%3C/svg%3E",
          },
          {
            name: "Agentic AI",
            image:
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='6' fill='%23F97316'/%3E%3Ccircle cx='12' cy='9' r='3.2' fill='white'/%3E%3Crect x='7' y='13.5' width='10' height='6' rx='3' fill='white'/%3E%3C/svg%3E",
          },
          {
            name: "Prompt Engineering",
            image:
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='6' fill='%23EC4899'/%3E%3Cpath d='M6 8h12v8H9l-3 3V8z' fill='white'/%3E%3C/svg%3E",
          },
        ],
      },
      {
        title: "Frameworks",
        skills: [
          {
            name: "OpenAI",
            image: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg",
            darkLogo: true,
          },
          {
            name: "Hugging Face",
            image: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
          },
          {
            name: "LangChain",
            image: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
          },
          {
            name: "LlamaIndex",
            image: "https://avatars.githubusercontent.com/u/130722866?s=200&v=4",
          },
          {
            name: "LangGraph",
            image: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
          },
          {
            name: "CrewAI",
            image: "https://avatars.githubusercontent.com/u/170674373?s=200&v=4",
          },
          {
            name: "Ollama",
            image: "https://avatars.githubusercontent.com/u/151674099?s=200&v=4",
            darkLogo: true,
          },
          {
            name: "Gemini",
            image: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlegemini.svg",
            darkLogo: true,
          },
        ],
      },
      {
        title: "Vector Databases",
        skills: [
          {
            name: "ChromaDB",
            image: "https://avatars.githubusercontent.com/u/126718082?s=200&v=4",
          },
          {
            name: "FAISS",
            image:
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='6' fill='%230866F7'/%3E%3Ccircle cx='9' cy='10' r='3' fill='none' stroke='white' stroke-width='1.8'/%3E%3Cpath d='M11.2 12.2L16.5 17.5' stroke='white' stroke-width='1.8' stroke-linecap='round'/%3E%3C/svg%3E",
          },
          {
            name: "Pinecone",
            image: "https://avatars.githubusercontent.com/u/54333248?s=200&v=4",
          },
        ],
      },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", image: icon("git") },
      { name: "GitHub", image: icon("github"), darkLogo: true },
      { name: "Netlify", image: icon("netlify") },
      { name: "VS Code", image: icon("vscode") },
      { name: "Postman", image: icon("postman") },
      { name: "Figma", image: icon("figma") },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/v2/D560BAQFUY_4Bn_YmwQ/company-logo_200_200/company-logo_200_200/0/1726170894890/palmspire_technologies_logo?e=2147483647&v=beta&t=kbIrLwI0hzsgGoLAifvS2Al2Pa2Ul1aO2_w-hYFrD3c",
    role: "Software Developer",
    company: "Palmspire IT Solution Private Limited, Fort Macleod, Alberta, Canada",
    date: "2025 - Present",
    desc: "Developing and maintaining scalable web and mobile applications using modern JavaScript frameworks. Collaborating with international teams to design and implement end-to-end solutions, working closely with clients to understand requirements and ship high-quality software.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "JavaScript",
      "Mobile Development",
      "MongoDB",
      "REST APIs",
      "Full Stack Development",
      "Git",
      "GitHub",
      "HTML",
      "CSS",
      "Material UI",
      "HubSpot CRM",
    ],
  },
  {
    id: 2,
    img: "https://media.licdn.com/dms/image/v2/C560BAQF5th2_4vAFkA/company-logo_200_200/company-logo_200_200/0/1630626661031/codingblocksindia_logo?e=2147483647&v=beta&t=B5ts0hZFiRmgEXYqUZ6BHueCK8YMEiA3KgOy-ghcKPc",
    role: "Technical Corporate Trainer / Data Science Trainer",
    company: "Coding Blocks Private Limited, Delhi",
    date: "Jan 2025 - April 2025",
    desc: "Delivered hands-on corporate training in Full Stack Web Development (MERN) and Data Science. Trained students and professionals on MongoDB, Express.js, React.js, Node.js, Python, Pandas, and machine learning through real-world projects — covering APIs, frontend integration, data analysis, and deployment.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Python",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "Data Science",
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs",
      "Firebase",
      "Git & GitHub",
    ],
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKAF48sUHkEkXSyk5ps32chBoi2FNz0yAgA&s",
    role: "Full Stack Engineer Intern",
    company: "CETPA Infotech Pvt Ltd",
    date: "July 2024 - Dec 2024",
    desc: "Developed and optimized web applications by improving performance and reducing load time. Built dynamic React interfaces, integrated APIs with Axios, migrated existing code to React, and used Vite with Jest for unit testing, debugging, and UI stability.",
    skills: [
      "ReactJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material UI",
      "Vite",
      "REST APIs",
      "Axios",
      "React Query",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
    ],
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5Xw5xuGO31B8YzGvBHl-UaKksxOLg2u1Kw&s",
    role: "Web Development Intern",
    company: "Infotage Private Limited",
    date: "Nov 2023 - Feb 2024",
    desc: "Worked across front-end and back-end with HTML, CSS, JavaScript, React.js, and Node.js. Created interactive learning experiences and guided practical coding work while delivering clear technical implementations.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JavaScript",
      "HTML",
      "CSS",
      "Material UI",
      "Tailwind CSS",
      "Bootstrap",
      "Figma",
      "Vite",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://www.allschoolscolleges.com/partner-colleges/mit.jpg",
    school: "Moradabad Institute of Technology, affiliated to AKTU",
    date: "Oct 2021 - Sep 2024",
    grade: "7.57 CGPA",
    desc: "Completed Bachelor's degree in Computer Science and Engineering. Coursework included Data Structures, Algorithms, OOP, DBMS, Operating Systems, and Computer Networks, along with React and MERN stack projects.",
    degree: "Bachelor of Technology — B.Tech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://images.shiksha.com/mediadata/images/1629648951php0MJG9T.jpeg",
    school: "IFTM University, Moradabad",
    date: "Oct 2019 - Sep 2021",
    grade: "8.98 CGPA · Gold Medalist",
    desc: "Completed Polytechnic Diploma in Computer Science and Engineering with First Division with Honours. Awarded the University Gold Medal at IFTM University's Sixth Convocation, 4 December 2021.",
    degree: "Polytechnic Diploma — Computer Science and Engineering",
    achievement: "Gold Medalist — First Division with Honours · Sixth Convocation 2021",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXReWrYSezsmhEU0002l8P_HdoLklQKs6_tA&s",
    school: "Narayan Inter College, Amroha",
    date: "Apr 2017 - Apr 2019",
    grade: "75.2%",
    desc: "Completed Class 12 (U.P. Board) in the Science stream with Mathematics, Physics, and Chemistry.",
    degree: "Class XII (U.P. Board)",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXReWrYSezsmhEU0002l8P_HdoLklQKs6_tA&s",
    school: "Narayan Inter College, Amroha",
    date: "Apr 2015 - Apr 2017",
    grade: "83.67%",
    desc: "Completed Class 10 (U.P. Board) with core subjects including Science and Mathematics.",
    degree: "Class X (U.P. Board)",
  },
];

export const goldMedalHonour = {
  photo: iftmGoldMedal,
  photoAlt:
    "Aditya Chauhan with Gold Medal at IFTM University Sixth Convocation 2021",
  photoCaption: "Sixth Convocation 2021 — IFTM University, Moradabad",
  eyebrow: "Academic Excellence",
  title: "Gold Medalist,",
  titleAccent: "IFTM University",
  subtitle:
    "Honoured with the University Gold Medal at IFTM University, Moradabad for academic excellence in the Polytechnic Diploma in Computer Science and Engineering.",
  stats: [
    { value: "Gold", label: "Medal Award" },
    { value: "8.98", label: "CGPA" },
    { value: "Honours", label: "First Division" },
  ],
  honour: [
    { label: "University", value: "IFTM University, Moradabad" },
    { label: "Department", value: "Computer Science & Engineering" },
    { label: "Degree", value: "Polytechnic Diploma — CSE" },
    { label: "Duration", value: "Oct 2019 — Sep 2021" },
    { label: "Convocation", value: "Sixth Convocation, 4 Dec 2021" },
    { label: "Distinction", value: "Gold Medalist · First Division with Honours" },
  ],
  story:
    "This University Gold Medal was awarded for academic excellence across the full diploma programme — not a single exam, but consistent performance in Computer Science and Engineering. The diploma was conferred in First Division with Honours, and the medal was presented at IFTM University’s Sixth Convocation on 4 December 2021.",
  highlights: [
    "Awarded the University Gold Medal for the Polytechnic Diploma in Computer Science & Engineering.",
    "Passed in First Division with Honours · 8.98 CGPA (2019–2021).",
    "Formally recognised at IFTM University’s Sixth Convocation, 4 December 2021.",
    "Built a foundation in programming, databases, networks, and software engineering that continues in professional work today.",
  ],
  career:
    "The same focus that earned this medal now drives my work as a Software Engineer, Technical Corporate Trainer, and Data Scientist — teaching clearly, building carefully, and holding a high bar for quality.",
  documents: [
    {
      title: "Gold Medal Award Certificate",
      description: "IFTM University · Sixth Convocation · 4 Dec 2021",
      image: iftmGoldMedalCertificate,
    },
    {
      title: "Diploma in Computer Science & Engineering",
      description: "IFTM University · First Division with Honours · 23 Nov 2021",
      image: iftmDiplomaCse,
    },
  ],
};

export const projects = [
  {
    id: 8,
    title: "Agronoid",
    date: "B.Tech Capstone · May 2024",
    description:
      "A Bluetooth-controlled agricultural robot from my B.Tech capstone at MIT Moradabad. Agronoid automates sowing, drilling, watering, and soil analysis using Arduino, DC motors, a servo seeder, and DHT11 sensors — reducing farm labour. The work was also presented as a research paper at IIRA 4.0.",
    image: agronoidPhoto,
    images: [agronoidPhoto, agronoidDiagram],
    tags: ["Arduino", "Bluetooth HC-05", "Embedded C", "IoT", "Android", "DHT11", "L298N"],
    category: "robotics",
    pdf: `${process.env.PUBLIC_URL}/docs/agronoid.pdf`,
  },
  {
    id: 1,
    title: "ML Workbench",
    date: "Machine Learning",
    description:
      "An interactive Flask studio for regression, classification, and clustering. Upload a CSV, auto-clean missing values, encode categories, scale features, then train models — Linear and Polynomial Regression, Logistic Regression, KNN, Naive Bayes, Decision Tree, and K-Means — and inspect metrics with charts.",
    image: mlWorkbenchImg,
    tags: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "JavaScript"],
    category: "machine learning",
    github: "https://github.com/Aditya-Chauhan-1/ML_Workbench",
    webapp: "https://machine-learning-dashboard.onrender.com/",
  },
  {
    id: 2,
    title: "Immigration Service Website",
    date: "Client Project",
    description:
      "A modern, responsive website for RV Global Immigration Services. Built with React and Tailwind to give the consultancy a professional online presence.",
    image: immigrationImg,
    tags: ["React Js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    category: "web app",
    github: "https://github.com/Aditya-Chauhan-1/Client_Project",
    webapp: "https://global-immigration-serv.vercel.app/",
  },
  {
    id: 3,
    title: "MERN Stack CRUD App",
    date: "Full Stack",
    description:
      "A full stack CRUD app with React, Node.js, Express, and MongoDB to create, read, update, and delete user records.",
    image: mernCrudImg,
    tags: ["MongoDB", "Express.js", "React Js", "Node.js"],
    category: "web app",
    github: "https://github.com/Aditya-Chauhan-1/MernStack_CRUD",
    webapp: "https://mern-stack-crud-lime.vercel.app/",
  },
  {
    id: 4,
    title: "Weather Application",
    date: "Frontend",
    description:
      "A dynamic weather app that shows real-time conditions for any city — temperature, humidity, wind speed, pressure, and climate description — with a clean, easy-to-use interface.",
    image: weatherImg,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "web app",
    github: "https://github.com/Aditya-Chauhan-1/Weather-Application",
    webapp: "https://weather-application-taupe-three.vercel.app/",
  },
  {
    id: 5,
    title: "React Ecommerce UI",
    date: "Frontend",
    description:
      "A responsive ecommerce interface in React with product browsing, category filtering, a shopping cart, and a smooth shopping experience focused on UI and state management.",
    image: ecommerceImg,
    tags: ["React Js", "Redux", "JavaScript", "HTML", "JSX"],
    category: "web app",
    github: "https://github.com/Aditya-Chauhan-1/React-ecommerce-website-UI-",
    webapp: "https://react-ecommerce-website-ui.vercel.app/",
  },
  {
    id: 6,
    title: "QR Code Generator",
    date: "Full Stack",
    description:
      "Generate scannable QR codes from any text or URL, then download them for sharing. Built with a clean interface and deployed as a live web service.",
    image: qrImg,
    tags: ["EJS", "CSS", "JavaScript", "Node.js"],
    category: "web app",
    github: "https://github.com/Aditya-Chauhan-1/QRCode_Generator",
    webapp: "https://qrcode-generator-x3cc.onrender.com/",
  },
  {
    id: 7,
    title: "To-Do List",
    date: "Frontend",
    description:
      "A productivity app to add, edit, complete, and delete daily tasks. Simple, fast, and focused on keeping personal and work routines organized.",
    image: todoImg,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web app",
    github: "https://github.com/Aditya-Chauhan-1/To-Do-List",
    webapp: "https://todolistchauhan.netlify.app/",
  },
];
