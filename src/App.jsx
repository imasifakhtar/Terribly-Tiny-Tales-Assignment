import React, { useState, useEffect } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  const [userData, setUserData] = useState(null);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../data.json');
        const data = await response.json();
        setUserData(data);
        setTotalPosts(data.posts.length);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Profile userData={userData} />
    </>
  );
}

export default App;
