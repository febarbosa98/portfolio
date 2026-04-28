import { useEffect, useRef, useState } from "react";
import { projetos } from "../data/projetos";
import { FaGithub } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { motion, useInView } from "motion/react"

function chunkArray<T>(array: T[], size: number) {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}






export default function Projetos() {
  const [currentPage, setCurrentPage] = useState(0);
  const featured = projetos.find((p) => p.featured);
  const normalProjects = projetos.filter((p) => !p.featured);
  // const pages = chunkArray(normalProjects, 6);
  const canGoBack = currentPage > 0;
  
  const getItemsPerPage = () => {
    if (window.innerWidth < 768) return 1; // mobile
    return 6; // desktop
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const pages = chunkArray(normalProjects, itemsPerPage);
  const canGoForward = currentPage < pages.length - 1;


  const ref = useRef(null)
  const cardRef = useRef(null)
  const isInView = useInView(ref)
  const isInViewCard = useInView(cardRef)

  console.log("isInView", isInView)
  console.log("isInViewCard", isInViewCard)

  return (
    <section id="projetos" className="section container">
      <motion.div
      ref={ref}
      
       initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.6, delay: 0.2 }}>

      <h2 className="title glow-border">Meus Projetos</h2>
      <p className="subtitle mb-6">Aqui estao alguns dos meus projetos mais recentes.</p>
      </motion.div>

      {featured && (
        <motion.div className="mb-6"
        ref={ref}
      
       initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h2 className="text-2xl font-bold mb-3">Projeto em Destaque</h2>
          <div className="grid items-center gap-6 rounded-2xl bg-zinc-900 p-6 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="mb-2 text-2xl font-bold">{featured.title}</h3>

              <p className="mb-4 text-zinc-400">{featured.description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {featured.techs.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={featured.urlSite} target="_blank" rel="noreferrer" className="btn btn-primary  flex! items-center gap-2">
                <RiPagesLine />  Ver projeto
                </a>
                <a href={featured.urlGit} target="_blank" rel="noreferrer" className="btn btn-outline flex! items-center gap-2">
                 <FaGithub /> GitHub
                </a>
              </div>
            </div>

            <img src={featured.image} alt={featured.title} className="rounded-xl order-1 md:order-2 " />
          </div>
        </motion.div>
      )}

      <div className="relative">
        {/* <button
          type="button"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={!canGoBack}
          className="absolute hidden -left-3 top-1/2 z-10 md:flex h-11 w-11 -translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/90 text-xl text-white transition hover:border-green-500 hover:text-green-400 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Pagina anterior"
        >
          {"<"}
        </button> */}

        <motion.div className="overflow-hidden"
        ref={cardRef}
      
       initial={{ opacity: 0, y: 100 }} animate={isInViewCard ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {pages.map((page, index) => (
              <div key={index} className="grid min-w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {page.map((projeto) => (
                  <div
                    key={projeto.title}
                    className="rounded-2xl bg-zinc-900 p-4 transition hover:scale-[1.02] flex flex-col  justify-between"
                  >
                    <div>

                    <img src={projeto.image} alt={projeto.title} className="mb-3 rounded-lg max-h-46 w-full" />

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
                      <div className="flex mt-4 gap-3">
                <a href={projeto.urlSite} target="_blank" rel="noreferrer" className="btnCard btn-primary">
                  <RiPagesLine /> Ver projeto
                </a>
                <a href={projeto.urlGit} target="_blank" rel="noreferrer" className="btnCard btn-outline">
                  <FaGithub /> GitHub
                </a>
              </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* <button
          type="button"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1))}
          disabled={!canGoForward}
          className="absolute -right-3 top-1/2 z-10 hidden md:flex h-11 w-11 translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/90 text-xl text-white transition hover:border-green-500 hover:text-green-400 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Proxima pagina"
        >
          {">"}
        </button> */}
      </div>

      <div className="mt-6 flex justify-center  gap-2">
         <button
          type="button"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={!canGoBack}
          className="flex  h-11 w-11  -translate-x-5 -translate-y-4 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/90 text-xl text-white transition hover:border-green-500 hover:text-green-400 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Pagina anterior"
        >
          {"<"}
        </button>
        {pages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentPage(index)}
            className={`h-3 w-3 rounded-full transition ${
              currentPage === index ? "scale-125 bg-green-500" : "bg-zinc-600"
            }`}
            aria-label={`Ir para pagina ${index + 1}`}
          />
        ))}

        <button
          type="button"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1))}
          disabled={!canGoForward}
          className="flex  h-11 w-11  translate-x-5 -translate-y-4 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/90 text-xl text-white transition hover:border-green-500 hover:text-green-400 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Proxima pagina"
        >
          {">"}
        </button>
      </div>
    </section>
  );
}
