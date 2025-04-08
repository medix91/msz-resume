import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [infos, setInfos] = useState(null);

  useEffect(() => {
    fetch('/data/infos.json')
      .then((res) => res.json())
      .then((data) => setInfos(data));
  }, []);

  if (!infos) return <p>Chargement...</p>;

  return (
    <div className="about">
      <h2 className="about__title">À propos de moi</h2>
      <div className="about__card">
        <div className="about__card-content">
          <div className="about__info">
            <FaPhoneAlt className="about__icon" />
            <p>{infos.telephone}</p>
          </div>
          <div className="about__info">
            <FaEnvelope className="about__icon" />
            <p>{infos.email}</p>
          </div>
          <div className="about__info">
            <FaMapMarkerAlt className="about__icon" />
            <p>{infos.localisation}</p>
          </div>
          <div className="about__info">
            <p><strong>Nom :</strong> {infos.nom}</p>
            <p><strong>Titre :</strong> {infos.titre}</p>
          </div>
          <p><strong>Description :</strong> {infos.description}</p>
          <div className="about__links">
            <a href={infos.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="about__icon" />
              LinkedIn
            </a>
            <a href={infos.github} target="_blank" rel="noreferrer">
              <FaGithub className="about__icon" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
