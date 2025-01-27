import './index.css';
import Navbar from './frontend/components/Navbar.tsx';
import {  Routes, Route } from 'react-router-dom';
import Classify from './frontend/routes/Classify.tsx';
import Education from './frontend/routes/Education.tsx';
import GetInvolved from './frontend/routes/GetInvolved.tsx';
import ContactUs from './frontend/routes/ContactUs.tsx';

function App() {
  return (
      <>
          <Navbar /> {/* Render Navbar */}
          <Routes> {/* Define Routes */}
              <Route path="/classify" element={<Classify />} />
              <Route path="/education" element={<Education />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
      </>
  );
}

export default App;