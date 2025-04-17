"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import TestimonialCard from "./TestimonialCard";
import { useSwipeable } from "react-swipeable";

interface Testimonial {
  id: number;
  imageSrc: string;
  testimonial: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    imageSrc: "/foto-ana.avif",
    testimonial: "Estou emocionada! Nunca tinha um registro da minha barriga que realmente amasse - agora tenho. As fotos ficaram perfeitas [...] Muito obrigada!",
    author: "Ana Carolina"
  },
  {
    id: 2,
    imageSrc: "/testimonial2.jpg",
    testimonial: "Uma experiência incrível! As fotos capturaram exatamente o que eu queria transmitir. Cada detalhe foi pensado com muito carinho.",
    author: "Maria Silva"
  },
  {
    id: 3,
    imageSrc: "/testimonial3.jpg",
    testimonial: "Um olhar único e sensível que transformou momentos em memórias eternas. Gratidão por todo o profissionalismo.",
    author: "Ana Oliveira"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const getVisibleTestimonials = () => {
    const lastIndex = testimonials.length - 1;
    const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;

    return [
      { ...testimonials[prevIndex], isActive: false },
      { ...testimonials[currentIndex], isActive: true },
      { ...testimonials[nextIndex], isActive: false },
    ];
  };

  return (
    <div className="relative " {...handlers}>
      <div className="flex justify-center items-center gap-4">
        {getVisibleTestimonials().map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            imageSrc={testimonial.imageSrc}
            testimonial={testimonial.testimonial}
            author={testimonial.author}
            isActive={testimonial.isActive}
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => {
            setIsAutoPlaying(false);
            prevSlide();
          }}
          className="p-2 text-secondary hover:text-secondary-light transition-colors"
          aria-label="Previous testimonial"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
        <button
          onClick={() => {
            setIsAutoPlaying(false);
            nextSlide();
          }}
          className="p-2 text-secondary hover:text-secondary-light transition-colors"
          aria-label="Next testimonial"
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
      </div>
    </div>
  );
} 