import React, { useState, useEffect } from "react";

import axios from "axios";
function DataFetching() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        console.log(res);
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
