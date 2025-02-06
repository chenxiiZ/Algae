import { Link } from 'react-router-dom';
import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import Education from "@/frontend/components/Education.tsx";



export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // menu visibility

    return (
        <nav className="bg-[#404C3C] text-white h-[5rem] text-2xl flex items-center justify-between px-10">

            <div className="flex items-center gap-4">
                <img src="/HKUEdu.webp" alt="logo" className="h-[60px] w-auto" />
            </div>


            <div className="md:hidden">
                <AlignJustify
                    className="h-8 w-8 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
                />
            </div>

            <div
                className={`absolute top-[5rem] left-0 w-full flex flex-col md:w-auto md:static md:flex-row md:gap-6 md:flex ${
                    menuOpen ? 'block' : 'hidden'
                }`}
            >
                <Link to="/classify">Classify</Link>
                <div className="relative">
                    <Education/> {/* Dropdown Button */}
                </div>
                <Link to="/about-us">About Us</Link>
            </div>
        </nav>
    );
}