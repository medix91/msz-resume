import { FaLaptopCode, FaMobileAlt, FaCloud } from 'react-icons/fa'; // Importer des icônes React Icons
import './Services.css';

const services = [
  {
    title: 'Développement Web',
    description: 'Création de sites web modernes et réactifs, utilisant les dernières technologies comme React, Node.js et CSS3.',
    icon: <FaLaptopCode size={40} />,
  },
  {
    title: 'Développement Mobile',
    description: 'Applications mobiles natives ou hybrides, optimisées pour Android et iOS avec React Native et Flutter.',
    icon: <FaMobileAlt size={40} />,
  },
  {
    title: 'Hébergement Cloud',
    description: 'Solutions d\'hébergement cloud sécurisées sur AWS, Google Cloud ou Azure, avec un accent sur la performance et la scalabilité.',
    icon: <FaCloud size={40} />,
  },
];

const Services = () => {
  return (
    <div className="services">
      <h2>Mes Services</h2>
      <div className="services__grid">
        {services.map((service, index) => (
          <div key={index} className="services__card">
            <div className="services__icon">{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
