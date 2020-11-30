import { Component } from 'react';
import Chore from "./components/Chore";
import './App.css';

import { chores } from "./chores";

const tickNoise = new Audio("/tick.mp3");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = chores.reduce((acc, cur) => ({
      ...acc,
      [cur.name]: Boolean(JSON.parse(localStorage.getItem(cur.name)))
    }), {});
  }
  
  onChoreClick = (choreName) => {
    this.setState(prevState => ({
      [choreName]: !prevState[choreName],
      // allChoresDone: !prevState.includes(false),
      allChoresDone: !Object.keys(prevState).some(k => !prevState[k])
    }), () => {
      localStorage.setItem(choreName, JSON.stringify(this.state[choreName]));
    });
    tickNoise.play();
    // checkIfAllChoresDone();
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        {chores.map((chore, i) => (
          <Chore
            key={i}
            isChoreDone={this.state[chore.name]}
            onChoreClick={() => this.onChoreClick(chore.name)}
            choreName={chore.name}
            iconClassName={chore.iconClassName}
          />
        ))}
        {/* {allChoresDone && (
          <p>Woop woop! All chores are done for today.</p>
        )} */}
      </div>
    );
  }
}

export default App;
