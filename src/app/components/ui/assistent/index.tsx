import Styles from './styles.module.scss';
import DialogueBubble from '../dialogueBubble';
import Image from 'next/image';
import image from '../../../../../public/Assistente.png';


interface assistentConfig {
    text: string,
};

const Assistent = (config: assistentConfig) => {
    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.dialogueBubble}>
                    <DialogueBubble text={config.text} />
                </div>
                <Image className={Styles.assistent} src={image} alt='Imagem do assistente' />
            </div>
        </>
    );
};

export default Assistent;