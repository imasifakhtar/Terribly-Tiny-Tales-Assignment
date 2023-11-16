import React, { useState, useEffect } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  const [userData, setUserData] = useState(null);
  const [totalPosts, setTotalPosts] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json');
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
    <div className='App' data-theme={isDark ? "dark" : "light"}>
      <Navbar isDark={isDark} handleChange={() => {setIsDark(!isDark)}} />
      <Profile totalPosts={totalPosts} userData={userData} />
    </div>
  );
}

export default App;
