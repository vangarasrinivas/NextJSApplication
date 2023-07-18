import { db } from "@/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import style from "../styles/Todo.module.css";

const Todos = () => {
  const [todoInfo, setTodoInfo] = useState({
    name: "",
    title: "",
    detail: "",
    id: "",
  });

  console.log({ todoInfo });
  const [todos, setTodos] = useState([]);
  const [toggleForm, setToggleForm] = useState(style.formNone);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const collectionRef = collection(db, "todos");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    console.log({ q });
    const unsubscribe = onSnapshot(q, (qsn: any) => {
      setTodos(
        qsn.docs.map((doc: any) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  };

  const onSubmitData = async () => {
    if (todoInfo?.hasOwnProperty("timestamp")) {
      const docRef = doc(db, "todos", todoInfo.id);
      const todoUpdated = {
        ...todoInfo,
        timestamp: serverTimestamp(),
      };
      updateDoc(docRef, todoUpdated);
      setToggleForm(style.formNone);
      setTodoInfo({
        name: "",
        title: "",
        detail: "",
        id: "",
      });
      alert(`Todo is updated successfully`);
    } else {
      const collectionRef = collection(db, "todos");
      const docRef = await addDoc(collectionRef, {
        ...todoInfo,
        timestamp: serverTimestamp(),
      });

      if (docRef.id) {
        setToggleForm(style.formNone);
        setTodoInfo({
          name: "",
          title: "",
          detail: "",
          id: "",
        });
        alert(`Todo with id ${docRef.id} is added successfully`);
      }
    }
  };

  const deleteTodo = async (id: any) => {
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef);
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Firebase CRUD</h3>

      <div className={style.todoTable}>
        <div>
          <div>
            <button onClick={() => setToggleForm(style.formwrapperactive)}>
              Add Todo
            </button>
          </div>
          <table rules="all" border={1}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Details</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos &&
                todos.map((v: any, i: any) => {
                  return (
                    <>
                      <tr key={i}>
                        <td>{v.name}</td>
                        <td>{v.title}</td>
                        <td>{v.detail}</td>
                        <td>
                          {v && v.timestamp
                            ? new Date(v.timestamp).toLocaleDateString("en-US")
                            : ""}
                        </td>
                        <td>
                          {v && v.timestamp
                            ? new Date(v.timestamp).toLocaleTimeString("en-US")
                            : ""}
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              setToggleForm(style.formwrapperactive);
                              setTodoInfo(v);
                            }}
                          >
                            Edit
                          </button>{" "}
                          <button onClick={() => deleteTodo(v.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      <div className={toggleForm}>
        <div className={style.todoForm}>
          <div className={style.todoTitle}>
            <strong>Add Todo</strong>
          </div>

          <div>
            <label>Name</label>
            <input
              className={style.input}
              value={todoInfo.name}
              onChange={(e) =>
                setTodoInfo({
                  ...todoInfo,
                  name: e.target.value,
                })
              }
            />
            <label>Title</label>
            <input
              className={style.input}
              value={todoInfo.title}
              onChange={(e) =>
                setTodoInfo({
                  ...todoInfo,
                  title: e.target.value,
                })
              }
            />
            <label>Detail</label>
            <input
              className={style.input}
              value={todoInfo.detail}
              onChange={(e) =>
                setTodoInfo({
                  ...todoInfo,
                  detail: e.target.value,
                })
              }
            />
          </div>

          <div className={style.formButtons}>
            <button onClick={() => onSubmitData()}>Save</button>
            <button
              onClick={() => {
                setToggleForm(style.formNone);
                setTodoInfo({
                  name: "",
                  title: "",
                  detail: "",
                  id: "",
                });
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
