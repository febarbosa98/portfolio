import { IoLogoJavascript,   } from "react-icons/io";
import { SiTypescript ,   } from "react-icons/si";
import { FaFigma, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function Sobre(){
    return(
        <section id="sobre" className="section container">
            <h2 className="title glow-border">Sobre mim</h2>
            <p className="mb-4">Olá! Sou o Fernando Barbosa, tenho 27 anos e estou em transição de carreira para a área de Desenvolvimento Web. Atualmente curso Análise e Desenvolvimento de Sistemas na UNINOVE e me especializo em JavaScript, HTML, CSS, TypeScript, React e Next.js, com foco na criação de interfaces modernas, responsivas e com excelente experiência para o usuário.</p>
            <p className="mb-4">Tenho uma rotina intensa de estudos práticos, desenvolvimento de projetos pessoais e cursos complementares, como a formação Full Stack JavaScript pela OneBit Code. Ao longo dessa jornada, venho aplicando conceitos essenciais como versionamento com Git, consumo de APIs REST, componentização com React, manipulação de DOM e estilização com CSS moderno (Flexbox, Grid e responsividade). Também busco constantemente evoluir em boas práticas de código, organização, performance e usabilidade.</p>
            <p className="mb-4">Meu foco está em desenvolver aplicações bem estruturadas, com código limpo e escalável, sempre priorizando a experiência do usuário e a qualidade da interface. Gosto de transformar ideias em soluções reais, construindo projetos que vão além do visual e entregam valor de verdade.</p>
            
            <p className="mb-4">Antes de migrar para a tecnologia, tive uma experiência profissional que contribuiu para o desenvolvimento de habilidades como responsabilidade, organização, trabalho em equipe e resolução de problemas competências que hoje aplico diretamente no meu dia a dia como desenvolvedor.</p>

            <p>Hoje, minha maior motivação está em transformar ideias em interfaces funcionais, acessíveis e bem construídas, contribuindo com projetos que impactem positivamente a vida das pessoas. Estou em busca da minha primeira oportunidade como Desenvolvedor Front-End, pronto para colaborar com times engajados, aprender continuamente e crescer na área de tecnologia.</p>


            <div className="mt-12">

                <h1 className="title glow-border">Ferramentas & Tecnologias</h1>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

    <div className="skill "><IoLogoJavascript size={70} />
<span className="mt-3">JavaScript</span>    
</div>
    <div className="skill "><SiTypescript size={70}  />
<span className="mt-3">TypeScript</span></div>
    <div className="skill "><FaReact size={70} />
<span className="mt-3">React</span></div>
    <div className="skill "><RiNextjsFill size={70}  />
<span className="mt-3">Next.js</span></div>
    <div className="skill "><FaHtml5 size={70}  />
<span className="mt-3">HTML</span></div>
    <div className="skill "><FaFigma size={70} />
<span className="mt-3">Figma</span></div>
    <div className="skill "><RiTailwindCssFill size={70}    />
<span className="mt-3">Tailwind CSS</span></div>
    <div className="skill "><FaNodeJs size={70}   />
<span className="mt-3">Node.js</span></div>
    <div className="skill "><FaNodeJs size={70}   />
<span className="mt-3">Node.js</span></div>
    <div className="skill "><FaNodeJs size={70}   />
<span className="mt-3">Node.js</span></div>
  </div>
            </div>
        </section>
    )
}


