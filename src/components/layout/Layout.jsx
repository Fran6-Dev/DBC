import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import CookieBanner from "../cookies/CookieBanner";
import CookiePreferencesModal from "../cookies/CookiePreferencesModal";

export default function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Aller au contenu
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <CookiePreferencesModal />
    </>
  );
}
