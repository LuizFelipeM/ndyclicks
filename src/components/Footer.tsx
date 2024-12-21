import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import React from 'react';
import { createClient } from '@/prismicio';
import { isFilled } from '@prismicio/client';

const Footer: React.FC = async () => {
  const client = createClient();
  const socialMedias = await client.getAllByType("social_media").catch(() => console.error("Error getting posts list"));

  return (
    <footer className="w-full py-4 px-8 flex flex-col md:flex-row gap-3 justify-between items-center">
      <a
        href="https://www.instagram.com/nandayara.ph/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {isFilled.socialMedias.map()}
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <div className="text-sm ">
        &copy; {new Date().getFullYear()} Nandayara Santos. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
