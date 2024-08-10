import { Suspense } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./RootLayout.css";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";

const RootLayout = () => {
    return (
        <>
            <header className="header">
                <Link to="/" className="header_logo">Strona główna</Link>
                <nav className="header_nav">
                    <NavLink to="/about-us">O nas</NavLink>
                    <NavLink to="/services">Usługi</NavLink>
                    <NavLink to="/price">Cena</NavLink>
                    <NavLink to="/contact">Kontakt</NavLink>
                </nav>
            </header>
            <main className="main">
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default RootLayout;