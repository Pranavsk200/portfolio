import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';

const Typewriter = ({
  text,
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  showCursor = true,
  cursorCharacter = "|",
  textColors = [],
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0); // Character index
  const [isDeleting, setIsDeleting] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const sentences = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  useEffect(() => {
    const timer = setTimeout(() => setIsStarted(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  useEffect(() => {
    if (!isStarted) return;

    let timer;
    const currentSentence = sentences[sentenceIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Deleting logic
        if (displayedText === "") {
          setIsDeleting(false);
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
          setIndex(0);
        } else {
          timer = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        // Typing logic
        if (index < currentSentence.length) {
          timer = setTimeout(() => {
            setDisplayedText((prev) => prev + currentSentence[index]);
            setIndex((prev) => prev + 1);
          }, typingSpeed);
        } else if (sentences.length > 1 || loop) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    handleTyping();
    return () => clearTimeout(timer);
  }, [index, displayedText, isDeleting, isStarted, sentences, sentenceIndex, typingSpeed, deletingSpeed, pauseDuration, loop]);

  return (
    <span style={{ color: textColors[sentenceIndex % textColors.length] || "inherit" }}>
      {displayedText}
      {showCursor && (
        <span 
          style={{ 
            marginLeft: "2px", 
            animation: "blink 1s step-end infinite" 
          }}
        >
          {cursorCharacter}
        </span>
      )}
      <style>{`
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default Typewriter;