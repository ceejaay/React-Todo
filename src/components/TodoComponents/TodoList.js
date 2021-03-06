// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//
import React from 'react';
const TodoList = props => {
  return (
      <div>
        {props.list.map((item, index) => {return <p
          className={item.complete ? 'done' : 'notDone'}
          key={index}
          onClick={ () => {props.crossOut(index)}
         }>{item.item}
        </p>})}
      </div>
      );
};

export default TodoList;
