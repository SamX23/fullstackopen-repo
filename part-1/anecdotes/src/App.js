import { useEffect, useState } from "react";
import Anecdote from "./components/Anecdote";

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    { text: "If it hurts, do it more often", vote: 0 },
    {
      text: "Adding manpower to a late software project makes it later!",
      vote: 0,
    },
    {
      text: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      vote: 0,
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      vote: 0,
    },
    { text: "Premature optimization is the root of all evil.", vote: 0 },
    {
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      vote: 0,
    },
    {
      text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
      vote: 0,
    },
  ]);

  const [selected, setSelected] = useState(0);
  // const [vote, setVote] = useState(anecdotes[selected].vote);

  const random = () => Math.floor(Math.random() * anecdotes.length);
  const nextAnecdote = () => setSelected(random);

  const addVote = () => {
    // setVote(vote + 1);
    // anecdotes[selected].vote += 1;
    // setAnecdotes({
    //   ...anecdotes,
    //   text: anecdotes[selected].text,
    //   vote: anecdotes[selected].vote + 1,
    // });

    // setAnecdotes([
    //   ...anecdotes,
    //   {
    //     ...anecdotes,
    //     vote: anecdotes[selected].vote + 1,
    //   },
    // ]);

    console.log(anecdotes);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes[selected]} />

      <button onClick={addVote}>Vote</button>
      <button onClick={nextAnecdote}>Next</button>

      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes={anecdotes[selected]} />
    </div>
  );
};

export default App;
