import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import SkillsPage from './SkillsPage/SkillsPage';
import ContactPage from './ContactPage/ContactPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
}

export default App;
