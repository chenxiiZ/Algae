import Beach from "../../assets/beachpic.jpeg";


export default function AboutUs() {
    return (
        <div className="bg-cover h-full w-full flex" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-10 w-full">
                <h1 className="text-5xl font-bold text-[#2D5128]">About Us</h1>

                <div className="my-6 h-[2px] w-[85%] bg-white"></div>

                <h2 className="text-[#2D5128] mt-5 text-2xl font-bold">Our Project</h2>
                <p className="w-[1000px] h-[109px] mt-2"> This project focuses on addressing the challenges of harmful
                    algal blooms (HABs)
                    in Hong Kong by developing a user-friendly website dedicated to sharing information
                    on algae, water pollution, and HAB monitoring. The platform serves as an educational
                    resource to raise awareness about algae and their ecological impacts, while also providing
                    consolidated information for academic purposes. In the future, we aim to integrate
                    artificial intelligence (AI) into the website to enhance algae detection and analysis,
                    but for now, the focus remains on delivering accessible, research-based knowledge to support
                    awareness and educational efforts.</p>

                <div className="my-6 h-[2px] w-[85%] bg-white mt-10"></div>

                <h3  className="text-[#2D5128] mt-5 text-2xl font-bold">Special Thanks To: </h3>
            </div>
        </div>
    );
}