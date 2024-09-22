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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Community from './components/Community';
import FAQ from './components/FAQ'
import UpcomingEvents from './components/UpcomingEvents';

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

  return (
    <Router>
      <div className="MainContainer">
        <div>
          <WidgetBot />
        </div>

        <Routes>
          <Route
            path="/community"
            element={
              <div className="Content">
                <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                <Community />
                <Footer />
              </div>
            }
          />
          <Route
            path="/faq"
            element={
              <div className="Content">
                <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                <FAQ />
                <Footer />
              </div>
            }
          />
          <Route
            path="/upcoming-events"
            element={
              <div className="Content">
                <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                <UpcomingEvents />
                <Footer />
              </div>
            }
          />

          <Route
            path="/"
            element={
              <div className="Content">
                <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                <ContentSection title="Today's Greeting:" content={greeting} />
                <Countdown targetDate={targetDate} />
                <FoodParty />
                <CommParty />
                <Footer />
              </div>
            }
          />
        </Routes>

        <div>
          <RightSidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;
