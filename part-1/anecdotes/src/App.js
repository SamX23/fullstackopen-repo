import { useState } from "react";
import Anecdote from "./components/Anecdote";
import Buttons from "./components/Buttons";

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

  const newAnecdotes = [...anecdotes];
  const [selected, setSelected] = useState(0);
  const [selectMax, setSelectMax] = useState();
  const random = () => Math.floor(Math.random() * anecdotes.length);
  const nextAnecdote = () => setSelected(random);

  const addVote = () => {
    newAnecdotes[selected].vote += 1;
    setAnecdotes(newAnecdotes);
    mostVotes();
  };

  const mostVotes = () => {
    let vote = [];
    let text = [];

    newAnecdotes.map((item) => {
      vote.push(item.vote);
      text.push(item.text);
    });

    setSelectMax({
      text: text[vote.indexOf(Math.max(...vote))],
      vote: Math.max(...vote),
    });
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes[selected]} />

      <Buttons events={addVote} text="Vote" />
      <Buttons events={nextAnecdote} text="Next" />

      {selectMax ? (
        <>
          <h1>Anecdote with most votes</h1>
          <Anecdote anecdotes={selectMax} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
