import Image from "next/image";
import { FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SocialMediaDocumentData } from "../../prismicio-types";
import { createClient } from "@/prismicio";
import { IoLogoBehance } from "react-icons/io5";
import { FaFacebook, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { BsThreadsFill } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";
import React from "react";
import { isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { IconType } from "react-icons";

const typeToIcon = (type: SocialMediaDocumentData["type"]): IconType => {
  switch (type) {
    case "Behance":
      return IoLogoBehance;
    case "Facebook":
      return FaFacebook;
    case "Instagram":
      return RiInstagramFill;
    case "Pinterest":
      return FaPinterest;
    case "Threads":
      return BsThreadsFill;
    case "TikTok":
      return AiFillTikTok;
    case "X":
      return FaSquareXTwitter;
    case "YouTube":
      return FaYoutube;
  }

  throw new Error("Social media type not implemented");
};

export const Footer = async () => {
  const client = createClient();
  const socialMedias = await client
    .getAllByType("social_media")
    .catch(() => console.error("Error getting social medias list"));

  return (
    <footer className="relative flex flex-col items-center justify-center w-full bg-secondary py-10">
      <div className="relative w-48 h-12 max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        <PrismicNextLink href="/">
          <Image src="/logo2.svg" alt="Logo" fill className="object-contain" />
        </PrismicNextLink>
      </div>
      <div className="relative flex items-center justify-center gap-3 max-w-screen-xl mx-auto px-4 text-center text-white text-footer py-4">
        {socialMedias ? (
          socialMedias
            .filter(
              ({ data }) =>
                isFilled.select(data.type) && isFilled.link(data.link)
            )
            .map(({ id, data }) => {
              const Icon = typeToIcon(data.type);
              return (
                <PrismicNextLink key={id} field={data.link}>
                  <Icon size={25} />
                </PrismicNextLink>
              );
            })
        ) : (
          <></>
        )}
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        <p className="text-center text-white text-footer">
          © {new Date().getFullYear()} Nandayara Santos.
          <br />
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
