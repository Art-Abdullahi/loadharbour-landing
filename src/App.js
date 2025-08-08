import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main id="main" tabIndex={-1} className="pt-16">
        {/* Your sections go here */}
        <Hero />
        {/* <Features /> */}
        {/* <HowItWorks /> */}
        {/* <Testimonials /> */}
        {/* <FAQ /> */}
        {/* <CTA /> */}
        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default App;
