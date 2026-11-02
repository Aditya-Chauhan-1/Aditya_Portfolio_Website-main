export const SITE_URL = "https://www.adityasir.in";

export const seo = {
  name: "Aditya Chauhan",
  alternateName: "Aditya Sir",
  title: "Aditya Chauhan | Software Developer & Technical Trainer",
  description:
    "Aditya Chauhan (Aditya Sir) is a MERN stack software developer, technical trainer, and AI & data science trainer. Explore his projects and experience.",
  jobTitle:
    "Software Developer, MERN Stack Developer, Technical Trainer, AI and Data Science Trainer",
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
    title: "Achievements | Aditya Chauhan",
    description:
      "Explore the academic achievements and honors of Aditya Chauhan, including his IFTM University Gold Medal.",
    canonical: `${SITE_URL}/achievements`,
  },
};
