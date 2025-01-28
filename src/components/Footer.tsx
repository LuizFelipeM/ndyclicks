import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faFacebook,
  faInstagram,
  faPinterest,
  faThreads,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SocialMediaDocumentData } from "../../prismicio-types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faX } from "@fortawesome/free-solid-svg-icons";

const typeToIcon = (type: SocialMediaDocumentData["type"]): IconProp => {
  switch (type) {
    case "Behance":
      return faBehance;
    case "Facebook":
      return faFacebook;
    case "Instagram":
      return faInstagram;
    case "Pinterest":
      return faPinterest;
    case "Threads":
      return faThreads;
    case "TikTok":
      return faTiktok;
    case "X":
      return faX;
    case "YouTube":
      return faYoutube;
  }

  throw new Error("Social media type not implemented");
};

const Footer: React.FC = async () => {
  const client = createClient();
  const socialMedias = await client
    .getAllByType("social_media")
    .catch(() => console.error("Error getting social medias list"));

  return (
    <footer className="w-full py-4 px-8 flex flex-col md:flex-row gap-3 justify-between items-center">
      <div className="text-primary flex gap-2">
        {socialMedias ? (
          socialMedias
            .filter(
              ({ data }) =>
                isFilled.select(data.type) && isFilled.link(data.link)
            )
            .map(({ id, data }) => (
              <PrismicNextLink
                key={id}
                field={data.link}
              >
                <FontAwesomeIcon icon={typeToIcon(data.type)} size="2x" />
              </PrismicNextLink>
            ))
        ) : (
          <></>
        )}
      </div>

      <div className="text-sm text-center">
        &copy; {new Date().getFullYear()} Nandayara Santos. Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
