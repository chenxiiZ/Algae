import './index.css';
import Navbar from './frontend/components/Navbar.tsx';
import {  Routes, Route } from 'react-router-dom';
import Classify from './frontend/routes/Classify.tsx';
import Education from './frontend/components/Education.tsx';
import AboutUs from './frontend/routes/AboutUs.tsx';
import Footer from './frontend/components/Footer.tsx';
import WhatAreAlgae from "@/frontend/routes/EducationDropDown/WhatAreAlgae.tsx";
import WhyAreAlgaeImportant from "@/frontend/routes/EducationDropDown/WhyAreAlgaeImportant.tsx";
import TypesOfAlgae from "@/frontend/routes/EducationDropDown/TypesOfAlgae.tsx";
import ProblemsCausedByAlgae from "@/frontend/routes/EducationDropDown/ProblemsCausedByAlgae.tsx";
import AlgaeAndClimate from "@/frontend/routes/EducationDropDown/AlgaeAndClimate.tsx";
import FunFacts from "@/frontend/routes/EducationDropDown/FunFacts.tsx";
import CentroFuging from "@/frontend/routes/ResourcesDropDown/CentroFuging.tsx";
import ChoosingLocation from "@/frontend/routes/ResourcesDropDown/ChoosingLocation.tsx";
import Microscopy from "@/frontend/routes/ResourcesDropDown/Microscopy.tsx";
import ObtainingAdditional from "@/frontend/routes/ResourcesDropDown/ObtainingAdditional.tsx";
import Overview from "@/frontend/routes/ResourcesDropDown/Overview.tsx";
import Preservation from "@/frontend/routes/ResourcesDropDown/Preservation.tsx";
import TakingImages from "@/frontend/routes/ResourcesDropDown/TakingImages.tsx";

function App() {
    return (
        <>
            <Navbar /> {/* Render Navbar */}
            <Routes> {/* Define Routes */}
                <Route path="/" element={<Classify />} />
                <Route path="/classify" element={<Classify />} />
                <Route path="/education" element={<Education />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/what-are-algae" element={<WhatAreAlgae />} />
                <Route path="/why-are-algae-important" element={<WhyAreAlgaeImportant />} />
                <Route path="/types-of-algae" element={<TypesOfAlgae />} />
                <Route path="/problems-caused-by-algae" element={<ProblemsCausedByAlgae />} />
                <Route path="/algae-and-climate" element={<AlgaeAndClimate />} />
                <Route path="/fun-facts" element={<FunFacts />} />
                <Route path="/centro-fuging" element={<CentroFuging />} />
                <Route path="/choosing-location" element={<ChoosingLocation />} />
                <Route path="/microscopy" element={<Microscopy />} />
                <Route path="/obtaining-additional" element={<ObtainingAdditional />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/preservation" element={<Preservation />} />
                <Route path="/taking-images" element={<TakingImages />} />
            </Routes>
            <Footer /> {/* Render Footer */}
        </>
    );
}

export default App;