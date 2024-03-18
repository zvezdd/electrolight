import React from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useState, useEffect, useCallback } from "react";
import useInput from "../hooks/useInput";

export default function EffectSection() {
  const input = useInput('');

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(!modal);
  }

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effect</h3>
      <Button onClick={openModal}>Open Info</Button>
      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>Here's the page of this modal page, hope you'll enjoy!</p>
        <Button onClick={openModal}>close</Button>
      </Modal>

      {loading && <p>loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
