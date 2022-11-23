import { useState } from "react";
import Star from "../assets/star.svg";

const ratings: number[] = [];
for (let i = 0; i < 10; i++) {
  ratings.push(i);
}

type RatingProps = {
  current?: number;
  onChange: (newVal?: number) => void;
};

type RatingElementProps = {
  index: number;
  current: number | undefined;
  currentFocus: number | undefined;
  onChange: (newVal?: number) => void;
  setCurrentFocus: (value: number | undefined) => void;
};

const RatingElement = ({
  index,
  current,
  currentFocus,
  onChange,
  setCurrentFocus,
}: RatingElementProps) => {
  const classNames = ["rating-icon"];

  if (index % 2 === 1) {
    classNames.push("rating-icon--right");
  }

  if (current !== undefined && index <= current) {
    classNames.push("rating-icon--selected");
  }

  if (currentFocus !== undefined && index <= currentFocus) {
    classNames.push("rating-icon--potentially-selected");
  }
  /* prettier-ignore */
  const ariaLabel = [
    current
      ? `Current rating is ${new Intl.NumberFormat().format( (current + 1) / 2 )}. `
      : `Current rating is not set. `,
    "Click to ",
    index === current
      ? "remove rating"
      : `set rating to ${new Intl.NumberFormat().format((index + 1) / 2)}`,
  ];

  return (
    <button
      key={index}
      onClick={() => onChange(index === current ? undefined : index)}
      onMouseOver={() => setCurrentFocus(index)}
      onMouseOut={() => setCurrentFocus(undefined)}
      onFocus={() => setCurrentFocus(index)}
      onBlur={() => setCurrentFocus(undefined)}
      className={classNames.join(" ")}
      aria-label={ariaLabel.join("")}
    >
      <Star />
    </button>
  );
};

export const Rating = ({ current, onChange }: RatingProps) => {
  useState();

  let [currentFocus, setCurrentFocus] = useState<number | undefined>(undefined);

  const ariaLabel =
    current === undefined
      ? "Artwork has no rating "
      : `Current rating is ${new Intl.NumberFormat().format(
          (current + 1) / 2
        )}`;

  return (
    <div className="rating" aria-label={ariaLabel}>
      {ratings.map((index) => (
        <RatingElement
          key={index}
          index={index}
          current={current}
          currentFocus={currentFocus}
          onChange={onChange}
          setCurrentFocus={setCurrentFocus}
        />
      ))}
    </div>
  );
};
