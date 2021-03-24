import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const getUrl = "https://examplebd.com/api/get-csrf-token";
const postUrl = "https://examplebd.com/api/live-classes?user_id=10089";

const Test = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState([]);

  // GET
  const getToken = async () => {
    const { data } = await axios.get(getUrl);
    setToken(data);
  };

  // Post
  const postUser = async () => {
    await axios
      .post(postUrl, {
        name: "amir",
      })
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getToken();
    postUser();
  }, []);
  
  return (
    <div className="App">
      {/* Token View */}
      <h1>Token: {`${token == "" ? "Loading..." : token.csrf_token}`}</h1>
      <hr />

      {/* Post & returned data */}
      {user.map((item) => {
        const { id, live_type, title, user_name, course_title, meeting_id } = item;
        return (
          <article key={id}>
            <p>
              <strong>Live Type:</strong> {live_type}
            </p>
            <p>
              <strong>Title:</strong> {title}
            </p>
            <p>
              <strong>Username:</strong> {user_name}
            </p>
            <p>
              <strong>Course Title:</strong> {course_title}
            </p>
            <p>
              <strong>Meeting Id:</strong> {meeting_id}
            </p>
            <hr />
          </article>
        );
      })}
    </div>
  );
};

export default Test;
