import Beach from "@/assets/beachpic.jpeg";

export default function ProblemsCausedByAlgae(){
    return (
        <div className="bg-cover h-full w-full flex justify-center" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1100px] h-auto bg-[rgba(217,217,217,0.5)] p-[40px]">
                <h1 className="text-[#2D5128] mt-5 text-[38px] font-bold drop-shadow-md mb-5"> Problems Caused by Algae </h1>
                <div className="text-[19px]">
                    <img src="../../../../public/LabPic/image3.png" alt="ImageThree" className="float-right m-5"/>
                    <p className="mb-5 mt-5"> Despite their benefits, algae can have serious negative impacts when their
                        growth becomes unbalanced.
                        Under certain conditions—such as excess nutrients from agricultural runoff, warm temperatures,
                        and stagnant water—algae
                        can grow uncontrollably, leading to what is known as harmful algal blooms (HABs).
                    </p>

                    <p className="mb-5"> HABs can produce toxins that are dangerous to humans, pets, and wildlife. These
                        toxins can contaminate drinking
                        water supplies, cause respiratory issues, and lead to serious illnesses like shellfish
                        poisoning. Additionally, when large quantities
                        of algae die and decompose, they deplete oxygen levels in the water, causing hypoxic zones, or
                        “dead zones,” where aquatic life cannot survive.
                    </p>

                    <p className="mb-5"> Economically, HABs create significant challenges. They can disrupt fisheries by
                        killing fish and shellfish, damage tourism by
                        fouling beaches, and increase water treatment costs for communities. Addressing these problems
                        requires early detection, better management practices,
                        and increased public awareness of the factors that contribute to algal overgrowth.
                    </p>
                </div>
            </div>
        </div>
    );
}