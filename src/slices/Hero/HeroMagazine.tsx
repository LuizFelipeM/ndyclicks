import { Button } from "@/components/Button";
import { RichText } from "@/components/RichText";
import { RichTextField, GroupField, Content, ImageField } from "@prismicio/client";
import { Simplify } from "../../../prismicio-types";
import { HeroComponents } from "./HeroComponents";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

type HeroMagazineProps = {
  className?: string
  title: RichTextField
  text: RichTextField
  buttons: GroupField<Simplify<Content.HeroSliceDefaultPrimaryButtonsItem>>
  image: ImageField<never>
}

export const HeroMagazine: React.FC<HeroMagazineProps> = ({ title, text, buttons, image, className }) => {
  return (
    <div className={
      clsx(
        "relative w-full h-screen bg-gray-100 flex flex-col justify-between p-6",
        className
      )
    }>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <PrismicNextImage
          field={image}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
      </div>

      {/* Magazine title at the top */}
      <div className="relative z-10 text-white text-left">
        <RichText
          field={title}
          components={HeroComponents}
        />
      </div>

      {/* Remaining content aligned to the right */}
      <div className="relative z-10 text-white text-right flex flex-col items-end mt-auto">
        <RichText
          field={text}
          components={HeroComponents}
        />

        <div className="mt-6">
          {buttons?.map(({ text, link }, i) => !!text && !!link && (
            <Button key={i} href={link} className="bg-white text-black font-bold py-2 px-4 rounded-full shadow-md hover:bg-gray-200 transition" overrideDefault>
              {text}
            </Button>
          ))}
        </div>
      </div>

      {/* Additional elements for magazine style */}
      {/* <div className="absolute top-6 left-6 text-white font-bold text-sm tracking-wider z-10">
        <p>Exclusive</p>
        <p>Fashion & Style</p>
      </div>

      <div className="absolute bottom-6 right-6 text-white font-bold text-sm tracking-wider z-10">
        <p>$5.99</p>
      </div> */}
    </div>
  );

  // return (
  //   <div className={
  //     clsx(
  //       "relative w-full h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-6",
  //       className
  //     )
  //   }>
  //     {/* Background image */}
  //     <div className="absolute inset-0 z-0">
  //       <PrismicNextImage
  //         field={image}
  //         className="w-full h-full object-cover"
  //       />
  //       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
  //     </div>

  //     {/* Main content */}
  //     <div className="relative z-10 text-white">
  //       <RichText
  //         field={text}
  //         components={HeroComponents}
  //       />

  //       <div className="mt-6">
  //         {buttons?.map(({ text, link }, i) => !!text && !!link && (
  //           <Button key={i} href={link} className="bg-white text-black font-bold py-2 px-4 rounded-full shadow-md hover:bg-gray-200 transition" overrideDefault>
  //             {text}
  //           </Button>
  //         ))}
  //       </div>
  //     </div>

  //     {/* Additional elements for magazine style */}
  //     <div className="absolute top-6 left-6 text-white font-bold text-sm tracking-wider z-10">
  //       <p>Exclusive</p>
  //       <p>Fashion & Style</p>
  //     </div>

  //     <div className="absolute bottom-6 right-6 text-white font-bold text-sm tracking-wider z-10">
  //       <p>$5.99</p>
  //     </div>
  //   </div>
  // );
};
