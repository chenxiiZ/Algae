import Beach from "@/assets/beachpic.jpeg";

export default function TakingImages(){
    return (
        <div className="bg-cover h-full w-full flex justify-center" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1000px] h-auto bg-[#E7E7E7] p-[40px]">
                <h1 className="text-[#2D5128] mt-5 text-[38px] font-bold drop-shadow-md mb-5"> Taking Images </h1>
                <p className="mb-5 text-[19px]">
                    Capturing clear images depends on your equipment. We successfully used an iPhone camera through the microscope lens,
                    but it requires patience and adjustment. Experiment with angles, lighting, and focus to achieve the sharpest results.
                    Using a microscope adapter for your phone or camera can help stabilize the image and improve.
                </p>
            </div>
        </div>
    );
}