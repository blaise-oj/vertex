import About from "../../Components/About/About";
import Features from "../../Components/Features/Features";
import Hero from "../../Components/Hero/Hero";
import NewsPreview from "../../Components/NewsPreview/NewsPreview";
import Services from "../../Components/Services/Services";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import VideoSection from "../../Components/VideoSection/VideoSection";
import { useState } from "react";

const HomePage = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <About />
      <VideoSection setPlayState={setPlayState} />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <NewsPreview />
    </>
  );
};

export default HomePage;