import React from 'react';
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();

  function handleCreateDeck(event) {
    event.preventDefault();
    history.push("/decks/new");
  }

  return (
    <div>
      <div>
        <button
        type="button"
        className="btn btn-secondary ml-3 mb-2"
        onClick={handleCreateDeck}>
        Create Deck
        </button>
      </div>
    </div>
  )
}

export default Home;