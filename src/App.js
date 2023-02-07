import {
  Navbar,
  About,
  Hero,
  Projects,
  Contact,
  WorkExperience,
} from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
