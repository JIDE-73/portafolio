import CV from "@/assets/cv.jpg";
import cube from "@/assets/cube.gif";
import Death from "@/assets/death.gif";
import Human from "@/assets/Const.gif";
import Cards from "@/commonUI/cards";
import Card from "@/commonUI/card";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const backgrounds = [cube, Death, Human];

function App() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col justify-center items-center text-cyan-300 overflow-hidden">
      {/* Fondo GIF */}
      <AnimatePresence>
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 bg-center bg-no-repeat bg-black"
          style={{
            backgroundImage: `url(${backgrounds[currentBg]})`,
            backgroundSize: "50%",
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/0" />

      {/* Contenedor principal centrado horizontalmente */}
      <div className="w-screen flex justify-center relative z-10">
        <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-10">
          {/* Hero */}
          <section className="flex flex-col items-center justify-center text-center gap-6 p-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold tracking-tight"
            >
              Leonardo Sebastián Jiménez Delgado
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl text-muted-foreground font-medium"
            >
              Software Developer · Full Stack
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <img
                src={CV}
                alt="Leonardo Sebastián Jiménez Delgado"
                className="w-44 h-60 rounded-2xl shadow-lg border border-border object-cover"
              />
            </motion.div>
          </section>

          {/* Contenido extra */}
          <div className="flex flex-col gap-8 items-center w-full max-w-4xl">
            <Cards />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
