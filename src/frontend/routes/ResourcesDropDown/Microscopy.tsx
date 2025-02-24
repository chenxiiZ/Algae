import Beach from "@/assets/beachpic.jpeg";

export default function Microscopy(){
    return (
        <div className="bg-cover h-full w-full flex justify-center" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1000px] h-auto bg-[#E7E7E7] p-[40px]">
                <h1 className="text-[#2D5128] mt-5 text-[38px] font-bold drop-shadow-md mb-5"> Microscopy</h1>
                <p className="mb-5 text-[19px]">
                    Use a compound microscope with multiple magnifications to analyze algae.
                    We found that <a className="font-bold">100x and 400x magnifications</a> provided the best clarity
                    for
                    identifying algal structures. Experiment with different levels to find
                    what works best for your sample.
                </p>
                <div className="grid grid-cols-2">
                <img src="/LabPic/microscopic.jpg" alt="microscopic" className="m-5 w-[350px] h-[400px]"/>
                <img src="/LabPic/algae.png" alt="algae" className="m-5 w-[350px] h-[400px]"/>
                </div>
                <p className="mb-5 text-[19px]">
                    For more information, please visit the following links:
                </p>
                <div className="flex flex-col">
                    <a href="https://plantnet.rbgsyd.nsw.gov.au/PlantNet/fwalgae/Introduction/observe.htm#:~:text=The%20simplest%20method%20is%20to,to%20view%20under%20a%20microscope"
                       className="text-blue-600 visited:text-purple-600 underline ..."> How to Preserve Fresh Water
                        Algae </a>
                </div>
            </div>
        </div>
    );
}