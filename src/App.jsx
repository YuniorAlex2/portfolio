import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import GlobalStyles from "./pages/styles/GlobalStyles";
import { SideBarProvider } from "./context/SidebarContext";

function App() {
  return (
    <div>
      <SideBarProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </SideBarProvider>
    </div>
  );
}

export default App;
