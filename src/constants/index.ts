const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Coding Experience" },
  { value: 20, suffix: "+", label: "Personal Projects" },
  { value: 10, suffix: "+", label: "Android Apps Built" },
  { value: 5, suffix: "+", label: "Technologies Mastered" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png", name: "Company 1" },
  { imgPath: "/images/logos/company-logo-2.png", name: "Company 2" },
  { imgPath: "/images/logos/company-logo-3.png", name: "Company 3" },
  { imgPath: "/images/logos/company-logo-4.png", name: "Company 4" },
  { imgPath: "/images/logos/company-logo-5.png", name: "Company 5" },
  { imgPath: "/images/logos/company-logo-6.png", name: "Company 6" },
  { imgPath: "/images/logos/company-logo-7.png", name: "Company 7" },
  { imgPath: "/images/logos/company-logo-8.png", name: "Company 8" },
  { imgPath: "/images/logos/company-logo-9.png", name: "Company 9" },
  { imgPath: "/images/logos/company-logo-10.png", name: "Company 10" },
  { imgPath: "/images/logos/company-logo-11.png", name: "Company 11" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  { name: "React Developer", imgPath: "/images/logos/react.png" },
  { name: "Python Developer", imgPath: "/images/logos/python.svg" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "Interactive Developer", imgPath: "/images/logos/three.png" },
  { name: "Project Manager", imgPath: "/images/logos/git.svg" },
  { name: "logo", imgPath: "/images/logo.png" },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Nagi brought creativity and technical expertise to the team, significantly improving our frontend performance.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "2023 - Present",
    responsibilities: [
      "Created web UIs using React, Vite, Tailwind, and GSAP.",
      "Built responsive, animated portfolios and web apps.",
      "Integrated Three.js and 3D models using React Three Fiber.",
    ],
  },
  {
    review:
      "Nagi’s contributions to Android app development were outstanding. He turned creative ideas into smooth and functional apps.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Android Developer",
    date: "2022 - 2023",
    responsibilities: [
      "Developed Android apps like Loopify, PixelMuse, and Skid City.",
      "Implemented features such as media players, image grids, and game logic.",
      "Used Java, XML, SharedPreferences, and custom Views effectively.",
    ],
  },
  {
    review:
      "Nagi’s passion for Linux, customization, and system performance made him a key part of our tooling and developer experience.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Linux & CLI Enthusiast",
    date: "2021 - Present",
    responsibilities: [
      "Customized Arch Linux setup with Alacritty, powerlevel10k, and zsh.",
      "Wrote shell scripts and configured dotfiles for productivity.",
      "Created a minimal yet powerful dev environment.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Nagi turned our vision into a beautiful working product. His attention to detail and love for code shows in every line he writes.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Nagi was effortless. He handled every feature we wanted with precision, and his UX decisions improved our app experience.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Nagi’s portfolio speaks for itself. From custom animations to full-stack projects, he delivers with heart and talent.",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  { name: "insta", imgPath: "/images/insta.png", link: "https://www.instagram.com/your_username" },
  { name: "fb", imgPath: "/images/fb.png", link: "https://facebook.com/your_profile" },
  { name: "x", imgPath: "/images/x.png", link: "https://x.com/your_handle" },
  { name: "linkedin", imgPath: "/images/linkedin.png", link: "https://linkedin.com/in/your_profile" },
  { name: "github", imgPath: "/images/github.png", link: "https://github.com/Nagi75" }, // ✅ GitHub added
];

const socialLinks = {
  github: "https://github.com/Nagi75",
  linkedin: "https://linkedin.com/in/your_profile",
  twitter: "https://x.com/your_handle",
  instagram: "https://www.instagram.com/your_username",
  facebook: "https://facebook.com/your_profile",
};

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  socialLinks,
  techStackIcons,
  techStackImgs,
  navLinks,
};
