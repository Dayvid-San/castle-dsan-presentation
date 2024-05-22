import Styles from './styles.module.scss';
import React from 'react';


type PanelConfig = {
    children: React.ReactNode;
};

const Panel: React.FC<PanelConfig> = ({ children }) => {
    return <div className={Styles.panel_Midland}>{children}</div>;
};

export default Panel;