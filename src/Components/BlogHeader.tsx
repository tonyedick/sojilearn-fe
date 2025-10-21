import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/img/logo-dark.png";
import "../Components/ExternalCSS/main.css";

const categories = [
  { name: "All Posts", slug: "all" },
  { name: "Study Abroad", slug: "Study Abroad" },
  { name: "Scholarships", slug: "Scholarships" },
  { name: "Success Stories", slug: "Success Stories" },
  { name: "Visa and Immigration", slug: "Visa and Immigration" },
  { name: "Scholarships and Grants", slug: "Scholarships and Grants" },
  { name: "SOP", slug: "SOP" },
];

export default function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const currentCategory = searchParams.get("category") || "all";
  const isActive = (slug: string) => currentCategory === slug;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`text-dark tw-bg-white tw-text-gray-900 tw-sticky tw-top-0 tw-z-50 ${
        scrolled ? "tw-shadow-md" : ""
      }`}
    >
      <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-flex tw-items-center tw-justify-between tw-h-16">
          {/* Logo */}
          <Link to="/blog" className="tw-flex tw-items-center tw-space-x-2">
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src={logo}
                alt="Sojilearn Blog Logo"
                className="tw-h-8 tw-w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Categories */}
          <div className="tw-hidden md:tw-flex tw-items-center tw-space-x-6">
            {categories.map((category) => {
              const href =
                category.slug === "all"
                  ? "/blog"
                  : `/blog?category=${encodeURIComponent(category.slug)}`;
              return (
                <Link
                  key={category.slug}
                  to={href}
                  className={`tw-relative tw-px-2 tw-py-2 tw-text-md tw-font-medium tw-transition-all tw-duration-200 tw-whitespace-nowrap ${
                    isActive(category.slug)
                      ? "active tw-font-semibold"
                      : "tw-text-gray-600 hover:theme-bg"
                  }`}
                >
                  {category.name}
                  {isActive(category.slug) && (
                    <motion.div
                      className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-h-0.5 theme-bg"
                      layoutId="activeCategory"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:tw-hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="tw-p-2 tw-rounded-md tw-text-muted-foreground hover:tw-text-foreground tw-transition-colors"
            >
              <span className="tw-sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <div className="tw-px-2 tw-py-2 tw-border-4 tw-border-primary/10 tw-rounded-xl">
                  <X className="tw-w-6 tw-h-6" />
                </div>
              ) : (
                <div className="tw-px-2 tw-py-2 tw-border-4 tw-border-primary/10 tw-rounded-xl">
                  <Menu className="tw-w-6 tw-h-6" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:tw-hidden"
            >
              <div className="tw-px-2 tw-pt-2 tw-pb-3 tw-space-y-1 tw-bg-card tw-rounded-lg tw-mt-2 tw-border tw-border-border">
                {categories.map((category) => {
                  const href =
                    category.slug === "all"
                      ? "/blog"
                      : `/blog?category=${encodeURIComponent(category.slug)}`;
                  return (
                    <Link
                      key={category.slug}
                      to={href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium tw-transition-colors ${
                        isActive(category.slug)
                          ? "tw-text-primary tw-bg-primary/10"
                          : "tw-text-muted-foreground hover:tw-text-foreground hover:tw-bg-muted"
                      }`}
                    >
                      {category.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}