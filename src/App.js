//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  //Game Score Tracker 
  const [homeScore, homeSetScore] = useState(0);
  const [awayScore, awaySetScore] = useState(0);

// Game Timer
// const Timer = (props) => {
  const [time, setTime] = useState(15);

  useEffect(() => {
    const timeout = setInterval(() => {
      setTime(time - 1);
    },1000);
    return () => {
      clearTimeout(timeout);
    }
  }, [time]);

// }





  return (
    <div className="container">
      <section className="scoreboard">
      <div className="game__name">
        <h1> ODD & EVEN GAME </h1>
        <h2> EXTREME EDITION!</h2>
      </div>
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score" > {homeScore} </div>
          </div>
          <div className="timer">{time}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <h2> I Choose:</h2>
          <button className="homeButtons__touchdown" onClick={() => homeSetScore(homeScore + 7)}>I</button>
          <button className="homeButtons__fieldGoal" onClick={() => homeSetScore(homeScore + 3)}>II</button>
        </div>
        <div className="awayButtons">
          <h2> Computer Chooses:</h2>
          <button className="awayButtons__touchdown" onClick={() => awaySetScore(awayScore + 7)}>I</button>
          <button className="awayButtons__fieldGoal" onClick={() => awaySetScore(awayScore + 3)}>II</button>
        </div>

        <div className='reset'>
          <h1>Reset Game?</h1>
          <button className="game__reset" onClick={() =>{ homeSetScore(0); awaySetScore(0)}}> Yes Please </button>
        </div>

      </section>
    </div>
  );
}

export default App;
