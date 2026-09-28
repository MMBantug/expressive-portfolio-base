import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactDrawer from "@/components/ContactDrawer";

const FloatingNav = ({ onWorkClick }: { onWorkClick?: () => void } = {}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [contactOpen, setContactOpen] = useState(false);

  const navItems = [
    { name: "Work", path: "/" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/" || currentPath === "/index" || currentPath === "/explore";
    return currentPath.startsWith(path);
  };

  return (
    <>
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 bg-muted/80 backdrop-blur-md rounded-full p-1.5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => {
                if (item.path === "/" && isActive("/")) {
                  e.preventDefault();
                  onWorkClick?.();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isActive(item.path)
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => setContactOpen(true)}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              contactOpen
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Contact
          </button>
        </div>
      </nav>

      <ContactDrawer open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default FloatingNav;
