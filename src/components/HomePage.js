import React, { useState } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, Download } from 'lucide-react';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    // Ajout de la classe dark au niveau racine quand le mode sombre est actif
    <div className={darkMode ? 'dark' : ''}>
      {/* Tout le contenu dans un conteneur qui réagit au mode sombre */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation avec couleurs adaptatives */}
        <nav className="fixed w-full top-0 p-4 bg-white dark:bg-gray-800 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">MILAN Gabriel</h1>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label={darkMode ? "Activer le mode clair" : "Activer le mode sombre"}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a 
                href="#contact" 
                className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section avec couleurs adaptatives */}
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  Développeur Web Full Stack
                </h2>
                <p className="text-xl mb-6">
                  Passionné par la création d'expériences web innovantes et performantes
                </p>
                <div className="flex gap-4">
                  <a href="#" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold mb-2">3+</div>
                      <div className="text-sm">Années d'expérience</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold mb-2">15+</div>
                      <div className="text-sm">Projets réalisés</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold mb-2">5+</div>
                      <div className="text-sm">Technologies maîtrisées</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold mb-2">100%</div>
                      <div className="text-sm">Satisfaction client</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section avec couleurs adaptatives */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">Technologies préférées</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'Node.js', 'TypeScript', 'Tailwind', 'Python'].map((tech) => (
                <div key={tech} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="text-center">
                    <div className="font-semibold">{tech}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download CV Button */}
        <div className="fixed bottom-8 right-8">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            <Download className="w-5 h-5" />
            Télécharger CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;