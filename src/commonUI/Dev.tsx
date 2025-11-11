import { useState } from "react";
import { motion } from "framer-motion";

// 🧠 Imágenes (mantén tus rutas actuales)
import Py from "@/assets/python.png";
import Js from "@/assets/javascript.png";
import TS from "@/assets/typescript.png";
import CS from "@/assets/cs.png";
import ReactLogo from "@/assets/react.png";
import Ex from "@/assets/express-js.png";
import Node from "@/assets/nodejs.png";
import Pg from "@/assets/postgres.png";
import MS from "@/assets/mysql.png";
import Mongo from "@/assets/mongodb.png";
import SS from "@/assets/sql-server.png";
import Docker from "@/assets/docker.png";
import Git from "@/assets/git.png";
import GH from "@/assets/github.png";
import Linux from "@/assets/linux.png";
import Win from "@/assets/windows.png";

// 🧱 Tipado base
type LogoInfo = {
  src: string;
  name: string;
  description: string;
};

type Group = {
  category: string;
  items: LogoInfo[];
};

// 📦 Agrupación por categorías
const groups: Group[] = [
  {
    category: "Lenguajes",
    items: [
      {
        src: Py,
        name: "Python",
        description:
          "Lenguaje versátil y popular para backend, data science y automatización.",
      },
      {
        src: Js,
        name: "JavaScript",
        description:
          "Lenguaje principal para desarrollo web frontend y backend.",
      },
      {
        src: TS,
        name: "TypeScript",
        description: "Superset de JavaScript con tipado estático.",
      },
      {
        src: CS,
        name: "C#",
        description:
          "Lenguaje orientado a objetos usado en .NET y desarrollo de videojuegos.",
      },
    ],
  },
  {
    category: "Frameworks y Entornos",
    items: [
      {
        src: ReactLogo,
        name: "React",
        description:
          "Librería para construir interfaces de usuario interactivas.",
      },
      {
        src: Ex,
        name: "Express.js",
        description:
          "Framework minimalista para aplicaciones backend en Node.js.",
      },
      {
        src: Node,
        name: "Node.js",
        description: "Entorno de ejecución para JavaScript en el servidor.",
      },
    ],
  },
  {
    category: "Bases de Datos",
    items: [
      {
        src: Pg,
        name: "PostgreSQL",
        description: "Base de datos relacional avanzada y de código abierto.",
      },
      {
        src: MS,
        name: "MySQL",
        description: "Base de datos relacional ampliamente utilizada.",
      },
      {
        src: Mongo,
        name: "MongoDB",
        description: "Base de datos NoSQL orientada a documentos.",
      },
      {
        src: SS,
        name: "SQL Server",
        description: "Base de datos relacional de Microsoft.",
      },
    ],
  },
  {
    category: "Herramientas y Sistemas",
    items: [
      {
        src: Docker,
        name: "Docker",
        description: "Contenerización y despliegue de aplicaciones.",
      },
      {
        src: Git,
        name: "Git",
        description: "Control de versiones distribuido.",
      },
      {
        src: GH,
        name: "GitHub",
        description: "Colaboración y alojamiento de proyectos.",
      },
      {
        src: Linux,
        name: "Linux",
        description: "Sistema operativo de código abierto.",
      },
      {
        src: Win,
        name: "Windows",
        description: "Sistema operativo de Microsoft.",
      },
    ],
  },
];

// 🎴 Componente de tarjeta individual
function FlipCard({ logo }: { logo: LogoInfo }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34,211,238,0.3)" }}
      className="relative w-44 h-60 cursor-pointer perspective rounded-3xl"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Frente */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-5 rounded-3xl bg-cyan-500/20 border border-cyan-700/50 backdrop-blur-sm shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.img
            src={logo.src}
            alt={logo.name}
            className="w-20 h-20 object-contain drop-shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250 }}
          />
          <span className="mt-3 text-lg font-semibold text-cyan-200 text-center drop-shadow">
            {logo.name}
          </span>
        </div>

        {/* Reverso */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center p-5 rounded-3xl border border-cyan-700/50 shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(145deg, #012A3C, #003A52)",
          }}
        >
          <p className="text-sm text-cyan-200/90 text-center leading-relaxed">
            {logo.description}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// 🌌 Componente principal
export default function C_Card() {
  return (
    <div className="flex flex-col gap-16 p-10 rounded-3xl">
      {groups.map((group, i) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Título de categoría */}
          <h3 className="text-3xl font-bold text-cyan-300 mb-8 border-b border-cyan-700/50 pb-2 tracking-tight">
            {group.category}
          </h3>

          {/* Tarjetas */}
          <div className="flex flex-wrap justify-center gap-10">
            {group.items.map((logo) => (
              <FlipCard key={logo.name} logo={logo} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
