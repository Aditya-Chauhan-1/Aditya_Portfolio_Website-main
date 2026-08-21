export const Bio = {
  name: "Aditya Chauhan",
  roles: [
    "Full Stack Developer",
    "Web Developer",
    "Generative AI Developer",
    "Data Science Enthusiast",
    "UI/UX Designer",
    "IT Trainer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Aditya-Chauhan-1",
  resume:
    "https://drive.google.com/file/d/1v4WGmzfnapNKh5Z92VDoTF1WSCOjQuOZ/view",
  linkedin: "https://www.linkedin.com/in/aditya63/",
  // twitter: "https://twitter.com/RishavChanda",
  insta: "https://www.instagram.com/shyam_diwana6395",
  whatsapp: "916395756268" // Replace with your actual WhatsApp number (with country code, no + sign)
};

const icon = (pack, file = `${pack}-original.svg`) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${pack}/${file}`;

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image: icon("react"),
      },
      // {
      //   name: "Redux",
      //   image:
      //     "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      // },
      // {
      //   name: "Next Js",
      //   image:
      //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      // },
      // {
      //   name: "Angular Js",
      //   image:
      //     "https://camo.githubusercontent.com/8886130b3d8aba95dbdd7c4f9a41029606424cc06d1873c1ced87dd55a222fef/68747470733a2f2f616e67756c61722e696f2f6173736574732f696d616765732f6c6f676f732f616e67756c61722f616e67756c61722e737667",
      // },
      {
        name: "HTML",
        image: icon("html5"),
      },
      {
        name: "CSS",
        image: icon("css3"),
      },
      {
        name: "JavaScript",
        image: icon("javascript"),
      },
      {
        name: "Bootstrap",
        image: icon("bootstrap"),
      },
      {
        name: "Material UI",
        image: icon("materialui"),
      },
      // {
      //   name: "Flutter",
      //   image:
      //     "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
      // },
      {
        name: "Tailwind CSS",
        image: icon("tailwindcss"),
      },
      {
        name: "jQuery",
        image: icon("jquery"),
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: icon("nodejs"),
      },
      {
        name: "Express Js",
        image: icon("express"),
        darkLogo: true,
      },
      {
        name: "Python",
        image: icon("python"),
      },
      {
        name: "Flask",
        image: icon("flask"),
        darkLogo: true,
      },
      {
        name: "Django",
        image: icon("django", "django-plain.svg"),
        darkLogo: true,
      },
      {
        name: "MySQL",
        image: icon("mysql"),
      },
      {
        name: "PostgreSQL",
        image: icon("postgresql"),
      },
      {
        name: "MongoDB",
        image: icon("mongodb"),
      },
      {
        name: "Firebase",
        image: icon("firebase", "firebase-plain.svg"),
      },
    ],
  },
  // {
  //   title: "DevOps",
  //   skills: [
  //     {
  //       name: "AWS",
  //       image:
  //         "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
  //     },
  //     {
  //       name: "Google Cloud",
  //       image:
  //         "https://static-00.iconduck.com/assets.00/google-cloud-platform-logo-icon-2048x1824-pg4wzspq.png",
  //     },
  //     {
  //       name: "Docker",
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  //     },
  //     {
  //       name: "Jenkins",
  //       image:
  //         "https://toppng.com/uploads/preview/jenkins-logo-11609365847mufysaivph.png",
  //     },
  //     {
  //       name: "Nginx",
  //       image: "https://download.logo.wine/logo/Nginx/Nginx-Logo.wine.png",
  //     },
  //     {
  //       name: "Grafana",
  //       image:
  //         "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png",
  //     },
  //     {
  //       name: "Kubernetes",
  //       image:
  //         "https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png",
  //     },
  //     {
  //       name: "Prometheus",
  //       image:
  //         "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/1200px-Prometheus_software_logo.svg.png",
  //     },
  //   ],
  // },
  // {
  //   title: "Android",
  //   skills: [
  //     {
  //       name: "Java",
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  //     },
  //     {
  //       name: "Kotlin",
  //       image:
  //         "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  //     },
  //     {
  //       name: "Jetpack Compose",
  //       image:
  //         "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png",
  //     },
  //     {
  //       name: "XML",
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
  //     },
  //     {
  //       name: "Android Studio",
  //       image:
  //         "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
  //     },
  //   ],
  // },
  {
    title: "Data Science",
    groups: [
      {
        title: "Core",
        skills: [
          {
            name: "Python",
            image:
              icon("python"),
          },
          {
            name: "Pandas",
            image:
              icon("pandas"),
          },
          {
            name: "NumPy",
            image:
              icon("numpy"),
          },
          {
            name: "SciPy",
            image:
              "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/scipy.svg",
            darkLogo: true,
          },
          {
            name: "SQL",
            image:
              icon("mysql"),
          },
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
          {
            name: "Scikit-learn",
            image:
              icon("scikitlearn"),
          },
          {
            name: "TensorFlow",
            image:
              icon("tensorflow"),
          },
          {
            name: "Keras",
            image:
              icon("keras"),
          },
        ],
      },
      {
        title: "Visualization",
        skills: [
          {
            name: "Matplotlib",
            image:
              icon("matplotlib"),
          },
          {
            name: "Seaborn",
            image:
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='5' fill='%234C78A8'/%3E%3Cpath d='M5 16c2.2-4 4.4-6 7-6s4.8 2 7 6' fill='none' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='8' cy='9' r='1.4' fill='%23F58518'/%3E%3Ccircle cx='16' cy='8' r='1.4' fill='%2354A24B'/%3E%3C/svg%3E",
          },
          {
            name: "Plotly",
            image:
              icon("plotly"),
          },
        ],
      },
      {
        title: "Tools",
        skills: [
          {
            name: "Jupyter",
            image:
              icon("jupyter"),
          },
          {
            name: "Google Colab",
            image:
              icon("googlecolab"),
          },
          {
            name: "Streamlit",
            image:
              icon("streamlit"),
          },
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
            image:
              "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg",
            darkLogo: true,
          },
          {
            name: "Hugging Face",
            image:
              "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
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
            image:
              "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlegemini.svg",
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
      {
        name: "Git",
        image:
          icon("git"),
      },
      {
        name: "GitHub",
        image: icon("github"),
        darkLogo: true,
      },
      {
        name: "Netlify",
        image:
          icon("netlify"),
      },
      {
        name: "VS Code",
        image:
          icon("vscode"),
      },
      {
        name: "Postman",
        image:
          icon("postman"),
      },
      // {
      //   name: "Adobe XD",
      //   image:
      //     "https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667",
      // },
      {
        name: "Figma",
        image:
          icon("figma"),
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/v2/D560BAQFUY_4Bn_YmwQ/company-logo_200_200/company-logo_200_200/0/1726170894890/palmspire_technologies_logo?e=2147483647&v=beta&t=kbIrLwI0hzsgGoLAifvS2Al2Pa2Ul1aO2_w-hYFrD3c",
    role: "Software Developer",
    company: "Palmspire IT Solution Private Limited Fort MacLeod, Alberta, Canada",
    date: "2025 - Present",
    desc: "Developing and maintaining scalable web and Mobile applications using modern JavaScript frameworks. Collaborating with international teams to design and implement end-to-end solutions. Working closely with international clients to understand their business requirements and deliver high-quality software solutions.",
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
      "Hubspot CRM"
    ],
  },

  {
    id: 2,
    img: "https://media.licdn.com/dms/image/v2/C560BAQF5th2_4vAFkA/company-logo_200_200/company-logo_200_200/0/1630626661031/codingblocksindia_logo?e=2147483647&v=beta&t=B5ts0hZFiRmgEXYqUZ6BHueCK8YMEiA3KgOy-ghcKPc",
    role: "Technical Corporate Trainer/Coding Instructor",
    company: "Coding Blocks Private Limited, Delhi",
    date: "Jan 2025 - April 2025",
    desc: "Delivered hands-on training in Full Stack Web Development (MERN). Trained students and professionals on MongoDB, Express.js, React.js, and Node.js through real-world projects. Focused on backend API development, frontend integration, best coding practices, and deployment concepts to build industry-ready skills.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs",
      "Firebase",
      "Git & GitHub"
    ],
    // doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKAF48sUHkEkXSyk5ps32chBoi2FNz0yAgA&s",
    role: "FullStack Engineer Intern",
    company: "CETPA Infotech Pvt Ltd",
    date: "July 2024 - Dec 2024",
    desc: "Developed and optimized web applications by improving system performance and reducing load time. Built dynamic user interfaces using React.js and ensured smooth API integration with Axios. Migrated existing code to React for better maintainability and implemented Vite with Jest for efficient unit testing. Focused on debugging, enhancing UI responsiveness, and improving overall application stability.",
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
    // doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Screenshot%20from%202024-01-25%2022-38-31.png?alt=media&token=2785903f-1a4e-41f5-afd2-6adcfe56d058",
  },

  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5Xw5xuGO31B8YzGvBHl-UaKksxOLg2u1Kw&s",
    role: "Web Devlopment Intern",
    company: "Infotage Private Limited.",
    date: "Nov 2023 - Feb 2024",
    desc: "Motivated web developer with a strong foundation in front-end and back-end technologies including HTML, CSS, JavaScript, React.js, and Node.js.Proficient in delivering clear technical explanations, creating interactive learning experiences,and guiding students through practical coding challenges.",
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
    // doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1696514649120.jpeg?alt=media&token=e7f6757b-edfa-4138-a692-d6709eeef3e2",
  }
  
  // {
  //   id: 3,
  //   img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",
  //   role: "Fullstack Externship",
  //   company: "Flipr",
  //   date: "June 2023 - July 2023",
  //   desc: "Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program.",
  //   skills: [
  //     "ReactJS",
  //     "Redux",
  //     "NodeJs",
  //     "Material UI",
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "Docker",
  //     "AWS",
  //     "MongoDB",
  //   ],
  //   doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1691181448873.jpeg?alt=media&token=ee85eb8f-7247-43cd-9a1d-ce9f58ea62a6",
  // },
  // {
  //   id: 4,
  //   img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/gdsc.jpeg?alt=media&token=c162329c-efaa-4be8-a173-8d3f4c48ea70",
  //   role: "Android Developer",
  //   company: "DSC KIIT",
  //   date: "Nov2021 - Present",
  //   desc: "As an Android developer at the Google Developers Student Club (GDCS), I have had the opportunity to work on exciting projects and collaborate with talented developers who share my passion for technology. Through my involvement with GDCS, I have also had the opportunity to host and participate in numerous events, including hackathons, study jams, and workshops.",
  //   skills: [
  //     "Leadership",
  //     "Mobile Application Development",
  //     "Kotlin",
  //     "XML",
  //     "Figma",
  //   ],
  // },
  // {
  //   id: 5,
  //   img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/girlScript.jpeg?alt=media&token=e656a621-cf3c-4230-bf0f-e74b4cec6035",
  //   role: "Open Source Contributor ",
  //   company: "GirlScript Summer of Code",
  //   date: "May 2023 - Present",
  //   desc: "Contributed to different open-source projects and learn from industry experts",
  // },
];

export const education = [
  {
    id: 0,
    img: "https://www.allschoolscolleges.com/partner-colleges/mit.jpg",
    school: "Moradabad Institute of Technology, affiliated to AKTU",
    date: "Oct 2021 - Sep 2024",
    grade: "7.57 CGPA",
    desc: "I completed my Bachelor's degree in Computer Science and Engineering from Moradabad Institute of Technology under AKTU. My coursework included Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. Additionally, I worked on various projects, including a React-based E-commerce website and a MERN stack project.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://images.shiksha.com/mediadata/images/1629648951php0MJG9T.jpeg",
    school: "IFTM University Moradabad",
    date: "Oct 2019 - Sep 2021",
    grade: "8.98 CGPA",
    desc: "I completed my Diploma in Computer Science and Engineering from IFTM University Moradabad. My coursework included Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. Additionally, I worked on various projects, including a Frontend Project.",
    degree: "Polytechnic Diploma - Diploma, Computer Science and Engineering",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXReWrYSezsmhEU0002l8P_HdoLklQKs6_tA&s",
    school: "Narayan Inter College, Amroha",
    date: "Apr 2017 - Apr 2019",
    grade: "75.2%",
    desc: "I completed my class 12 education at Narayan Inter College, Amroha U.P Board, with a Science stream, focusing on Mathematics, Physics, Chemistry.",
    degree: "(XII)",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXReWrYSezsmhEU0002l8P_HdoLklQKs6_tA&s",
    school: "Narayan Inter College, Amroha",
    date: "Apr 2015 - Apr 2017",
    grade: "83.67%",
    desc: "I completed my class 10 education at Narayan Inter College, Amroha U.P Board, studying core subjects including Science, Mathematics.",
    degree: "ICSC(X)",
  },
];

export const projects = [
  {
    id: 11,
    title: "Weather Application",
    // date: "Jan 2024 - Dec 2023",
    description:
      "The Weather Application is a dynamic and user-friendly web-based tool designed to provide real-time weather information for any global location. By entering the name of a city, users can instantly access current weather conditions including temperature, humidity, wind speed, atmospheric pressure, and general climate description (e.g., sunny, cloudy, rainy).",
    image:
      "https://github.com/Aditya6395/Weather-Application/assets/106430403/ba8e9e93-245c-439a-855f-b64fc0a5fa95",
    tags: [
      "HTML",
      "CSS",
      "JavaScirpt",
      "Bootstrap",
    ],
    category: "web app",
    github: "https://github.com/Aditya6395/Weather-Application",
    webapp: "https://weather-application-taupe-three.vercel.app/",
  },
  {
    id: 9,
    title: "To-Do-List",
    // date: "Jun 2023 - Jul 2023",
    description:
      "The To-Do List Application is a productivity-focused web application that allows users to efficiently manage their daily tasks. It enables users to add, edit, mark as completed, and delete tasks in a clean and intuitive interface. The application ensures better task organization and time management for users in their personal or professional routines.",
    image:
      "https://github.com/Aditya6395/To-Do-List/assets/106430403/7b082695-f795-4eef-bd56-e0d1db6241d6",
    tags: [
      "HTML",
      "CSS",
      "JavaScirpt",
    ],
    category: "web app",
    github: "https://github.com/Aditya6395/To-Do-List",
    webapp: "https://todolistchauhan.netlify.app/",
  },
  {
    id: 0,
    title: "QRCode Generator",
    // date: "Apr 2023 - May 2023",
    description:
      "The QR Code Generator is a modern web application that enables users to generate QR codes for any text or URL input. With a clean and interactive interface, the application dynamically creates scannable QR codes that can be downloaded and used for sharing information quickly and efficiently.",
    image:
      "https://github.com/user-attachments/assets/75f8efc6-ad54-4a8b-8a52-4d27f708f1ab",
    tags: ["EJS", "CSS", "JavaScirpt", "Dockerfile"],
    category: "web app",
    github: "https://github.com/Aditya6395/QRCode_Generator",
    webapp: "https://qrcode-generator-x3cc.onrender.com/",
    // member: [
    //   {
    //     name: "Rishav Chanda",
    //     img: "https://avatars.githubusercontent.com/u/64485885?v=4",
    //     linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
    //     github: "https://github.com/rishavchanda/",
    //   },
    //   {
    //     name: "Upasana Chaudhuri",
    //     img: "https://avatars.githubusercontent.com/u/100614635?v=4",
    //     linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
    //     github: "https://github.com/upasana0710",
    //   },
    // ],
  },
  {
    id: 1,
    title: "React Ecommerce UI",
    // date: "Oct 2022 - Jan 2023",
    description:
      "The E-commerce UI is a modern, responsive web interface built using React.js that simulates the front-end of an online shopping platform. It is designed with user-centric features such as product browsing, category filtering, a shopping cart system, and a smooth, interactive user experience.",
    image:
      "https://github.com/user-attachments/assets/05a47c75-51fd-4279-809b-f77fc1abc493",
    tags: [
      "React Js",
      "Redux",
      "JavaScirpt",
      "HTML",
      "JSX",
    ],
    category: "web app",
    github: "https://github.com/Aditya6395/React-ecommerce-website-UI-",
    webapp: "https://react-ecommerce-website-ui.vercel.app/",
  },


  {
    id: 5,
    title: "Immigration Service Website",
    // date: "Oct 2022 - Jan 2023",
    description:
      "The RG Global Immigration Service Website is a modern, responsive web application developed using React.js, designed to provide a professional online presence for an immigration consultancy service.",
    image:
      "https://private-user-images.githubusercontent.com/106430403/546643808-f03f31a9-bbac-41a8-9f1a-cf77e60c5d65.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzA0ODg2MTEsIm5iZiI6MTc3MDQ4ODMxMSwicGF0aCI6Ii8xMDY0MzA0MDMvNTQ2NjQzODA4LWYwM2YzMWE5LWJiYWMtNDFhOC05ZjFhLWNmNzdlNjBjNWQ2NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIwN1QxODE4MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02N2M5OGQ2OGNlY2QxYmM4MGFlMDdjOTYyYWVmY2MyNGFjYTYwMjA3OWI4ZmVkZGJmOGE2ZTYyMzM4ZTY3NTU5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.4oMq1SG83KlJXYut-abr4KLE9VBWXowAlkcTszI9a8Y",
    tags: [
      "HTML",
      "CSS",
      "JavaScirpt",
      "React Js",
      "Tailwind CSS",
    ],
    category: "web app",
    github: "https://github.com/Aditya6395/Client_Project",
    webapp: "https://global-immigration-serv.vercel.app/",
  },
  // {
  //   id: 2,
  //   title: "Brain Tumor Detection",
  //   date: "Jan 2023 - Mar 2023",
  //   description:
  //     "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
  //   image:
  //     "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
  //   tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
  //   category: "machine learning",
  //   github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
  //   webapp: "https://brain-tumor.netlify.app/",
  //   member: [
  //     {
  //       name: "Rishav Chanda",
  //       img: "https://avatars.githubusercontent.com/u/64485885?v=4",
  //       linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
  //       github: "https://github.com/rishavchanda/",
  //     },
  //     {
  //       name: "Upasana Chaudhuri",
  //       img: "https://avatars.githubusercontent.com/u/100614635?v=4",
  //       linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
  //       github: "https://github.com/upasana0710",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Buckoid",
  //   date: "Dec 2021 - Apr 2022",
  //   description:
  //     "App Is Currently In Playstore 100+ Downloads. This Project proposes an “Expense Tracking App”. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",
  //   image:
  //     "https://camo.githubusercontent.com/3ad28aa710d18525f1fc87de056ed53c706d09979589bfd5a773df36653bad38/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f67696e2d65613565322e61707073706f742e636f6d2f6f2f4255434b4f49442532302831292e706e673f616c743d6d6564696126746f6b656e3d32653735376235372d323964372d346263612d613562322d653164346538313432373435",
  //   tags: ["Kotlin", "MVVM", "Room Database", "Google Drive Cloud API"],
  //   category: "android app",
  //   github: "https://github.com/rishavchanda/Buckoid-Android-App",
  //   webapp: "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
  // },
  // {
  //   id: 10,
  //   title: "Job Finding App",
  //   date: "Jun 2023 - Jul 2023",
  //   description:
  //     "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
  //   image:
  //     "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
  //   tags: ["React Native", "JavaScript", "Axios"],
  //   category: "android app",
  //   github: "https://github.com/rishavchanda/Job-finder-App",
  //   webapp: "https://github.com/rishavchanda/Job-finder-App",
  // },
  // {
  //   id: 4,
  //   title: "Whatsapp Clone",
  //   date: "Jul 2021",
  //   description:
  //     "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
  //   image:
  //     "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",
  //   tags: ["React Js", "Firebase", "Firestore", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Whatsapp-Clone-React-Js",
  //   webapp: "https://whatsapp-clone-rishav.web.app",
  // },
  // {
  //   id: 5,
  //   title: "Todo Web App",
  //   date: "Jun 2021",
  //   description:
  //     " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
  //   image:
  //     "https://camo.githubusercontent.com/84ac6ab6f378348ef28d8184062b7e9e3511a1252ae3966eaa49e8e998f732a7/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
  //   tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Todo-Web-App",
  //   webapp: "https://rishav-react-todo.netlify.app/",
  // },
  // {
  //   id: 6,
  //   title: "Breaking Bad",
  //   date: "Jun 2021",
  //   description:
  //     "A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",
  //   image:
  //     "https://camo.githubusercontent.com/937774368308a82419f53dd6eeb4a8675780e119636488b4e3cfe5d34859a72a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",
  //   tags: ["React Js", "API", "Axios", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Breaking-Bad",
  //   webapp: "https://breaking-bad-webapp.netlify.app",
  // },
  // {
  //   id: 7,
  //   title: "Quiz App",
  //   date: "Dec 2020 - Jan 2021",
  //   description:
  //     "A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",
  //   image:
  //     "https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",
  //   tags: ["Java", "Android Studio", "Firebase", "Google Auth"],
  //   category: "android app",
  //   github: "https://github.com/rishavchanda/Quiz-Earn",
  //   webapp: "https://github.com/rishavchanda/Quiz-Earn",
  // },
  // {
  //   id: 8,
  //   title: "Face Recognition",
  //   date: "Jan 2021",
  //   description:
  //     "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
  //   image:
  //     "https://dontrepeatyourself.org/media/face-recognition-with-python-dlib-and-deep-learning_cezKZBj.png",
  //   tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
  //   category: "machine learning",
  //   github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  //   webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  // },
];

export const certificates = [
  {
    id: 0,
    title: "Certificate 1",
    description: "Add your certificate description here",
    image: "", // Add image URL here
  },
  {
    id: 1,
    title: "Certificate 2",
    description: "Add your certificate description here",
    image: "", // Add image URL here
  },
  {
    id: 2,
    title: "Certificate 3",
    description: "Add your certificate description here",
    image: "", // Add image URL here
  },
  {
    id: 3,
    title: "Certificate 4",
    description: "Add your certificate description here",
    image: "", // Add image URL here
  },
  {
    id: 4,
    title: "Certificate 5",
    description: "Add your certificate description here",
    image: "", // Add image URL here
  },
];
