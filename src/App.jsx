import Header from "./components/Header/Header";
import "./App.css";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import TeachingSection from "./components/TeachingSection";
import InfoSection from "./components/InfoSection";
import { Fragment, useState } from "react";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import Contacts from "./components/Contacts";
import EffectSection from "./components/EffectSection";
import Media from "./components/Media";

function App() {
  const [visible, setVisible] = useState(true);
  const [tab, setTab] = useState("effect");

  // setTimeout(() => setVisible(false), 3000);

  return (
    /* нам всегда нужен корневой элемент, так что мы всегда оборачваем app в div Чтобы не нагружать браузер лишним дивом мы используем  react Fragment, ее можно написать как просто <> </> */
    <>
      { visible && <Header />}
      <main>
        <IntroSection
          active={tab}
          onChange={(currentPage) => setTab(currentPage)}
        />
        <TabsSection
          active={tab}
          onChange={(currentPage) => setTab(currentPage)}
        />

        {tab === "main" && (
          <>
            <TeachingSection />
            <InfoSection />
          </>
        )}
        {tab === "feedback" && (
          <>
            <FeedbackSection />
          </>
        )}
        {tab === "contacts" && (
          <>
            <Contacts />
          </>
        )}
        {tab === "effect" && (
          <>
            <EffectSection />
          </>
        )}
        {tab === "media" && (
          <>
            <Media />
          </>
        )}
      </main>
    </>
  );
}

export default App;
