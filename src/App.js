import './styles/App.css';
import ContentSection from './components/ContentSection';
import NavBar from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import Countdown from './components/Countdown';
import React, { useEffect, useState } from 'react';
import TwitterEmbed from './components/TwitterEmbed';
import RightSidebar from './components/RightSidebar';
import WidgetBot from './components/WidgetBot';
import FoodParty from './components/FoodParty';
import CommParty from './components/CommParty';


function App() {
  const [greeting, setGreeting] = useState('');
  const [featuredMember, setFeaturedMember] = useState('');

  const greetings = [
    "Hello, World!",
    "Welcome, Adventurer!",
    "Greetings from the Palia community!",
    "Hi there! Enjoy your stay!",
    "Ready for another adventure?"
  ];

  const members = [
    { name: 'Alice', bio: 'Expert in crafting.' },
    { name: 'Bob', bio: 'Master of exploration.' },
  ];
  const targetDate = new Date("2024-09-24T00:00:00");

  useEffect(() => {
    if (greetings.length > 0) {
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      setGreeting(randomGreeting);
    }

    if (members.length > 0) {
      const randomMember = members[Math.floor(Math.random() * members.length)];
      setFeaturedMember(randomMember);
    }
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@widgetbot/html-embed";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="MainContainer">
      {/* <div>
        <LeftSidebar />
      </div> */}
      <div>
        <WidgetBot />
      </div>


      <div className="Content">
        <div className="HeaderContainer">
          <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
         
        </div>

        <div className="ContentSections">
          <ContentSection title="Today's Greeting:" content={greeting} />
          <Countdown targetDate={targetDate} />

          {/* <ContentSection title={`Today's Featured Member: ${featuredMember.name}`} content={featuredMember.bio} /> */}
          <FoodParty />
          <CommParty />

        </div>
      </div>

      <div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
