import Beach from "@/assets/beachpic.jpeg";

export default function ChoosingLocation(){
    return (
        <div className="bg-cover h-full w-full flex justify-center" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1000px] h-auto bg-[#E7E7E7] p-[40px]">
                <h1 className="text-[#2D5128] mt-5 text-[38px] font-bold drop-shadow-md mb-5"> Choosing Location</h1>
                <p  className="text-[19px]">Selecting the right location is crucial for collecting high-quality water samples. Look for a site with
                    minimal disruption, away from areas with strong currents, human activity, or recent disturbances.
                    Algae thrive in still or slow-moving water, such as ponds, lakes, or calm river sections. Avoid
                    areas with excessive debris or sediment, as these can cloud your sample and make microscopic analysis
                    more difficult. If possible, choose a site with visible algal growth or discoloration in the water,
                    as these areas are more likely to yield diverse algae populations. Recording environmental factors
                    such as nearby vegetation, water movement, and weather conditions can also help provide context for your findings.
                </p>
            </div>
        </div>
    );
}