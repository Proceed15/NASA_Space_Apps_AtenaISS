Project Executive Summary: Atena - ISS Legacy Explorer

Atena is a rich, interactive web application conceived as a digital tribute to the 25-year legacy of the International Space Station (ISS). More than a static webpage, it functions as an immersive digital museum, designed to educate, inspire, and engage users by telling the story of the ISS through dynamic media and real-time data. The project's core mission is to translate the monumental achievements of the ISS into a modern, accessible, and fascinating user experience, making the wonders of space exploration tangible for a global audience.
The User Experience: A Narrative Journey
The application is designed to guide the user through a narrative journey, starting with a powerful first impression and then inviting deeper exploration into various facets of the ISS's history and operation.
1. The Hero Section: An Immersive Welcome
The user's journey begins with a full-screen, high-impact hero section. This is not a static banner but a dynamic portal into the world of the ISS.
 * Integrated Media Carousel: A central feature is the wide-screen carousel that seamlessly blends high-resolution NASA images with auto-playing, muted video clips. This creates constant, captivating movement that immediately draws the user in.
 * Overlayed Navigation Menu: Floating elegantly on top of the carousel is the main navigation menu. This design choice creates a sense of depth and keeps essential links accessible without detracting from the visual experience. The menu provides direct links to the official NASA ISS page, a live API endpoint for the station's position, and the project's own backend API.
2. Real-Time Connection: The ISS Tracker
Immediately grounding the user in the present, this module features a map of the world with a marker indicating the real-time position of the ISS. By fetching live data from the Open Notify API every few seconds, this component transforms the station from an abstract concept into a tangible object orbiting our planet right now.
3. Thematic Exploration: Interactive Carousels
The application is structured around key themes, each presented in a unique, interactive format:
 * Spacewalks (EVAs): A vertically scrolling carousel takes the user through a series of cards, each detailing a historic spacewalk. This module is designed to handle mixed media, seamlessly displaying both images and videos with their corresponding titles and descriptions, creating a story-like progression.
 * Cupola View & Assembly: Horizontal carousels showcase breathtaking views from the station's seven-windowed Cupola and key moments from its 13-year assembly process. The horizontal scroll is intuitive and allows for a panoramic, cinematic feel.
4. Immersive Media Content
Beyond simple carousels, the project integrates video in more immersive ways:
 * Background Videos: Sections of the site use full-screen background videos to create an ambient, engaging atmosphere, with text and buttons overlaid to provide context or calls-to-action.
 * Custom Video Players: To give the user control, the application features custom-built video players. These players hide the default browser controls, initially showing a thumbnail and a central play button. When clicked, the overlay disappears, the video plays, and the button intelligently switches to a "Pause" icon, creating a clean and professional viewing experience.
Technical Architecture & Implementation
The Atena project is built on a modern, robust, and scalable technology stack, separating concerns between the frontend, backend, and database.
Frontend
 * Framework: The entire user interface is built as a Single-Page Application (SPA) using React. This allows for a fast, fluid user experience without page reloads.
 * Build Tool: Vite is used for its incredibly fast development server and optimized build process.
 * Component-Based Structure: The application is highly modular. Every distinct feature—the Header, Carousel, ISSMap, VideoPlayer, SpaceWalks carousel—is encapsulated in its own reusable component. This makes the codebase clean, maintainable, and easy to scale.
 * Styling: Styling is handled through a combination of CSS-in-JS (inline style objects within components) and separate .css files imported into their respective components. This provides both dynamic styling capabilities and the power of traditional CSS.
Backend
 * Runtime & Framework: A lightweight backend server is built with Node.js and the Express.js framework.
 * Purpose: Its primary function is to serve data from the project's database via a RESTful API. The CORS package is used to allow the frontend application (running on a different port) to securely request data from the server.
Database
 * System: The project uses a MySQL / MariaDB relational database, managed locally via XAMPP.
 * Schema: The database stores information that complements the live NASA APIs, such as user data, experiment details, or curated lists of media, allowing the application to have its own persistent data layer.
Version Control & Deployment
 * Version Control: Git is used for tracking changes, and GitHub serves as the remote repository for the codebase.
 * Code Editor: The entire project was developed within Visual Studio Code, utilizing its integrated terminal and Git features.
