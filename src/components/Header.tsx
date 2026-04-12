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
    const scrollToSection = (sectionid: string) => {
        const section = document.getElementById(sectionid);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? ' dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}>
        <nav className="mx-auto px-4 lg:px-8 flex items-center justify-between h-20 bg-linear-to-r from-black via-green-950 to-black">

          {/* Logo */}
          <div
            className="cursor-pointer text-emerald-900 font-semibold text-3xl hover:text-emerald-500 transition-colors "
            onClick={() => scrollToSection('home')}
          >
            ~Karanis
          </div>

         {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-20">
            {navitems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`group relative font-bold  dark:text-green-700 text-xl transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-green-800 dark:text-green-300'
                    : 'hover:text-green-800 dark:hover:text-green-300'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href.substring(1))
                  setActiveSection(item.href.substring(1))
                }}
              >
               
                <span className="inline-block transition-transform duration-300 group-hover:scale-105">
                  {item.name}
                </span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-green-600 to-emerald-500 dark:from-green-500 dark:to-emerald-400 transition-transform duration-300 origin-left ${
                  activeSection === item.href.substring(1)
                    ? ''
                    : 'scale-x-0 group-hover:scale-x-100'
                }`} />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-green-500/20 dark:bg-green-400/20 -z-10 rounded-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition-colors"
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
            </div>
          </div>
        )}
      </header>
  );
};

export default Header;
