// src/App.jsx
import React from "react";
import HistoryStart from "./components/HistoryStart";
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
      <header style={{ textAlign: "center", padding: "20px", background: "#0b3d91", color: "white" }}>
        <h1>ISS Legacy Explorer</h1>
        <p>Uma jornada visual pelos 25 anos da Estação Espacial Internacional</p>
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
        <p>🌍 NASA Space Apps Challenge - ISS 25 anos</p>
      </footer>
    </div>
  );
}

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