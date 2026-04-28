import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { projetos } from "../data/projetos";
import {
  cardStagger,
  fadeLeft,
  fadeUp,
  hoverLift,
  scaleIn,
  staggerContainer,
  tapScale,
  viewport,
} from "../lib/motion";

const featuredProject = projetos.find((project) => project.featured);
const regularProjects = projetos.filter((project) => !project.featured);
const carouselEase = [0.22, 1, 0.36, 1] as const;
const easeOut = "easeOut" as const;

function chunkArray<T>(items: T[], size: number) {
  const chunks: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

function getItemsPerPage() {
  if (typeof window === "undefined") {
    return 6;
  }

  return window.innerWidth < 768 ? 1 : 6;
}

export default function Projetos() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      const nextItemsPerPage = getItemsPerPage();
      const nextPageCount = Math.max(
        Math.ceil(regularProjects.length / nextItemsPerPage),
        1,
      );

      setItemsPerPage((current) =>
        current === nextItemsPerPage ? current : nextItemsPerPage,
      );
      setCurrentPage((page) => Math.min(page, nextPageCount - 1));
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pages = useMemo(
    () => chunkArray(regularProjects, itemsPerPage),
    [itemsPerPage],
  );

  const canGoBack = currentPage > 0;
  const canGoForward = currentPage < pages.length - 1;

  return (
    <section id="projetos" className="section container">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h2 className="title glow-border" variants={fadeLeft}>
          Meus Projetos
        </motion.h2>
        <motion.p className="subtitle mb-6" variants={fadeLeft}>
          Aqui estao alguns dos meus projetos mais recentes.
        </motion.p>
      </motion.div>

      {featuredProject && (
        <motion.div
          className="mb-6"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-2xl font-bold mb-3">Projeto em Destaque</h2>
          <div className="grid items-center gap-6 rounded-2xl bg-zinc-900 p-6 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="mb-2 text-2xl font-bold">{featuredProject.title}</h3>

              <p className="mb-4 text-zinc-400">{featuredProject.description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {featuredProject.techs.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                <motion.a
                  href={featuredProject.urlSite}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary flex! items-center gap-2"
                  whileHover={hoverLift}
                  whileTap={tapScale}
                >
                  <RiPagesLine /> Ver projeto
                </motion.a>
                <motion.a
                  href={featuredProject.urlGit}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline flex! items-center gap-2"
                  whileHover={hoverLift}
                  whileTap={tapScale}
                >
                  <FaGithub /> GitHub
                </motion.a>
              </div>
            </div>

            <motion.img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="rounded-xl order-1 md:order-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25, ease: easeOut }}
            />
          </div>
        </motion.div>
      )}

      <div className="relative">
        <motion.div
          className="overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${currentPage * 100}%` }}
            transition={{ duration: 0.55, ease: carouselEase }}
          >
            {pages.map((page, pageIndex) => (
              <motion.div
                key={pageIndex}
                className="grid min-w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={cardStagger}
                initial="hidden"
                animate={currentPage === pageIndex ? "visible" : "hidden"}
              >
                {page.map((projeto) => (
                  <motion.article
                    key={projeto.title}
                    className="rounded-2xl bg-zinc-900 p-4 flex flex-col justify-between"
                    variants={fadeUp}
                    whileHover={hoverLift}
                  >
                    <div>
                      <img
                        src={projeto.image}
                        alt={projeto.title}
                        className="mb-3 rounded-lg max-h-46 w-full object-cover"
                      />

                      <h3 className="text-lg mb-1 font-semibold">{projeto.title}</h3>

                      <p className="mb-4 text-sm text-zinc-400">{projeto.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {projeto.techs.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex mt-4 gap-3 flex-wrap">
                      <motion.a
                        href={projeto.urlSite}
                        target="_blank"
                        rel="noreferrer"
                        className="btnCard btn-primary"
                        whileHover={hoverLift}
                        whileTap={tapScale}
                      >
                        <RiPagesLine /> Ver projeto
                      </motion.a>
                      <motion.a
                        href={projeto.urlGit}
                        target="_blank"
                        rel="noreferrer"
                        className="btnCard btn-outline"
                        whileHover={hoverLift}
                        whileTap={tapScale}
                      >
                        <FaGithub /> GitHub
                      </motion.a>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        <motion.button
          type="button"
          onClick={() => setCurrentPage((page) => Math.max(page - 1, 0))}
          disabled={!canGoBack}
          className="flex h-11 w-11 -translate-x-5 -translate-y-4 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/90 text-xl text-white transition hover:border-green-500 hover:text-green-400 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Pagina anterior"
          whileTap={tapScale}
        >
          {"<"}
        </motion.button>

        {pages.map((_, index) => (
          <motion.button
            key={index}
            type="button"
            onClick={() => setCurrentPage(index)}
            className={`h-3 w-3 rounded-full transition ${
              currentPage === index ? "scale-125 bg-green-500" : "bg-zinc-600"
            }`}
            aria-label={`Ir para pagina ${index + 1}`}
            whileHover={{ scale: 1.15 }}
            whileTap={tapScale}
          />
        ))}

        <motion.button
          type="button"
          onClick={() =>
            setCurrentPage((page) => Math.min(page + 1, pages.length - 1))
          }
          disabled={!canGoForward}
          className="flex h-11 w-11 translate-x-5 -translate-y-4 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/90 text-xl text-white transition hover:border-green-500 hover:text-green-400 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Proxima pagina"
          whileTap={tapScale}
        >
          {">"}
        </motion.button>
      </div>
    </section>
  );
}
