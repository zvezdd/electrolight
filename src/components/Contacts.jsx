import React, { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setShow(true)
    }
  }
  return (
    <div style={{ marginBottom: "5rem" }}>
      <h3>Input value:{show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        className="control"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default function Contacts() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");
  const [hasError, setHasError] = useState(false);

  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }

  function toggleError(params) {
    setHasError((prev) => !prev);
    setHasError(!hasError);
  }

  return (
    <section>
      <Button onClick={toggleError}>Toggle error</Button>
      <h3>Here are our contacts:</h3> <br />
      {/* <a href="https://www.instagram.com/zvezd_d?igsh=MXNzNWJjNGw1NzM4eQ%3D%3D&utm_source=qr">
        Instagram
      </a> */}
      <form style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          onChange={handleNameChange}
          style={{
            border: hasError ? "1px solid red" : null,
          }}
        />
        <label htmlFor="reason">Your name</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="error" key="">
            Error
          </option>
          <option value="help" key="">
            Need help
          </option>
          <option value="suggest" key="">
            Suggestions
          </option>
        </select>

        <Button disabled={hasError} isActive={!hasError}>
          Send
        </Button>
      </form>
      <StateVsRef />
    </section>
  );
}
