import React, { useState } from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import CreateNew from './components/CreateNew';
import AnecdoteList from './components/AnecdoteList';
import About from './components/About';
import Anecdote from './components/Anecdote';
import Notification from './components/Notification';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ]);
  const [notification, setNotification] = useState('');

  let lastNotification;
  const addNotification = message => {
    clearTimeout(lastNotification);
    setNotification(message);
    lastNotification = setTimeout(() => {
      setNotification('');
    }, 4000);
  };

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  /* const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    };

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a));
  }; */

  return (
    <Router>
      <h1>Software anecdotes</h1>
      <Menu />
      <Notification notification={notification}/>
      <Switch>
        <Route path="/anecdotes/:id">        
          <Anecdote anecdotes={anecdotes} />      
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/create">
          <CreateNew 
            addNew={addNew}
            addNotification={addNotification}
          />
        </Route>
        <Route path="/">
          <AnecdoteList anecdotes={anecdotes} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;