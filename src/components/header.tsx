import React, {useState , useEffect} from "react";

interface HeaderProps {
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection: initialSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState(initialSection);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const navitems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isDarkMode){
            document.documentElement.classList.add('dark');
        }else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const scrollToSection = (sectionid: string) => {
        const section = document.getElementById(sectionid);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`} >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

                {/* Logo */}
             <div className="cursor-pointer group"
                onClick={() => scrollToSection('home')}
            >
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                &lt;PR/&gt;
                </span>
                <span className="ml-2 text-gray-700 dark:text-gray-300 font-semibold">
                Portfolio
                </span>
          </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navitems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href.substring(1))}
                            className={`text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${
                                activeSection === item.href.substring(1) ? 'text-blue-500 dark:text-blue-400 font-semibold' : ''
                            }`}
                        >
                            {item.name}
                        </button>
                    ))}
                    <button
                        onClick={toggleDarkMode}
                        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>              {/* Mobile Menu */}     
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg">
                        <div className="flex flex-col items-center py-4 space-y-4">
                            {navitems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        scrollToSection(item.href.substring(1));
                                        setIsMenuOpen(false);
                                    }}
                                    className={`text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${
                                        activeSection === item.href.substring(1) ? 'text-blue-500 dark:text-blue-400 font-semibold' : ''
                                    }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                            <button
                                onClick={toggleDarkMode}
                                className="mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                            >
                                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </nav>
      </header>

    );
};

export default Header;
