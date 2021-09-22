import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const Todos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  console.log(todos);
  return (
    <>
      {todos ? (
        <div>
          {todos.map((todo) => {
            const { title, completed } = todo;
            return (
              <div>
                <h4>{title}</h4>
                <h6>{completed}</h6>
              </div>
            );
          })}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Todos;
