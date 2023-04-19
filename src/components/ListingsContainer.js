import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchInput}) {
  const [listing, setListing] = useState([])
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => setListing(data))
  },[])

  function handleDelete(id) {
    const updatedListings = listing.filter((listing) => {
      return listing.id !== id;
    });
    setListing(updatedListings);
  }
  //******** Same function as above
  // function handleDelete(id) {
  //   setListing(listing.filter((listing) => listing.id !== id))
  // }

  const filteredSearchListing = listing.filter((listing) => 
  listing.description.toLowerCase().includes(searchInput.toLowerCase()))

  // const filteredSearchListing = listing.filter((listing) => {
  //   return listing.description
  //     .toLowerCase()
  //     .includes(searchInput.toLowerCase());
  // });


  const listingCards = filteredSearchListing.map((listing) => 
  <ListingCard 
    key= {listing.id}
    listing = {listing}
    handleDelete={handleDelete}
  />
  )



  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
