import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Todo = () => {
  const { id } = useParams();
  let history = useHistory();
  const [todoDetails, setTodoDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodo = res.data;
        setTodoDetails(responseTodo);
      });
  }, []);
  const { id: todoId, userId, title, completed } = todoDetails || {};
  return (
    <div
      style={{
        backgroundColor: "orange",
        height: "100vh",
        color: "white",
        padding: "15px"
      }}
    >
      {todoDetails ? (
        <div>
          <h1> {`Todo card ${todoId}`} </h1>
          <hr />
          <h2> {`Todo userId: ${userId}`} </h2>
          <h2> {`Todo title: ${title}`} </h2>
          <h2> {`Todo completed: ${completed}`} </h2>
          <button
            onClick={() => history.push(`/`)}
            style={{
              backgroundColor: "orange",
              color: "white",
              padding: "15px",
              borderRadius: "10px",
              border: "2px solid white ",
              cursor: "pointer"
            }}
          >
            {` < Go Back`}
            {/* above using template literals to edit the string
           cause i wanted to add '<' infront */}
          </button>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;
