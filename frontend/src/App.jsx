// src/App.jsx
import React from "react";
import HistoryStart from "./components/HistoryStart";
import Header from "./components/useful/header/Header";
import Assembly from "./components/Assembly";
import Hero from "./components/Hero";
import CupolaView from "./components/CupolaView";
import MicroGravitySim from "./components/MicroGravitySim";
import Experiments from "./components/Experiments";
import ISSLocationMedia from "./components/ISSLocationMedia";
import BackgroundVideo from "./components/BackgroundVideo";
import ISSTimeline from "./components/ISSTimeline";
import MediaGalllery from "./components/MediaGalllery";
import NBLTraining from "./components/NBLTraining";
import SpaceWalks from "./components/SpaceWalks";
import Robotics from "./components/Robotics";
import MediaGallerySunDeploy from "./components/MediaGallerySunDeploy";
import ImageCarousel from './components/useful/ImageCarousel';
import FutureISS from "./components/FutureISS";
import PhysicalChallenges from "./components/PhysicalChallenges";
import MediaGalleryPanoramicView from "./components/MediaGalleryPanoramicView";

function App() {
  return (
    <div>
      <Header />
      <header style={{ textAlign: "center", padding: "20px", background: "#0b3d91", color: "white" }}>
        <h1>ISS Legacy Explorer</h1>
        <p>A Visual Journey through the 25 years of Continuous Exploration of the ISS</p>
      </header>
      <Hero />
      <HistoryStart />
      <Assembly />
      <CupolaView />
      <MicroGravitySim />
      <Experiments />
      <ISSLocationMedia />
      <BackgroundVideo />
      <ISSTimeline />
      <MediaGalllery />
      <NBLTraining />
      <PhysicalChallenges />
      <SpaceWalks />
      <Robotics />
      <MediaGallerySunDeploy />
      <MediaGalleryPanoramicView />
      <ImageCarousel />
      <FutureISS />      

      <footer style={{ textAlign: "center", padding: "20px", background: "#0b3d91", color: "white" }}>
        <p>🌍 NASA Space Apps Challenge - ISS 25 Years Anniversary</p>
      </footer>
    </div>
  );
}
//This is the App component that serves as the main entry point for the ISS Legacy Explorer application. It imports and integrates various components to create a comprehensive user interface that celebrates the 25th anniversary of the International Space Station (ISS). The components included in this file cover a wide range of topics related to the ISS, from its history and assembly to its scientific experiments and future prospects. Each component is designed to provide users with an engaging and informative experience, utilizing images, videos, and interactive elements to showcase the achievements and ongoing activities aboard the ISS.
export default App;
// // Compare this snippet from frontend/src/components/ISSTimeline.jsx:
// // src/components/ISSTimeline.jsx
// // Also compare this snippet from frontend/src/components/ISSLocationMedia.jsx:
// // src/components/ISSLocationMedia.jsx
// Plus Compare this snippet from frontend/src/components/BackgroundVideo.jsx:
// // src/components/BackgroundVideo.jsx
// On Another Hand Compare this snippet from frontend/src/components/Experiments.jsx:
// // src/components/Experiments.jsx
// Never Forget Compare this snippet from frontend/src/components/CupolaView.jsx:
// // src/components/CupolaView.jsx