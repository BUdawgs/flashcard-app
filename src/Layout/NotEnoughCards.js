import React from "react";
import { useHistory } from "react-router";

function NotEnoughCards({ deck }) {
const history = useHistory();

  function addCardHandler() {
    history.push(`/decks/${deck.id}/cards/new`)
  }
  
  return (
    <div>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        <li className="breadcrumb-item"><a href="/">{deck.name}</a></li>
    <li className="breadcrumb-item active" aria-current="page">Study</li>
  </ol>
</nav>
<h3 className="ml-3">Study: {deck.name}</h3>
<h5 className="ml-3">Not enough cards.</h5>
<p className="ml-3">You need at least 3 cards to study. There are {deck.cards ? deck.cards.length : 0} cards in this deck.</p>
<button className="btn btn-primary ml-3" type="button" onClick={addCardHandler}>Add Cards</button>
</div>
  );
}

export default NotEnoughCards;