import React from 'react';
import { useHistory } from 'react-router-dom';
import { useField } from '../hooks/use-field';

const CreateNew = ({ addNew, addNotification }) => {
  const history = useHistory();
  const content = useField('text');
  const author = useField('text');
  const info = useField('text');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    });
    history.push('/');
    addNotification(`a new anecdote ${content.value} created!`);
  };
  const resetAll = (e) => {
    e.preventDefault();
    content.reset();
    author.reset();
    info.reset();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content.inputFields} />
        </div>
        <div>
          author
          <input {...author.inputFields} />
        </div>
        <div>
          url for more info
          <input {...info.inputFields} />
        </div>
        <button>create</button>
        <button onClick={resetAll}>reset</button>
      </form>
    </div>
  );
};

export default CreateNew;