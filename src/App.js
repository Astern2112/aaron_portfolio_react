import {
  Navbar,
  About,
  Blog,
  Hero,
  Projects,
  Contact,
  WorkExperience,
} from './components';

function App() {
  return (
    <div className="bg-torea-bay-50">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
