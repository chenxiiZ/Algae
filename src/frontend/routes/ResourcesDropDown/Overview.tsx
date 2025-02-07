import Beach from "@/assets/beachpic.jpeg";

export default function Overview(){
    return (
        <div className="bg-cover h-full w-full flex justify-center" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1000px] h-auto bg-[#E7E7E7] p-[40px]">
                <h1 className="text-[#2D5128] mt-5 text-[38px] font-bold drop-shadow-md mb-5"> Overview</h1>
                <p className="text-[19px]">To upload images to our platform, start by collecting a water sample in a clean container from a non-disrupted
                    water source, such as a lake, pond, or river with minimal disturbance. Be sure to record the date, time, and
                    exact location of collection. For more comprehensive data, you may optionally test water quality parameters on-site,
                    including water temperature and dissolved oxygen levels. Once back in the lab, you can analyze additional factors such as
                    turbidity, salinity, pH, nitrogen, and phosphorus levels if you have the necessary equipment. For clearer microscopic observations,
                    centrifuge the sample to concentrate algae and other particulates. If you need to preserve the sample for future study, add Lugol’s solution.
                    Finally, place a drop of the sample on a slide, observe it under a microscope, and capture images to upload to our platform.
                </p>

            </div>
        </div>
    );
}