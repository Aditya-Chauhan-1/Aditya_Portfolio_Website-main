export const SITE_URL = "https://adityasir.in";

export const seo = {
  name: "Aditya Chauhan",
  alternateName: "Aditya Sir",
  title:
    "Aditya Chauhan | Aditya Sir — Software Engineer, Corporate Trainer, Data Scientist & AI Trainer",
  description:
    "Aditya Chauhan (Aditya Sir) is a Software Engineer, Technical Corporate Trainer, Data Scientist, and AI Trainer. Portfolio of MERN, Data Science, and Generative AI projects, corporate training, and contact.",
  jobTitle: "Software Engineer, Technical Corporate Trainer & Data Scientist",
  keywords:
    "Aditya Chauhan, Aditya Sir, Aditya Chauhan Software Engineer, Aditya Sir Trainer, Technical Corporate Trainer, Data Scientist, AI Trainer, Generative AI Trainer, Full Stack Developer, MERN Stack, React, Node.js, Python, Corporate IT Trainer, Amroha, India",
  image: `${SITE_URL}/og-image.jpg`,
  photo: `${SITE_URL}/seo/aditya-chauhan.jpg`,
  email: "aadityachauhan6395@gmail.com",
  phone: "+91-6395756268",
  location: "Amroha, Uttar Pradesh, India",
  sameAs: [
    "https://github.com/Aditya-Chauhan-1",
    "https://www.linkedin.com/in/aditya63/",
    "https://www.instagram.com/shyam_diwana6395",
  ],
};

export const pageSeo = {
  "/": {
    title: seo.title,
    description: seo.description,
    canonical: `${SITE_URL}/`,
  },
  "/achievements": {
    title:
      "Achievements | Aditya Chauhan — Gold Medalist, Software Engineer & Trainer",
    description:
      "Academic and professional achievements of Aditya Chauhan (Aditya Sir), including the IFTM University Gold Medal, software engineering work, and corporate training.",
    canonical: `${SITE_URL}/achievements`,
  },
};
