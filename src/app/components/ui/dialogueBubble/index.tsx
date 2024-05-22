import React from 'react';
import styles from './styles.module.scss';


interface DialogueBubbleProps {
  text: string;
}

const DialogueBubble: React.FC<DialogueBubbleProps> = ({ text }) => {
  return (
    <div className={styles.bubble}>
      <div className={styles.text}>{text}</div>
      <div className={styles.arrow}></div>
    </div>
  );
};

export default DialogueBubble;
