import { motion } from "framer-motion";

export default function AboutMe() {
  const sections = [
    {
      title: "Intereses y pasiones",
      text: "Me apasiona el desarrollo de software, especialmente en el ámbito web. Disfruto aprendiendo nuevas tecnologías y aplicándolas en proyectos creativos.",
    },
    {
      title: "Sobre mí",
      text: "Soy una persona curiosa, creativa y apasionada por la tecnología. Me gusta entender cómo funcionan las cosas y transformarlas en proyectos útiles o interesantes.",
    },
    {
      title: "Intereses",
      text: "Inteligencia artificial, desarrollo web, diseño de interfaces, y proyectos que mezclen arte con tecnología.",
    },
    {
      title: "Gustos",
      text: "Disfruto escuchar música electrónica y lo-fi, tomar café mientras programo y explorar nuevas herramientas que faciliten la creatividad.",
    },
    {
      title: "Fuera del código",
      text: "Me gusta jugar videojuegos, ver películas con buena fotografía y salir a caminar o manejar para despejar la mente.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 p-8 ">
      {sections.map((section, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-black/50 p-6 rounded-2xl backdrop-blur-md shadow-lg border border-cyan-500/30"
        >
          <h2 className="text-3xl font-semibold text-cyan-200 mb-2">
            {section.title}
          </h2>
          <p className="text-cyan-200/80 leading-relaxed">{section.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
