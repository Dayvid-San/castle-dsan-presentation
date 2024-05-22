import Panel from "../ui/panel";
import Styles from './styles.module.scss';



const MissionFrame = () => {
    return (
        <>
            <div className={Styles.container}>
                <Panel>
                    <h2>
                        Quadro de missões
                    </h2>
                    <ul className={Styles.listMission}>
                        <p>Este um quadro onde colocamos nossos objetivos.</p>
                        <p>É possível criar varios desses quadros para os diferentes objetivos como:</p>
                        <li>Listas de tarefas importantes</li>
                        <li>Lembrentes</li>
                        <li>Assuntos que quer dar atenção</li>
                        <li>Coisas interessantes para ver depois</li>
                    </ul>
                </Panel>
            </div>
        </>
    );
};

export default MissionFrame;