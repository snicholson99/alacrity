import { useState } from 'react';
import Chore from "./components/Chore";
import './App.css';

const App = () => {
  const [isColdShowerDone, updateIsColdShowerDone] = useState(false);
  const [isEatFruitDone, updateIsEatFruitDone] = useState(false);
  const [isRunDone, updateIsRunDone] = useState(false);
  const [isProjectDone, updateIsProjectDone] = useState(false);
  const [isDumbbellsDone, updateIsDumbbellsDone] = useState(false);
  const [isBSUCDone, updateIsBSUCDone] = useState(false);
  const tickNoise = new Audio("/tick.mp3");
  
  
  const onColdShowerChange = () => {
    updateIsColdShowerDone(!isColdShowerDone);
    tickNoise.play();
    // checkIfAllChoresDone();
  }

  const onEatFruithange = () => {
    updateIsEatFruitDone(!isEatFruitDone);
    tickNoise.play();
  }
  
  const onRunChange = () => {
    updateIsRunDone(!isRunDone);
    tickNoise.play();
  }
  
  const onProjectChange = () => {
    updateIsProjectDone(!isProjectDone);
    tickNoise.play();
  }
  
  const onDumbbellsChange = () => {
    updateIsDumbbellsDone(!isDumbbellsDone);
    tickNoise.play();
  }
  
  const onBSUCChange = () => {
    updateIsBSUCDone(!isBSUCDone);
    tickNoise.play();
  }

  return (
    <div className="App">
      <Chore 
        isChoreDone={isColdShowerDone}
        onChoreChange={onColdShowerChange}
        choreName="Cold Shower"
        iconClassName="fas fa-temperature-low"
      />
      <Chore 
        isChoreDone={isEatFruitDone}
        onChoreChange={onEatFruithange}
        choreName="Eat Fruit"
        iconClassName="fas fa-apple-alt"
      />
      <Chore 
        isChoreDone={isRunDone}
        onChoreChange={onRunChange}
        choreName="Run"
        iconClassName="fas fa-running"
      />
      <Chore 
        isChoreDone={isProjectDone}
        onChoreChange={onProjectChange}
        choreName="Project"
        iconClassName="fas fa-code"
      />
      <Chore 
        isChoreDone={isDumbbellsDone}
        onChoreChange={onDumbbellsChange}
        choreName="Dumbbells"
        iconClassName="fas fa-dumbbell"
      />
      <Chore 
        isChoreDone={isBSUCDone}
        onChoreChange={onBSUCChange}
        choreName="BSU Challenge"
        iconClassName="fas fa-arrow-circle-up"
      />
      {/* {allChoresDone && (
        <p>Woop woop! All chores are done for today.</p>
      )} */}
    </div>
  );
}

export default App;
