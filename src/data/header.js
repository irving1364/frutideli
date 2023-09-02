import phoneIcon from "@/images/icon/phone-icon.png";
import logo1 from "@/images/resources/logoFruti.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Inicio",
    href: "/",
    subNavItems: [
      
    ],
  },
  {
    id: 2,
    name: "Producto",
    href: "",
    subNavItems: [
    ],
  },
  {
    id: 3,
    name: "Nosotros",
    href: "",
    subNavItems: [
      { id: 1, name: "Quienes Somos", href: "/services" },
      { id: 2, name: "Donde Nace Todo", href: "/mobile-application" },
      { id: 3, name: "Ecuador", href: "/digital-marketing" },
      { id: 4, name: "Feria", href: "/graphic-designing" },
    ],
  },
  {
    id: 4,
    name: "Servicios",
    href: "",
    subNavItems: [
    ],
  },
  {
    id: 5,
    name: "Exportacion",
    href: "",
    subNavItems: [
     ],
  },
  {
    id: 6,
    name: "Estadisticas",
    href: "",
    subNavItems: [],
  },

  {
    id: 6,
    name: "Trabaja Con Nosotros",
    href: "",
    subNavItems: [],
  },
];

const header = {
  logo1,
  logo2,
  phone: "92 666 888 0000",
  email: "info@frutideli.com",
  phoneIcon,
  navItems,
  socials: [
    "fab fa-twitter",
    "fab fa-facebook-square",
    "fab fa-pinterest-p",
    "fab fa-instagram",
  ],
};

export default header;
