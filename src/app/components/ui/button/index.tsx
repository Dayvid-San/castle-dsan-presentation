'use client';

import Styles from './styles.module.scss';
import { useEffect, useRef } from 'react';


interface ButtonConfig {
    key: number,
    label: string,
};

const Button = (config: ButtonConfig) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('../soundEffects/click-sound.mp3');
    }
  }, []);

  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

    return (
        <>
            <button className={Styles.btn} onClick={handleButtonClick} key={config.key}>
                {config.label}
            </button>
        </>
    );
};

export default Button;