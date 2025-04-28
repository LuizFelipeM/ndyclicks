import { RichTextField, ImageField, isFilled } from "@prismicio/client";
import React from "react";
import { TextSection } from "@/components/TextSection";
import { RichText } from "@/components/RichText";
type TextAndImageProps = {
  text: RichTextField;
  image: ImageField;
  isTextLeft: boolean;
};

export const TextAndImage: React.FC<TextAndImageProps> = ({
  text,
  image,
  isTextLeft,
}) => (
  <TextSection textLeft={isTextLeft}>
    <TextSection.Image image={image} />
    <TextSection.Body>
      <TextSection.Text>
        {isFilled.richText(text) && <RichText field={text} />}
      </TextSection.Text>
    </TextSection.Body>
  </TextSection>
);
