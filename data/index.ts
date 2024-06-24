import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Je m'appelle Raphael, enchanté. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/Design sans titre (10).png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Je suis en France mais ouvert aux autres pays",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mes logiciels",
    description: "Je me forme chaques jours",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Webdesigner junior.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Next.js, Three.js, Framer Motion, Tailwind CSS. ",
    description: "Ce portfolio est crée grâce à",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Travaillons ensemble!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CJ Portfolio",
    des: "Portfolio de CJ photographe, vidéaste et motion designer.",
    img: "/cj.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/html.svg"],
    link: "https://cjvisuals-gallery-tawny.vercel.app/",
    
  },
  {
    id: 2,
    title: "Urban Heaven",
    des: "Your Ultimate Accommodation Experience in JBR  Elevate Your Stay in Dubai Vibrant Heartbeat!.",
    img: "/urb.jpg",
    iconLists: [ "/wp.svg"],
     link: "https://urbanheavenjbr.com/",
  },
  {
    id: 3,
    title: "PowerUp invest",
    des: "Comprends et formes toi sur les #crypto et le #trading pour devenir indépendant financièrement.",
    img: "/power.jpeg",
    iconLists: ["/wp.svg"],
    link: "https://powerup-invest.fr/",
  },
  {
    id: 4,
    title: "ESCLAMSBB",
    des: "Page sportif equipe NM2 basket",
    img: "/esc.png",
    iconLists: ["/wp.svg"],
    link: "https://esclamsbb.com/",
  },
];



export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend developpeur",
    desc: "Developpeur frontend formé a la WAB, puis en freelance et actuellement a l'irfa Apisup d'amiens.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Webdesigner",
    desc: "Alternance sur l'année 2023/2024 en tant que webdesigner j'ai renforcé mes compétences en Wordpress/Code et j'ai appris a utiliser la suite ADOBE.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rapha%C3%ABl-raguette-093258189/"
  },
  {
    id: 2,
    img: "/twit.svg",
     link: "https://www.instagram.com/le_r.dev/"
  },

];
