import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
        </div>
    );
}