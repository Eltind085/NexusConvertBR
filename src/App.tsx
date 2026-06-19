/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Problems } from './components/sections/Problems';
import { Solution } from './components/sections/Solution';
import { Services } from './components/sections/Services';
import { TargetAudience } from './components/sections/TargetAudience';
import { Portfolio } from './components/sections/Portfolio';
import { Offers } from './components/sections/Offers';
import { FAQ } from './components/sections/FAQ';
import { Closing } from './components/sections/Closing';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Services />
        <TargetAudience />
        <Portfolio />
        <Offers />
        <FAQ />
        <Closing />
      </main>

      <Footer />
    </div>
  );
}
