import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className="bg-[#2D5128] text-white h-[4rem] text-xl flex font-bold items-center gap-6 px-[1rem]">
            <Link to="/classify">Classify</Link>
            <Link to="/education">Education</Link>
            <Link to="/get-involved">Get Involved</Link>
            <Link to="/contact-us">Contact Us</Link>
        </nav>
    );
}