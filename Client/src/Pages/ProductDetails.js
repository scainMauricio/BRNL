import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductByCategory from "../Components/ProductByCategory";

export default function ProductDetails({ products }) {
  let { _id } = useParams();

  // const mapHref = "https://www.google.com/maps/place/" + product.city;
  // const phoneHref = "tel:" + product.phone;

  //fetch + useeffect would work better

  let product = products.filter((item) => {
    return item._id === _id;
  });

  return (
    <>
      <div className="titleContainer">
        {" "}
        <NavLink to="/" className="backNav">
          <img
            className="backBtn"
            src="https://res.cloudinary.com/brnl/image/upload/v1654711651/brnl/left-arrow_nunq1q.png"
          ></img>
        </NavLink>
      </div>
      {/* the If condition inside the return is being used because of a delay to fetch */}
      {product.length ? (
        <>
          {" "}
          <section className="brandContainer">
            <div className="brandLogoContain">
              <img className="brandLogo" src={product[0].logo}></img>
            </div>

            <div className="brandInfo">
              <div className="brandName">{product[0].name}</div>
              <div className="brandDescription">
                {" "}
                <ul>
                  {product[0].description.split(",").map((descript) => {
                    return <li className="">{descript}</li>;
                  })}
                </ul>{" "}
              </div>
              <div className="brandPhone">
                {" "}
                <a href={"tel:" + product[0].phone}>
                  <img
                    src="https://res.cloudinary.com/brnl/image/upload/v1654855180/brnl/chamada-telefonica_gpvcca.png"
                    className="icon"
                  ></img>
                  {product[0].phone}
                </a>
              </div>
              <div className="brandWebsite">
                {" "}
                <a href={product[0].website} target="_blank">
                  <img
                    src="https://res.cloudinary.com/brnl/image/upload/v1654854964/brnl/arroba_odhtlt.png"
                    className="icon"
                  ></img>{" "}
                  Website
                </a>
              </div>
              <div className="brandCity">
                <a
                  href={"https://www.google.com/maps/place/" + product[0].city}
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/brnl/image/upload/v1654854964/brnl/localizacao_qz4cfn.png"
                    className="icon"
                  ></img>
                  {product[0].city}
                </a>
              </div>
            </div>
          </section>
          <section className="SimilarContainer">
            <div class="secondaryTitle">Similar Options:</div>
            <ProductByCategory
              products={products}
              cat={product[0].category}
              _id={product[0]._id}
            ></ProductByCategory>
          </section>
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
