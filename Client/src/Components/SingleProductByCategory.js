import React from "react";

export default function SingleProductByCategory({ product }) {
  const mapHref = "https://www.google.com/maps/place/" + product.city;
  const phoneHref = "tel:" + product.phone;
  const filterDescription = product.description.split(",").slice(0, 3);
  const hashtaged = filterDescription.map((word) => {
    return word + " | ";
  });
  // .map((item) => {
  //   return item.replace(/\s/g, "");
  // });

  return (
    <>
      <div className="singleCard">
        <div className="singleCardInfo">
          <div className="singleCardName">{product.name}</div>
          <div className="singleCardDescription">
            {" "}
            {hashtaged.map((hasht) => {
              return <span className="hashtag">{hasht}</span>;
            })}
          </div>

          <div className="singleCardPhone">
            {" "}
            <a href={phoneHref}>
              <img
                src="https://res.cloudinary.com/brnl/image/upload/v1654784269/brnl/telefono_p37dx1.png"
                className="icon"
              ></img>
              {product.phone}
            </a>
          </div>
          <div className="singleCardWebsite">
            <a href={product.website} target="_blank">
              <img
                src="https://res.cloudinary.com/brnl/image/upload/v1654784269/brnl/internet_ddwqn2.png"
                className="icon"
              ></img>{" "}
              Website
            </a>
          </div>

          <div className="singleCardCity">
            {" "}
            <a href={mapHref} target="_blank">
              <img
                src="https://res.cloudinary.com/brnl/image/upload/v1654785652/brnl/mapa_cgznpf.png"
                className="icon"
              ></img>{" "}
              {product.city}
            </a>{" "}
          </div>
        </div>
        <div className="singleCardImageContain">
          {" "}
          <img className="sinceCardImage" src={product.logo}></img>{" "}
        </div>
      </div>
    </>
  );
}
{
  /* <div className="singleCardImageContain" style={styling}> */
}
