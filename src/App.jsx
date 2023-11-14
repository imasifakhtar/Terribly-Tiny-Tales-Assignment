import React, { useState, useEffect } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Profile from "./components/Profile";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../data.json');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Profile userData={userData} />
      <Posts userData={userData}/>
    </>
  );
}

export default App;
