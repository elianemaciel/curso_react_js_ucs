import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileComponent from '../ProfileComponent/profile.component';

function App() {
  return (
    <div className="App">
      <ProfileComponent
        name="Katherine Johnson"
	      imageUrl="https://i.imgur.com/MK3eW3Am.jpg" />
      <ProfileComponent
        name="Dorothy Vaughan"
	      imageUrl="https://i.imgur.com/7vQD0fPs.jpg" />
      <ProfileComponent
        name="Mary Jackson"
	      imageUrl="https://i.imgur.com/Z9SnKhp.jpg" />
    </div>
  );
}

export default App;
