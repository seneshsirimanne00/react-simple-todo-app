import React from "react";
import { useHistory } from "react-router-dom";

const TodoCard = (props) => {
  const { todo } = props; //destructuring props object
  const { id, completed, title } = todo;
  let history = useHistory(); //use history hook

  return (
    <div
      style={{
        backgroundColor: "orange",
        color: "white",
        margin: "10px",
        padding: "15px",
        borderRadius: "10px",
        width: "150px",
        cursor: "pointer"
      }}
      onClick={() => history.push(`/todo/${id}`)}
      //this onClick() changes the url so it'll show todo component
    >
      <h4> {title} </h4>
      <h6> {`Completed: ${completed}`} </h6>
    </div>
  );
};

export default TodoCard;
