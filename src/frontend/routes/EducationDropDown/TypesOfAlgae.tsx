import Beach from "@/assets/beachpic.jpeg";

export default function TypesOfAlgae(){
    return (
        <div className="bg-cover h-full w-full flex" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1248px] h-auto bg-[rgba(217,217,217,0.5)] p-[40px]">
                <h1 className="text-[#2D5128] mt-5 text-[38px] font-bold drop-shadow-md mb-5"> Types of Algae </h1>
                <div className="text-[19px]">
                    <p className="mb-5 mt-5">
                        Algae encompass a wide variety of species, each with unique characteristics and ecological roles.
                    </p>

                    <ol className="mb-5 list-decimal pl-5">
                        <li>
                            <a className="font-bold">Green Algae (Chlorophyta)</a>: Found in freshwater
                            and marine environments, green algae are known for
                            their bright green color, which comes from their high chlorophyll content. They are often
                            seen in ponds,
                            rivers, and lakes.
                        </li>
                        <img src="/LabPic/greenalgae.jpg" alt="green-algae" className="m-5 w-[300px] h-[300px]"/>
                        <li>
                            <a className="font-bold">Red Algae (Rhodophyta)</a>: Commonly found in marine environments,
                            red algae are
                            known for their reddish pigmentation due to the presence of phycoerythrin.
                            They are economically valuable, especially for producing agar and carrageenan
                            used in food and pharmaceuticals.
                        </li>
                        <img src="/LabPic/redalgae.jpg" alt="red-algae" className="m-5 w-[250px] h-[300px]"/>
                        <li>
                            <a className="font-bold">Brown Algae (Phaeophyceae)</a>: These are large, multicellular
                            algae found in marine
                            environments, including kelp forests. They play a crucial role in providing habitat and food
                            for marine organisms.
                        </li>
                        <img src="/LabPic/brownalgae.webp" alt="brown-algae" className="m-5 w-[400px] h-[250px]"/>
                        <li>
                            <a className="font-bold">Blue-Green Algae (Cyanobacteria)</a>: Despite their name,
                            blue-green
                            algae are technically bacteria. They can produce toxins during harmful algal blooms, posing
                            threats to ecosystems and public health.
                        </li>
                        <img src="/LabPic/blue-green.jpg" alt="blue-green-algae" className="m-5 w-[400px] h-[250px]"/>
                    </ol>

                    <p className="mb-5">By understanding the diversity of algae, we can better appreciate their ecological
                        importance and manage their presence in natural and human-made environments.

                    </p>
                </div>
            </div>
        </div>
    );
}