import React from 'react';
import { useParams } from 'react-router-dom';

const Anecdote = ({ anecdotes }) => {
  const id = useParams().id;
  const anecdote = anecdotes.find(a => a.id === id);

  return (
    <div>
      <h2>{`${anecdote.content} by ${anecdote.author}`}</h2>
      <p>{`has ${anecdote.votes} votes`}</p>
      <span>for more info see </span> 
      <a href={anecdote.info}>{anecdote.info}</a>
    </div>
  )
};

export default Anecdote;