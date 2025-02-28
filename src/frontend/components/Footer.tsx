import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div
            className="bg-[#E4EB9C] h-auto w-full grid grid-cols-5 justify-items-center text-[#5D5A5A] gap-6 p-6 ">

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
                    <Link to="/what-are-algae" className="hover:underline text-sm">
                        What are Algae?
                    </Link>
                    <Link to="/why-are-algae-important" className="hover:underline text-sm">
                        Why are Algae important?
                    </Link>
                    <Link to="/problems-caused-by-algae" className="hover:underline text-sm">
                        Problems caused by Algae
                    </Link>
                    <Link to="/types-of-algae" className="hover:underline text-sm">
                        Types of Algae
                    </Link>
                    <Link to="/algae-and-climate" className="hover:underline text-sm">
                        Algae and Climate Change
                    </Link>
                    <Link to="/fun-facts" className="hover:underline text-sm">
                        Fun Facts about Algae!
                    </Link>
                </div>
            </div>

            <div className="flex flex-col text-xl items-start">
                <h3 className="mb-5 text-xl">Resources</h3>
                <div className="flex flex-col space-y-2">
                    <Link to="/overview" className="hover:underline text-sm">
                        Overview
                    </Link>
                    <Link to="/choosing-location" className="hover:underline text-sm">
                        Choosing a Location
                    </Link>
                    <Link to="/obtaining-additional" className="hover:underline text-sm">
                        Obtaining Additional Parameters
                    </Link>
                    <Link to="/centro-fuging" className="hover:underline text-sm">
                        Centrofuging
                    </Link>
                    <Link to="/preservation" className="hover:underline text-sm">
                        Preservation
                    </Link>
                    <Link to="/microscopy" className="hover:underline text-sm">
                        Microscopy
                    </Link>
                    <Link to="/taking-images" className="hover:underline text-sm">
                        Taking Images
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