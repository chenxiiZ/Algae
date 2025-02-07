import Beach from "@/assets/beachpic.jpeg";

export default function Preservation(){
    return (
        <div className="bg-cover h-full w-full flex justify-center" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1000px] h-auto bg-[#E7E7E7] p-[40px]">
                <h1 className="text-[#2D5128] mt-5 text-[38px] font-bold drop-shadow-md mb-5"> Preservation </h1>
                <p className="mb-5 text-[19px]">
                    If you need to store samples for later analysis, add <a className="font-bold">Lugol’s solution</a>,
                    an iodine-based preservative.
                    This solution stains algae for better visibility and prevents decomposition.
                    A general guideline is to add 1 mL of Lugol’s solution per 100 mL of sample,
                    but this may vary based on your needs. Ensure the sample is stored in a cool, dark place.
                </p>
                <p className="mb-5 text-[19px]">
                    For more information, please visit the following links:
                </p>
                <div className="flex flex-col">
                    <a href="https://naturalhistory.si.edu/research/botany/research/algae/algae-preservation-techniques#:~:text=After%20first%20fixing%20the%20specimens,glue%20carefully%20to%20herbarium%20paper"
                       className="text-blue-600 visited:text-purple-600 underline ..."> Algae Preservation Technics </a>
                    <a href="https://courses.botany.wisc.edu/botany_330/preservation.html"
                       className="text-blue-600 visited:text-purple-600 underline"> Preservation of Algae Samples </a>
                    <a href="https://plantnet.rbgsyd.nsw.gov.au/PlantNet/fwalgae/Introduction/preserve.htm"
                       className="text-blue-600 visited:text-purple-600 underline ..."> How to preserve FW Algae </a>
                </div>
            </div>
        </div>
    );
}