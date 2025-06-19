import Image from "next/image";
import ConceptSection from "../components/sections/ConceptSection";
import MentorSection from "../components/sections/MentorSection";
import LearningFlowSection from "../components/sections/LearningFlowSection";
import LearningCultureSection from "../components/sections/LearningCultureSection";
import ActiveSantriSection from "../components/sections/ActiveSantriSection";
import ClosingSection from "../components/sections/ClosingSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-bg-main text-text-light font-mono">
      {/* Header */}
      <header className="w-full py-8 text-center bg-dark-bg-card border-b border-gray-700">
        <h1 className="text-5xl font-bold text-accent-heading">PROGRAMMER DIVISION</h1>
        <p className="mt-2 text-xl text-text-medium">WEB FOR MOS PRESENTATION</p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow w-full px-4 py-12 max-w-7xl">
        <ConceptSection />
        <MentorSection />
        <LearningFlowSection />
        <LearningCultureSection />
        <ActiveSantriSection />
        <ClosingSection />
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center bg-dark-bg-card border-t border-gray-700">
        <Image 
          src="https://sib.pondokit.com/wp-content/uploads/2022/12/Logo-Pondok-it.png" 
          alt="Pondok IT Logo" 
          width={100} 
          height={100} 
          className="mx-auto mb-4"
        />
        <p className="text-text-dark text-sm">Credit: Creating By L The Limitless Learner</p>
      </footer>
    </div>
  );
}
