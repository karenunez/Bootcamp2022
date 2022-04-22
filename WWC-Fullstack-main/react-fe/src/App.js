import "./styles/App.css";
import NavBar from "./components/NavBar";
import FeaturedPost from "./components/FeaturedPost";
import ListPost from "./components/ListPost";
import posts from "./resources/posts";
import CreatePost from "./components/CreatePost";
import React, { Component, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <NavBar onPress={() => setIsVisible(true)} />
      //if(isVisible) <Component />
      condition ? true : false // for this time
      {isVisible ? (
        <CreatePost />
      ) : (
        <>
          <FeaturedPost
            updatedAt={"May 13 2021"}
            height={250}
            width={250}
            title={"The Internet of Medical Things: The Healthcare Revolution"}
            content={
              "Since the Pandemic started, we have experienced a growing dependency on technology in the healthcare industry, which demands continuous innovation to deal with the new health dangers."
            }
            image={"https://www.w3schools.com/tags/img_girl.jpg"}
          />
        </>
      )}
      <ListPost posts={posts()} />
    </div>
  );
}

export default App;
