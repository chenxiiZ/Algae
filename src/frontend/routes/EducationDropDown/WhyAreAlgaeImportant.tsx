import Beach from "@/assets/beachpic.jpeg";

export default function WhyAreAlgaeImportant(){
    return (
        <div className="bg-cover h-full w-full flex justify-center" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${Beach})`,}}>
            <div className="m-[100px] w-[1100px] h-auto bg-[rgba(217,217,217,0.5)] p-[40px]">
                <h1 className="text-[#2D5128] mt-5 text-[38px] font-bold drop-shadow-md mb-5">Why are Algae Important?</h1>
                <div className="text-[19px]">
                    <img src="/LabPic/image2.png" alt="ImageTwo" className="float-left m-5"/>
                    <p className="mb-5 mt-5"> Algae play a crucial role in maintaining life on Earth, serving as one of
                        the primary engines of our planet’s ecosystems.
                        They are often referred to as the "lungs of the Earth" because they produce over 50% of the
                        oxygen we breathe through photosynthesis.
                        In aquatic environments, algae form the foundation of the food web, providing nourishment for a
                        wide range of organisms,
                        from tiny zooplankton to large fish and marine mammals.
                    </p>

                    <p className="mb-5"> Beyond their ecological importance, algae contribute significantly to human
                        industries.
                        Algae are used in the production of biofuels, which are considered a renewable and
                        environmentally friendly
                        alternative to fossil fuels. Certain species of microalgae, such as spirulina and chlorella, are
                        rich in nutrients and
                        marketed as dietary supplements, while red algae are essential in producing food products like
                        agar and carrageenan,
                        which are used as thickeners and stabilizers.
                    </p>
                </div>
            </div>
        </div>
    );
}