export default function Navbar() {
    return (
        <nav className="w-full py-4 px-8 flex items-center justify-between bg-transparent fixed top-0 left-0 z-50">
            <div className="text-2xl font-bold">
                <a href="#home" className="text-white">
                    Fernando Barbosa
                </a>
            </div> 
            <div className="hidden md:flex gap-8">
                <a href="#home" className="text-white hover:text-gray-300 transition-colors">
                    Home
                </a>
                <a href="#projetos" className="text-white hover:text-gray-300 transition-colors">
                    Projetos
                </a>
                <a href="#sobre" className="text-white hover:text-gray-300 transition-colors">
                    Sobre
                </a>
                <a href="#contato" className="text-white hover:text-gray-300 transition-colors">
                    Contato
                </a>
            </div>
        </nav>
    );
}