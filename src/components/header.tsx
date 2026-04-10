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
    <header className={`flex flex-row top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

          {/* Logo */}
          <div
            className="cursor-pointer font-semibold text-gray-700 dark:text-gray-300 text-lg"
            onClick={() => scrollToSection('home')}
          >
            ~Karanis
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navitems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors text-sm font-medium ${
                  activeSection === item.href.substring(1)
                    ? 'text-blue-500 dark:text-blue-400 font-bold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href.substring(1))
                  setActiveSection(item.href.substring(1))
                }}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-2 px-3 py-1.5 rounded-full text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex flex-col items-center gap-4 py-6 px-4">
              {navitems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-500 dark:text-blue-400 font-bold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href.substring(1))
                    setActiveSection(item.href.substring(1))
                    setIsMenuOpen(false)
                  }}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="mt-2 px-3 py-1.5 rounded-full text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {isDarkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </div>
        )}
      </header>
  );
};

export default Header;
