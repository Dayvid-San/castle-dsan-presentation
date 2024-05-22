import styles from "./page.module.scss";
import AssistentHour from "./components/assistentHour";
import MissionFrame from "./components/missionFrame";
import Navbars from "./components/navbars";
import RealTimeClock from "./components/realTimeClock";

export default function Home() {
  return (
    <>
      <Navbars />
      <RealTimeClock />
      <MissionFrame />
      <AssistentHour />
    </>
  );
};
