import React from 'react'

function CardForm({ changeFront, changeBack, handleSave, handleDoneCancel, cardValueFront, cardValueBack }) {

    return (
      <form>
        <div className="mb-3">
          <label className="form-label font-weight-bold ml-3">Front</label>
            <textarea
              type="text" className="form-control" 
              id="front"
              placeholder="Front side of card"
              value={cardValueFront}
              rows="3"
              onChange={changeFront}/> 
          </div>
        <div className="mb-3">
          <label className="form-label font-weight-bold ml-3">Back</label>
            <textarea className="form-control" id="back" 
            placeholder="Back side of card"
            value={cardValueBack}
            rows="3"
            onChange={changeBack}
            />
        </div>
          <button type="done" className="btn btn-secondary ml-3 mb-3" onClick={handleDoneCancel}>Done</button>
          <button type="submit" className="btn btn-primary ml-1 mb-3" onClick={handleSave}>Save</button>
      </form>
    );
  }

  export default CardForm