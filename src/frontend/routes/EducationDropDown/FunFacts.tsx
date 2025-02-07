import Beach from "@/assets/beachpic.jpeg";

export default function FunFacts(){
    return (
        <div className="bg-cover h-full w-full flex" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1248px] h-auto bg-[rgba(217,217,217,0.5)] p-[40px]">
                <h1 className="text-[#2D5128] mt-5 text-[38px] font-bold drop-shadow-md mb-5">Fun Facts About Algae!</h1>
                <ol className="list-decimal text-l text-[19px]">
                    <li className="mb-5">Algae are among the oldest life forms on Earth, dating back over 3 billion years.</li>
                    <li className="mb-5">Some species of algae glow in the dark, a phenomenon called bioluminescence, which creates stunning displays in oceans at night.</li>
                    <li className="mb-5">Algae were used to develop the oil we use today. Millions of years ago, ancient algae were compressed into what eventually became petroleum deposits.</li>
                    <li className="mb-5">Scientists are experimenting with algae to make eco-friendly plastics, biofuels, and even clothing.</li>
                    <li className="mb-5">Algae can be used to produce sustainable food sources, and certain species like spirulina are considered superfoods due to their high protein and nutrient content.</li>
                </ol>
            </div>
        </div>
    );
}