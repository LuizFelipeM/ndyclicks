import clsx from "clsx";
import Image from "next/image";

interface TestimonialCardProps {
  imageSrc: string;
  testimonial: string;
  author: string;
  isActive?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  testimonial,
  author,
  isActive = true,
}) => {
  return (
    <div
      className="
        min-w-[30rem] max-w-[30rem] transition-all duration-500
        p-12 pt-32 mt-20
        bg-secondary relative rounded-tl-md rounded-br-md rounded-tr-[80px] rounded-bl-[80px] text-center 
        after:content-[''] after:w-72 after:h-64 after:absolute after:-top-4 after:-left-16 after:bg-arabesco-right"
      style={{
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 0.9,
      }}
    >
      <div className="absolute z-50 -top-16 left-1/2 -translate-x-1/2 w-32 h-32">
        <div className="relative w-full h-full rounded-tr-md rounded-bl-md rounded-tl-[40px] rounded-br-[40px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={`Depoimento de ${author}`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div
        className="
        absolute top-20 left-1/2 -translate-x-1/2 w-10 h-10
        text-hero-title text-white text-opacity-55"
      >
        <span dangerouslySetInnerHTML={{ __html: "&#10075;" }} />
        <span dangerouslySetInnerHTML={{ __html: "&#10075;" }} />
      </div>

      <p className="text-paragraph text-white mb-6">{testimonial}</p>
      <p className="text-paragraph font-bold text-white">~ {author}</p>
    </div>
  );
};
