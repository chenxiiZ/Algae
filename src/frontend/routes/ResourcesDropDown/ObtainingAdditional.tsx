import Beach from "@/assets/beachpic.jpeg";

export default function ObtainingAdditional(){
    return (
        <div className="bg-cover h-full w-full flex justify-center" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1248px] h-auto bg-[#E7E7E7] p-[40px]">
                <h1 className="text-[#2D5128] mt-5 text-[38px] font-bold drop-shadow-md mb-5"> Obtaining Additional
                    Parameters</h1>
                <h2 className="text-[26px] text-[#2D5128] mb-5 underline">On-site Parameters:</h2>
                <img src="../../../../public/LabPic/angus1.jpg" alt="angus2"
                     className="m-5 w-[200px] h-[250px] float-right"/>
                <h2 className="text-[20px] mb-5">Temperature:</h2>
                <p className="mb-5">
                    Use a thermometer or a dissolved oxygen meter with a built-in temperature sensor.
                    Ensure the probe is fully submerged and wait for the reading to stabilize.
                </p>
                <h2 className="text-[20px] mb-5">Dissolved Oxygen: </h2>
                <p className="mb-10">
                    Measure dissolved oxygen with a dissolved oxygen meter. Follow the manufacturer’s instructions
                    carefully,
                    making sure the probe is completely submerged in the sampling location. To avoid disturbing the
                    natural oxygen levels,
                    take this measurement after collecting your water samples.
                </p>
                <h2 className="text-[26px] text-[#2D5128] mb-5 underline">At-Lab Parameters: </h2>
                <p className="mb-5">
                    Use a thermometer or a dissolved oxygen meter with a built-in temperature sensor. Ensure the probe
                    submerged and wait
                    for the reading to stabilize. The different parameters to take in the lab vary extensively based on
                    the equipment you have available.
                </p>
                <h2 className="text-[20px] mb-5">Turbidity:</h2>
                <p className="mb-5">
                    Measure turbidity using a turbidity meter or a Secchi disk for a rough estimate. Turbidity indicates
                    the clarity of the water,
                    which affects light penetration and algal growth. High turbidity may suggest sediment disturbance,
                    runoff, or algal blooms.
                </p>
                <img src="../../../../public/LabPic/angus2.jpg" alt="angus2"
                     className="m-5 w-[200px] h-[250px] float-right"/>
                <h2 className="text-[20px] mb-5">Salinity: </h2>
                <p className="mb-5">
                    Use a refractometer or conductivity meter to determine salinity levels. Salinity impacts the types
                    of algae present,
                    as some species thrive in freshwater while others prefer brackish or saltwater environments.
                    Understanding salinity
                    helps us identify which algae species are most common in different aquatic conditions.
                </p>

                <h2 className="text-[20px] mb-5"> pH:</h2>
                <p className="mb-2 mt-5">
                    Test pH using pH strips or a digital pH meter. pH influences algal growth, with most species
                    thriving in a slightly alkaline range (around 7–8).
                    Drastic pH changes can indicate pollution or environmental stress, affecting algae populations.
                </p>
                <p className="mb-5">
                    Use a thermometer or a dissolved oxygen meter with a built-in temperature sensor. Ensure the probe
                    submerged and wait for the reading to stabilize.
                </p>
                <img src="../../../../public/LabPic/ryan1.jpg" alt="ryan" className="m-5 w-[200px] h-[250px]"/>
                <h className="text-[20px] mb-5">Nitrogen levels:</h>
                <p className="mb-5 mt-5"> Analyze nitrogen levels using a test kit or spectrophotometer. Nitrogen is a
                    key
                    nutrient for algae,
                    and high levels often indicate pollution from agricultural runoff or wastewater. Measuring nitrogen
                    helps us track nutrient loading and its impact on algal growth.
                </p>
                <img src="../../../../public/LabPic/lab2.jpg" alt="lab2" className="m-5 w-[200px] h-[250px]"/>
                <h2 className="text-[20px] mb-5">Phosphorus levels:</h2>
                <p className="mb-2 mt-5">
                    Use a colorimetric test or spectrophotometer to assess phosphorus levels. Like nitrogen,
                    phosphorus is a major nutrient that can fuel algal blooms, sometimes leading to harmful
                    conditions like eutrophication. Monitoring phosphorus helps us understand nutrient dynamics
                    and potential risks to aquatic ecosystems.
                </p>
                <p className="mb-5">
                    Use a thermometer or a dissolved oxygen meter with a built-in temperature sensor. Ensure the probe
                    submerged and wait for the reading to stabilize.
                </p>

            </div>
        </div>
    );
}