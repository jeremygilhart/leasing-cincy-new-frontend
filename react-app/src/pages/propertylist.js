import './propertyList.css';

function HouseDescription({house}) {
  return (
  <div className="House-description">
    <div className="House-description-text-section">
      <h2>{house["location"]["address"]}</h2>
      <h3>{house["location"]["city"]}, {house["location"]["state code"]}, {house["location"]["zip code"]}</h3>
      <h2>{house["bedrooms"]}</h2>
      <h3>Bedrooms</h3>
      <h2>{house["bathrooms"]}</h2>
      <h3>Bathrooms</h3>
      <h2>{house["squarefeet"]}</h2>
      <h3>Squarefeet</h3>
      <h2>{house["rent"]}</h2>
      <h3>Monthly Rent</h3>
      <h2>Available June 1st</h2>
      <a href = {house["route"]}>
        <button className = "more-info-button">
          <p>More Info</p>
        </button>
      </a>
    </div>
  </div>
  );
}



function HouseSection({house}) {


  return (
      <div className="House-section" style={
        {backgroundImage: "url(" + house["route"] + "/" + house["main photo"] + ")"}
      }>
        <HouseDescription house={house} />
      </div>
  );
}

function NoMoreHomes() {
  return (
      <div className="no-more-homes">
        <h1>Sorry!</h1>
        <h3>There are no more properties available for lease at this time. Please come back soon!</h3>
      </div>
    )

}


function PropertyList({houses}) {
  let houseHTML = [];
  for (let i = 0; i < houses.length; i++) {
    if (i === 0) {
      houseHTML.push(
        <section>
          <div className="Between-house-offset"></div>
          <HouseSection house = {houses[i]} />
          <div className="Between-house-offset"></div>
        </section>
        )

    } else {
      houseHTML.push(
        <section>
          <div className="Titlebar-offset"></div>
          <HouseSection house = {houses[i]} />
          <div className="Between-house-offset"></div>
        </section>
        )
    }
  }

  return (
    <div className="Home propertyListPage">
      <title>Property List Page</title>
      {houseHTML}
        <section >
      <NoMoreHomes />
        </section>
    </div>
  );
}

export default PropertyList;