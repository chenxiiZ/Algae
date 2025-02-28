import Beach from "@/assets/beachpic.jpeg";

export default function AlgaeAndClimate(){
    return (
        <div className="bg-cover h-full w-full flex justify-center" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1100px] h-auto bg-[rgba(217,217,217,0.5)] p-[40px]">
                <h1 className="text-[#2D5128] mt-5 text-[38px] font-bold drop-shadow-md mb-5">Algae and Climate Change</h1>
                <div className="text-[19px]">
                    <img src="/LabPic/image4.png" alt="ImageFour" className="float-right m-5 w-[400px] h-[400px]"/>
                    <p className="mb-5 mt-5"> Algae play a complex role in the context of climate change. On the
                        positive side, algae contribute
                        to carbon sequestration by absorbing carbon dioxide from the atmosphere during photosynthesis.
                        Certain types of algae, such as diatoms,
                        play an essential role in the global carbon cycle, capturing vast amounts of CO2 and sinking it
                        to the ocean floor when they die.
                    </p>

                    <p className="mb-5"> However, climate change also creates conditions that favor harmful algal
                        blooms. Rising temperatures, increased nutrient
                        runoff from extreme weather events, and changing ocean currents are making HABs more frequent
                        and severe. These blooms can disrupt ecosystems,
                        exacerbate hypoxic zones, and release toxins that harm both aquatic life and human populations.
                    </p>

                    <p className="mb-5"> Studying algae in the context of climate change is essential for understanding
                        their dual role as both a potential solution and
                        a challenge. By harnessing their carbon-capturing capabilities and mitigating the factors that
                        lead to algal overgrowth, we can better manage their
                        impact on a warming planet.
                    </p>
                </div>
            </div>
        </div>
    );
}