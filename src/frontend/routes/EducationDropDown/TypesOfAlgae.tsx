import Beach from "@/assets/beachpic.jpeg";

export default function TypesOfAlgae(){
    return (
        <div className="bg-cover h-full w-full flex" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1248px] h-auto bg-[rgba(217,217,217,0.5)] p-[40px]">
                <h1 className="text-[#2D5128] mt-5 text-[38px] font-bold drop-shadow-md mb-5"> Types of Algae </h1>
                <div className="text-[19px]">
                    <p className="mb-5 mt-5">Algae are a diverse group of photosynthetic organisms that thrive in
                        aquatic environments,
                        though some can also grow on land in moist conditions. They are not classified as plants,
                        animals,
                        or fungi but instead belong to their own unique categories, spanning a wide range of sizes,
                        colors,
                        and structures. Algae can be as small as microscopic phytoplankton that float in oceans and
                        lakes
                        or as large as giant kelp, which can grow up to 60 meters in length in underwater forests.
                    </p>

                    <p className="mb-5">Unlike higher plants, algae lack roots, stems, leaves, and vascular systems, yet
                        they perform a similar
                        role in ecosystems by converting sunlight into energy through photosynthesis. This process not
                        only supports their growth
                        but also generates oxygen as a byproduct. In fact, algae are responsible for producing over half
                        of the oxygen in Earth's atmosphere,
                        making them essential to life on the planet.
                    </p>

                    <p className="mb-5">Algae are incredibly adaptable and can be found in a variety of environments,
                        from oceans and
                        freshwater lakes to hot springs, snowfields, and even deserts. Their ability to survive in
                        extreme conditions makes them
                        one of the most resilient and widespread forms of life on Earth.
                    </p>
                </div>
            </div>
        </div>
    );
}