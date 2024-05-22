'use client';

import DialogueBubble from '../ui/dialogueBubble';
import Panel from '../ui/panel';
import Styles from './styles.module.scss';
import React, { useState, useEffect } from 'react';


const RealTimeClock: React.FC = () => {
    const date = new Date();
    const [currentTime, setCurrentTime] = useState<Date>(date);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    

    const formattedTime = currentTime.toLocaleTimeString();
    

    return (
        <div className={Styles.container}>
            <Panel>
                <h1 className={Styles.timeString}>{formattedTime}</h1>
            </Panel>
        </div>
    );
};

export default RealTimeClock;
