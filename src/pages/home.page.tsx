import ProfileComponent from '../components/ProfileComponent/profile.component';

const HomePage = () => {
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

export default HomePage;