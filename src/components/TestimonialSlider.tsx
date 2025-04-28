"use client";
import React, { useCallback, useMemo, useReducer } from "react";
import { useSwipeable } from "react-swipeable";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Testimonial {
  id: number;
  imageSrc: string;
  testimonial: string;
  author: string;
}

const PREV = "PREV";
const NEXT = "NEXT";
type Direction = typeof PREV | typeof NEXT;

interface CarouselState {
  position: number;
  sliding: boolean;
  direction: Direction;
}

type CarouselAction = { type: Direction; numItems: number } | { type: "STOP" };

const getOrder = (index: number, position: number, numItems: number) => {
  return index - position < 0
    ? numItems - Math.abs(index - position)
    : index - position;
};

const getInitialState = (numItems: number): CarouselState => ({
  position: numItems - (numItems % 2 === 0 ? 2 : 1),
  sliding: false,
  direction: NEXT,
});

function reducer(state: CarouselState, action: CarouselAction): CarouselState {
  switch (action.type) {
    case PREV:
      return {
        direction: PREV,
        sliding: true,
        position:
          state.position === 0 ? action.numItems - 1 : state.position - 1,
      };
    case NEXT:
      return {
        direction: NEXT,
        sliding: true,
        position:
          state.position === action.numItems - 1 ? 0 : state.position + 1,
      };
    case "STOP":
      return {
        ...state,
        sliding: false,
      };
    default:
      return state;
  }
}

export const TestimonialSlider: React.FC<{ children: React.ReactNode }> = ({
  children: childrenProp,
}) => {
  const children = useMemo(() => {
    if (React.Children.count(childrenProp) % 5 === 0) return [childrenProp];

    const result: React.ReactNode[] = [childrenProp];
    const arrayChildren = React.Children.toArray(childrenProp);

    let i = 0;
    while (React.Children.count(result) % 5 !== 0) {
      result.push(arrayChildren[i]);
      i++;
    }
    return result;
  }, [childrenProp]);

  const numChildren = React.Children.count(children);

  const [state, dispatch] = useReducer(reducer, getInitialState(numChildren));

  const slide = (direction: Direction) => {
    dispatch({ type: direction, numItems: numChildren });
    setTimeout(() => dispatch({ type: "STOP" }), 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="relative" {...handlers}>
      <div className="w-full overflow-hidden">
        <div
          className="flex justify-center items-center gap-20 transform-gpu"
          style={{
            transition: state.sliding ? "none" : "all 1s ease",
            transform: !state.sliding
              ? `translateX(-30rem -5rem)`
              : state.direction === PREV
                ? `translateX(calc(2 * (-30rem -5rem)))`
                : `translateX(0%)`,
          }}
        >
          {React.Children.map(children, (child, index) => {
            const order = getOrder(index, state.position, numChildren)
            const isActive = order === 2
            return (
            <div
              style={{
                transition: "all 100ms ease",
                order: order,
                opacity: isActive ? 1 : 0.5,
                scale: isActive ? 1 : 0.9,
              }}
            >
              {child}
            </div>
          )})}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          id="PREV"
          onClick={() => slide(PREV)}
          className="p-2 text-secondary hover:text-secondary-light transition-colors"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft size={35} />
        </button>
        <button
          id="NEXT"
          onClick={() => slide(NEXT)}
          className="p-2 text-secondary hover:text-secondary-light transition-colors"
          aria-label="Next testimonial"
        >
          <FaChevronRight size={35} />
        </button>
      </div>
    </div>
  );
};
