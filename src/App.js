import './styles/App.css';
import ContentSection from './components/ContentSection';
import Header from './components/Header';
import Countdown from './components/Countdown';
import React, { useEffect, useState } from 'react';
import RightSidebar from './components/RightSidebar';
import WidgetBot from './components/WidgetBot';
import FoodParty from './components/FoodParty';
import CommParty from './components/CommParty';
import Footer from './components/Footer';


function App() {
  const [greeting, setGreeting] = useState('');

  const greetings = [
    "Hello, World!",
    "Welcome, Adventurer!",
    "Greetings from the Palia community!",
    "Hi there! Enjoy your stay!",
    "Ready for another adventure?"
  ];

  const targetDate = new Date("2024-09-24T00:00:00");

  useEffect(() => {
    if (greetings.length > 0) {
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      setGreeting(randomGreeting);
    }
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@widgetbot/html-embed";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  console.log("App is running");


  return (
    
    <div className="MainContainer">
      <div>
        <WidgetBot />
      </div>
      <div className="Content">
        <div className="HeaderContainer">
          <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

        </div>

        <div className="ContentSections">
          <ContentSection title="Today's Greeting:" content={greeting} />
          {/* <ContentSection title={`Today's Featured Member: ${featuredMember.name}`} content={featuredMember.bio} /> */}
          <Countdown targetDate={targetDate} />
          <FoodParty />
          <CommParty />
        </div>
        <Footer />

      </div>
      <div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
