import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About'
import Project from '../pages/Project'
import CV from '../pages/CV'

const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="cv" element={<CV />}/>
      </Routes>
    );
  };
  
  export default Router;
  