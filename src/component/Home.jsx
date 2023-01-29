import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/quiz");
  };

  return (
    <div className="home__main">
      <h3 className="text-center">Start Quiz</h3>
      <button
        className="btn btn-success startQuizBtn"
        onClick={handleNavigation}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
