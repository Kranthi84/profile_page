import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import ContactsPage from './ContactPage';
import { HOME_PAGE_STRINGS } from './constants/strings';

// Placeholder components for routes
const Home = () => <HomePage />;
const Projects = () => <ProjectsPage />;
const Contact = () => <ContactsPage />;

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid position-relative">
          {/* Hamburger menu for small screens */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Title - shown on small screens (normal flow) */}
          <NavLink className="navbar-brand d-lg-none" to="/">{HOME_PAGE_STRINGS.header}</NavLink>
          {/* Title - shown on large screens (centered) */}
          <NavLink className="navbar-brand d-none d-lg-block position-absolute start-50 translate-middle-x" to="/">{HOME_PAGE_STRINGS.header}</NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav nav-underline flex-column flex-lg-row">
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-white' : 'text-white-50'}`} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-white' : 'text-white-50'}`} to="/projects">Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-white' : 'text-white-50'}`} to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
