import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { createDeck } from '../utils/api/index'; 

function CreateDeck() {
  let history = useHistory();
  const [newDeck, setNewDeck] = useState()

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createDeck(newDeck);
    history.push(`/decks/${response.id}`);
    
  }

    function changeName(event) {
      setNewDeck({ ...newDeck, name: event.target.value });
    }

    function changeDesc(event) {
      setNewDeck({ ...newDeck, description: event.target.value });
    }

  function handleCancel(event) {
    event.preventDefault();
    history.push("/");
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
        </ol>
      </nav>

    <form>
      <h3 className="ml-3">Create Deck</h3>
    <div className="mb-3">
      <label 
      className="form-label font-weight-bold ml-3">Name</label>
      <input 
        type="text" className="form-control" 
        id="name"
        placeholder="Deck Name"
        required
        onChange={changeName}/> 
    </div>
    <div className="mb-3">
      <label className="form-label font-weight-bold ml-3">Description</label>
      <textarea className="form-control" id="description" 
      placeholder="Brief description of the deck"
      rows="5"
      required
      onChange={changeDesc}
      />
    </div>

    <button type="submit" className="btn btn-secondary ml-3 mb-3" onClick={handleCancel}>Cancel</button>

    <button type="submit" className="btn btn-primary ml-1 mb-3" onClick={handleSubmit}>Submit</button>
    </form>

  </div>
  )
}

export default CreateDeck