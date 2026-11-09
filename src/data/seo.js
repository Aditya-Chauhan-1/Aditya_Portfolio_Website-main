export const SITE_URL = "https://adityasir.in";

export const seo = {
  name: "Aditya Chauhan Sir",
  title: "Aditya Chauhan Sir | Data Science Specialist & Software Engineer",
  description:
    "Meet Aditya Chauhan Sir, a Data Science Specialist and Software Engineer in Amroha, India. Explore his AI and corporate training, projects, achievements, and skills.",
  jobTitle:
    "Data Science Specialist, Software Engineer & Technical Corporate Trainer",
  keywords:
    "Aditya Chauhan Sir, Aditya Chauhan, Data Science Specialist, Software Engineer, Data Science Specialist and Software Engineer, Data Scientist, Technical Corporate Trainer, AI Trainer, Generative AI Trainer, Full Stack Developer, MERN Stack Developer, React, Node.js, Python, Corporate IT Trainer, Amroha, Uttar Pradesh, India",
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
