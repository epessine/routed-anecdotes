import React from 'react';

const Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    borderColor: 'red',
    padding: 10,
    borderWidth: 2
  };

  if (notification) return (
    <p style={style}>
      {notification}
    </p>
  );

  return null;
};

export default Notification;