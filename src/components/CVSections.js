import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { AnimatedSection } from './ui/animated';
import { Github, ExternalLink } from 'lucide-react';

// Section Portfolio
const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const projects = [
    {
      id: 1,
      title: "E-commerce React",
      description: "Site e-commerce full-stack avec React et Node.js",
      category: "fullstack",
      image: "/api/placeholder/400/300",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Application Mobile",
      description: "Application React Native de livraison",
      category: "mobile",
      image: "/api/placeholder/400/300",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Mes Projets</h2>
        
        <div className="flex gap-4 mb-8">
          {['all', 'fullstack', 'mobile', 'frontend'].map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? 'default' : 'outline'}
              onClick={() => setFilter(cat)}
              className="capitalize"
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter(project => filter === 'all' || project.category === filter)
            .map(project => (
              <Card key={project.id} className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center gap-2 hover:text-blue-600">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 hover:text-blue-600">
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

// Section Contact
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis');
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Me Contacter</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2">Nom</label>
                <Input placeholder="Votre nom" />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <Input type="email" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <Textarea 
                  placeholder="Votre message..." 
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Envoyer
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

// Composant principal CVSections
const CVSections = () => {
  return (
    <div>
      <AnimatedSection>
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
    </div>
  );
};

export default CVSections;