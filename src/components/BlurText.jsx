import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';


export function BlurText({
  text,
  delay = 0,
  className = '',
  wordDelay = 0.2,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setShow(true), delay * 1000);
    }
  }, [isInView, delay]);

  const words = text.split(" ");
  
  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block mr-[0.25em] overflow-hidden leading-none">
          <motion.span
            className="inline-block"
            initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
            animate={show ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: i * wordDelay,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
