import React, {useState} from "react";

function ListingCard({listing, handleDelete}) {

  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () =>
    setIsFavorite(isFavorite => !isFavorite)

  const onDelete = () => {
      fetch(`http://localhost:6001/listings/${listing.id}`,{
        method: 'DELETE',
      })
      .then ((response) => response.json)
      .then (() => {
        handleDelete(listing.id)
      })
  }


  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick = {toggleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {toggleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick ={onDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
