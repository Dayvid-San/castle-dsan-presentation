'use client';

import Styles from './styles.module.scss';
import Assistent from '../ui/assistent';
import { useState } from 'react';


const AssistentHour = () => {
    const date = new Date();
    const hour = date.getHours();
    const [count, setCount] = useState(0);
    const phrases = [
        "Olá! Sou Percival, à vossa disposição. Tenho a honra de ser o guardião deste lugar e serei o vosso guia durante a vossa estada. Sr. Dayvid, meu lorde, me instruiu a guia-los",
        "Rogo-vos que não vos preocupeis com a desordem presente! Fui tomado por grande entusiasmo ao preparar vossa recepção e desejei ardentemente vossa chegada o mais breve possível.",
    ]

    const message = (hour: number) => {
        const stringSpeakerDay = phrases[count]

        return phrases.length <= count ? "Bem, o nosso momento juntos acaba aqui. Espero ver-lhe em breve" : phrases.length < 0 ? "Clique em continuar!" : stringSpeakerDay
    };

    const rightNowTime = message(hour);

    return (
        <>
            <div className={Styles.container}>
                <button className='btn_presentation' onClick={() => setCount(count - 1)}>
                    Voltar
                </button>
                _
                <button className='btn_presentation' onClick={() => setCount(count + 1)}>
                    Continuar
                </button>
                <Assistent text={rightNowTime} />
            </div>
        </>
    );
};

export default AssistentHour;
