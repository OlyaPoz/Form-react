import React from 'react';
import styles from './TaskHeader.module.scss';

const TaskHeader = props => {
  return (
    <div className="styles.container">
      <a href='#'>
        <img src='/staticAssets/icon/menu.svg' alt='menu' />
      </a>
      <h1 className="styles.headingToDo">Website todo</h1>
    </div>
  );
};

export default TaskHeader;
