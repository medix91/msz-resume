import { useState } from 'react';
import './CV.css';

const experiences = [
  {
    titre: 'Ingénieur Logiciel',
    entreprise: 'Entreprise XYZ',
    periode: '2020 - 2023',
    description: 'Développement d\'applications web et mobiles, gestion de projets Agile, optimisation de la performance des systèmes.',
    technologies: ['Java', 'React', 'Node.js'],
  },
  {
    titre: 'Chef de Projet',
    entreprise: 'Entreprise ABC',
    periode: '2017 - 2020',
    description: 'Coordination d\'équipes de développement, gestion de la relation client, planification des ressources.',
    technologies: ['JavaScript', 'Spring', 'AWS'],
  },
  {
    titre: 'Développeur Backend',
    entreprise: 'Entreprise DEF',
    periode: '2015 - 2017',
    description: 'Conception d\'API REST, gestion de bases de données, optimisation des requêtes.',
    technologies: ['Python', 'MongoDB', 'Express'],
  },
  // Ajoute d'autres expériences si nécessaire...
];

const CV = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
  };

  const handleBackClick = () => {
    setSelectedExperience(null);
  };

  return (
    <div className="cv">
      <h2>Mon CV</h2>

      {selectedExperience ? (
        <div className="cv__details">
          <button className="cv__back-button" onClick={handleBackClick}>Retour à la liste</button>
          <h3>{selectedExperience.titre} - {selectedExperience.entreprise}</h3>
          <p><strong>Période :</strong> {selectedExperience.periode}</p>
          <p>{selectedExperience.description}</p>
          <h4>Technologies utilisées :</h4>
          <div className="cv__technologies">
            {selectedExperience.technologies.map((tech, index) => (
              <span key={index} className="cv__tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      ) : (
        <div className="cv__grid">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="cv__card"
              onClick={() => handleCardClick(experience)}
            >
              <h4>{experience.titre}</h4>
              <p className="cv__company">{experience.entreprise}</p>
              <p>{experience.periode}</p>
              <div className="cv__technologies">
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="cv__tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CV;
