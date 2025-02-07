import Beach from "../../assets/beachpic.jpeg";

export default function AboutUs() {
    return (
        <div className="bg-cover h-full w-full flex" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1248px] h-[1560px] bg-[rgba(217,217,217,0.5)] p-[40px] justify-center">
                <h1 className="text-5xl font-bold text-[#2D5128] uppercase drop-shadow-md mt-5">About Us</h1>

                <div className="my-6 h-[2px] w-[85%] bg-white"></div>

                <h2 className="text-[#2D5128] mt-5 text-2xl font-bold drop-shadow-md">Our Project</h2>
                <p className="w-[1000px] h-[109px] mt-2"> This project focuses on addressing the challenges of harmful
                    algal blooms (HABs)
                    in Hong Kong by developing a user-friendly website dedicated to sharing information
                    on algae, water pollution, and HAB monitoring. The platform serves as an educational
                    resource to raise awareness about algae and their ecological impacts, while also providing
                    consolidated information for academic purposes. In the future, we aim to integrate
                    artificial intelligence (AI) into the website to enhance algae detection and analysis,
                    but for now, the focus remains on delivering accessible, research-based knowledge to support
                    awareness and educational efforts.
                </p>

                <h2 className="text-[#2D5128] mt-5 text-2xl font-bold drop-shadow-md">Our Mission</h2>
                <p className="mt-2"> At the heart of our algae detection project is the commitment
                    to
                    safeguarding aquatic ecosystems and promoting sustainable water management. Our mission is to
                    provide
                    innovative tools and solutions to detect algae early, prevent harmful blooms, and protect
                    communities
                    that depend on clean water.
                </p>
                <p className="mt-2">
                    We envision a world where the balance between human activities and natural ecosystems is maintained,
                    ensuring that algae remain a vital resource rather than a threat. Together, we can create a future
                    where science and technology work hand-in-hand to preserve our planet’s health
                </p>


                <div className="my-6 h-[2px] w-[85%] bg-white mt-10"></div>

                <h3 className="text-[#2D5128] mt-5 text-2xl font-bold drop-shadow-md">Special Thanks To: </h3>
                <div className="flex gap-[30px] mt-5">
                    <img src="/sponsor.JPG" alt="sponsor"
                         className="w-[130px] h-[155px]  border-4 border-white drop-shadow-md float-left"/>
                    <div>
                        <p className="font-bold">Dr Chong Yee Ling</p>
                        <p className="text-[#AC2B37]">Senior Lecturer II</p>
                    </div>
                </div>

                <div className="my-6 h-[2px] w-[85%] bg-white mt-10"></div>
                <h4 className="text-[#2D5128] mt-5 text-2xl font-bold drop-shadow-md">Meet Our Team</h4>
                <div className="flex gap-[30px] mt-[60px]">
                    <img src="/Chenxi.JPG" alt="chenxi"
                         className="w-[130px] h-[155px]  border-4 border-white drop-shadow-md float-left"/>
                    <div>
                        <p className="font-bold">Chenxi Zeng</p>
                        <p className="text-[#AC2B37]">Worcester Polytechnic Institute</p>
                        <p className="text-[13px]">Class of 2026</p>
                        <p className="text-[13px]">B.S.Computer Science</p>
                    </div>
                </div>


                <div className="flex gap-[30px] mt-[60px]">
                    <img src="/Fiona.jpg" alt="fiona"
                         className="w-[130px] h-[155px]  border-4 border-white drop-shadow-md float-left"/>
                    <div>
                        <p className="font-bold">Fiona Gillis</p>
                        <p className="text-[#AC2B37]">Worcester Polytechnic Institute</p>
                        <p className="text-[13px]">Class of 2026</p>
                        <p className="text-[13px]">B.S.Biomedical Engineering</p>
                    </div>
                </div>


                <div className="flex gap-[30px] mt-10">
                    <img src="/Phoebe.jpg" alt="phoebe"
                         className="w-[130px] h-[155px]  border-4 border-white drop-shadow-md float-left"/>
                    <div>
                        <p className="font-bold">Phoebe Cutter</p>
                        <p className="text-[#AC2B37]">Worcester Polytechnic Institute</p>
                        <p className="text-[13px]">Class of 2026</p>
                        <p className="text-[13px]">B.S.Mechanical and Biomedical Engineering</p>
                    </div>
                </div>


                <div className="flex gap-[30px] mt-10">
                    <img src="/Ryan.jpg" alt="chenxi"
                         className="w-[130px] h-[155px]  border-4 border-white drop-shadow-md float-left"/>
                    <div>
                        <p className="font-bold">Ryan Tat</p>
                        <p className="text-[#AC2B37]">Worcester Polytechnic Institute</p>
                        <p className="text-[13px]">Class of 2026</p>
                        <p className="text-[13px]">B.S.Chemical Engineering</p>
                    </div>
                </div>

            </div>
        </div>
    );
}