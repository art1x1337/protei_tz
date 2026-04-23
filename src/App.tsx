import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { FormatsSection } from './components/sections/FormatsSection';
import { HeroSection } from './components/sections/HeroSection';
import { LectorySection } from './components/sections/LectorySection';
import { RoundTableProgramSection } from './components/sections/RoundTableProgramSection';
import { RoundTableRegistrationSection } from './components/sections/RoundTableRegistrationSection';

function App() {
  return (
    <div className="min-h-screen bg-page text-ink">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FormatsSection />
        <RoundTableProgramSection />
        <RoundTableRegistrationSection />
        <LectorySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
