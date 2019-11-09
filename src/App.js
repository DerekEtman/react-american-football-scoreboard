//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  //Game Score Tracker 
  const [homeScore, homeSetScore] = useState(0);
  const [awayScore, awaySetScore] = useState(0);
  
  var totalAmt = awayScore + homeScore;
  console.log("totalAmt: ", totalAmt);
   
  // Game Timer
// const Timer = (props) => {
  const [time, setTime] = useState(5);

  function randNum(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);          
   return Math.floor(Math.random()* (max-min)) + min;
}

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(time - 1);

      if ( time === 1){
       const compChoice = awaySetScore (randNum(1,3)); 
        }  
      },1000);

      setTimeout(() => {
        clearTimeout(timeout);
      },5000)

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
            <h2 className="home__name">You Attack With!</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score" > {homeScore} </div>
          </div>
          <div className="timer">{time}</div>
          <div className="away">
            <h2 className="away__name">Computer Attacks With!</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <h2> I Choose:</h2>
          <button className="homeButtons__touchdown" onClick={() => homeSetScore(homeScore + 1)}>I</button>
          <button className="homeButtons__fieldGoal" onClick={() => homeSetScore(homeScore + 2)}>II</button>
        </div>
        {/* <div className="awayButtons">
          <h2> Computer Chooses:</h2>
          <button className="awayButtons__touchdown" onClick={() => awaySetScore(awayScore + 1)}>I</button>
          <button className="awayButtons__fieldGoal" onClick={() => awaySetScore(awayScore + 2)}>II</button>
        </div> */}

        <div className='reset'>
          <h1>Game Options?</h1>
          <button className="game__reset" onClick={() =>{ homeSetScore(0); awaySetScore(0); setTime(5)}}> Reset Game </button>
        </div>

      </section>
    </div>
  );
}

export default App;
