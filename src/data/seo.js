export const SITE_URL = "https://adityasir.in";

export const seo = {
  name: "Aditya Chauhan Sir",
  title: "Aditya Chauhan Sir | Software Engineer & Data Science Specialist",
  description:
    "Aditya Chauhan Sir is a Software Engineer, Technical Corporate Trainer, Data Scientist, and AI Trainer based in Amroha, Uttar Pradesh, India. Explore his work, projects, and training.",
  jobTitle: "Software Engineer, Technical Corporate Trainer & Data Scientist",
  keywords:
    "Aditya Chauhan Sir, Software Engineer, Technical Corporate Trainer, Data Scientist, AI Trainer, Generative AI Trainer, Full Stack Developer, MERN Stack, React, Node.js, Python, Corporate IT Trainer, Amroha, India",
  image: `${SITE_URL}/images/HeroImage.jpg`,
  photo: `${SITE_URL}/images/HeroImage.jpg`,
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
    title: "Achievements | Aditya Chauhan Sir",
    description:
      "Academic and professional achievements of Aditya Chauhan Sir, including the IFTM University Gold Medal, software engineering work, and corporate training.",
    canonical: `${SITE_URL}/achievements`,
  },
};
