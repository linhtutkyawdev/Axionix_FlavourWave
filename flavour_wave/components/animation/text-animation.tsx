import React, { useEffect, useState } from "react";
import styles from "@/style/text-animation-style.module.css"; // Import your CSS module file
import { cn } from "@/lib/utils";

interface TextAnimationProps {
  labels: string[]; // Change 'subLabel' to 'labels'
  className?: string;
  content?: string;
}

const TextAnimation = ({ labels, className, content }: TextAnimationProps) => {
  const [currentLabelIndex, setCurrentLabelIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(1);
  const [x, setX] = useState(1);
  const [waiting, setWaiting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const currentLabel = labels[currentLabelIndex];
    const labelLength = currentLabel.length;

    const intervalOne = setInterval(() => {
      if (letterCount === 0 && !waiting) {
        setWaiting(true);
        setX(1);
        setLetterCount((prevCount) => prevCount + x);
        setWaiting(false);
      } else if (letterCount === labelLength + 1 && !waiting) {
        setWaiting(true);
        setTimeout(() => {
          setX(-1);
          setLetterCount((prevCount) => prevCount + x);
          setWaiting(false);
        }, 1000);
      } else if (!waiting) {
        setLetterCount((prevCount) => prevCount + x);
      }
    }, 120);

    const intervalTwo = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 400);

    return () => {
      clearInterval(intervalOne);
      clearInterval(intervalTwo);
    };
  }, [letterCount, waiting, x, labels, currentLabelIndex]);

  useEffect(() => {
    const labelLength = labels[currentLabelIndex].length;
    if (letterCount > labelLength + 1) {
      setLetterCount(0);
      setCurrentLabelIndex((prevIndex) => (prevIndex + 1) % labels.length);
    }
  }, [letterCount, labels, currentLabelIndex]);

  return (
    <div className={cn("console-container", className)}>
      <span>
        {content}{" "}
        <b className="text-sky-700 dark:text-yellow-500 italic">
          {labels[currentLabelIndex].substring(0, letterCount)}
        </b>
      </span>
      <div className={styles["console-underscore"]}>
        {visible && <span>|</span>}
      </div>
    </div>
  );
};

export default TextAnimation;
