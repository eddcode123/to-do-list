import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ListToDoLists from "./ListTodoLists";
import ToDoList from "./ToDoList";

function App() {
  const [listSummaries, setListSummaries] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    reloadData().catch(console.error);
  }, []);

  async function reloadData() {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/lists");
      setListSummaries(response.data);
    } catch (error) {
      console.error("Failed to fetch list summaries:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleNewToDoList(newName) {
    try {
      await axios.post("/api/lists", { name: newName });
      await reloadData();
    } catch (error) {
      console.error("Failed to add a new list:", error);
    }
  }

  async function handleDeleteToDoList(id) {
    try {
      await axios.delete(`/api/lists/${id}`);
      await reloadData();
    } catch (error) {
      console.error("Failed to delete the list:", error);
    }
  }

  function handleSelectList(id) {
    console.log("Selecting item", id);
    setSelectedItem(id);
  }

  function backToList() {
    setSelectedItem(null);
    reloadData().catch(console.error);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (selectedItem === null) {
    return (
      <div className="App">
        <ListToDoLists
          listSummaries={listSummaries}
          handleSelectList={handleSelectList}
          handleNewToDoList={handleNewToDoList}
          handleDeleteToDoList={handleDeleteToDoList}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <ToDoList listId={selectedItem} handleBackButton={backToList} />
      </div>
    );
  }
}

export default App;
