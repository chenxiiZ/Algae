import Beach from "@/assets/beachpic.jpeg";


export default function CentroFuging(){
    return (
        <div className="bg-cover h-full w-full flex justify-center" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1000px] h-auto bg-[#E7E7E7] p-[40px]">
                <h1 className="text-[#2D5128] mt-5 text-[38px] font-bold drop-shadow-md mb-5">Centrofuging</h1>
                <p className="text-[19px] mb-5">
                    To concentrate algae and remove excess debris, centrifuge the sample. Place the water sample into
                    the centrifuge
                    tubes and follow your instrument’s instructions. Through testing, we found that 3,000 rpm for 10
                    minutes is optimal—strong
                    enough to settle algae without damaging delicate structures. Centrifuging helps produce clearer
                    images and more accurate
                    microscopic observations.
                </p>
                <img src="/LabPic/centrofuging.png" alt="centrofuging" className="m-5 w-[350px] h-[250px]"/>
                <p className="mb-5 text-[19px]">
                    For more information, please visit the following links:
                </p>
                <div className="flex flex-col">
                    <a href="https://www.in.gov/idem/cleanwater/files/swm_sop_processing_id_diatom_samples.pdf"
                       className="text-blue-600 visited:text-purple-600 underline ..."> Inspiration </a>
                    <a href="https://dolphincentrifuge.com/algae-centrifuge/"
                       className="text-blue-600 visited:text-purple-600 underline ..."> Algae Centrifuge | Large-Scale
                        Algae Cell Harvesting </a>
                </div>
            </div>
        </div>
    );
}