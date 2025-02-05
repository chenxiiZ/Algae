import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div
            className="bg-[#E4EB9C] h-auto w-full grid grid-cols-4 justify-items-center text-[#5D5A5A] gap-6 p-6 ">

            <div className="flex flex-col items-start text-sm">
                <img src="/HKUEdu.webp" alt="logo" className="h-[65px] w-auto"/>
                <h3 className="mt-3">Sponsors: </h3>
                <p>Dr. Chong Yee Ling</p>
                <p>The Education University of Hong Kong</p>
            </div>

            <div className="flex flex-col items-center text-xl">
                <h3 className="mb-5">Classify</h3>
                <Link to="/classify" className="hover:underline text-sm">
                    Algae Image Classification
                </Link>
            </div>

            <div className="flex flex-col text-xl items-start">
                <h3 className="mb-5">Education</h3>
                <div className="flex flex-col space-y-2">
                    <Link to="/classify" className="hover:underline text-sm">
                        What is Algae?
                    </Link>
                    <Link to="/education" className="hover:underline text-sm">
                        Why is Algae important?
                    </Link>
                    <Link to="/education" className="hover:underline text-sm">
                        Problems caused by Algae
                    </Link>
                    <Link to="/education" className="hover:underline text-sm">
                        Types of Algae
                    </Link>
                    <Link to="/education" className="hover:underline text-sm">
                        Algae and Climate Change
                    </Link>
                    <Link to="/education" className="hover:underline text-sm">
                        Fun Facts!
                    </Link>
                </div>
            </div>

            <div className="flex flex-col text-xl items-start">
                    <h3 className="mb-5 text-xl">Contact Us</h3>
                    <p className="text-sm">Email: gr-algaec25@wpi.edu</p>
                    <p className="text-sm">Address: 100 Institute Road, Worcester, MA, 01608</p>
            </div>
        </div>
    );
}