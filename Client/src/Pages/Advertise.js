import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import emailjs from "@emailjs/browser";

export default function Advertise() {
  const [selectedImage, setSelectedImage] = useState("");
  const [isVisible, setIsVisivle] = useState({ display: "none" });
  const former = useRef();

  const uploadImg = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target[0].value,
      phone: event.target[1].value,
      city: event.target[2].value,
      website: event.target[3].value,
      category: event.target[4].value,
      description: event.target[5].value,
    };

    console.log(formData);

    const fileName = selectedImage.name;
    const idxDot = fileName.lastIndexOf(".") + 1;
    const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();

    if (
      extFile == "jpg" ||
      extFile == "jpeg" ||
      extFile == "png" ||
      extFile == "GIF"
    ) {
      const formImage = new FormData();
      formImage.append("file", selectedImage);
      formImage.append("upload_preset", "xj1s3axx");
      await Axios.post(
        "https://api.cloudinary.com/v1_1/brnl/upload",
        formImage
      );

      await emailjs.sendForm(
        "service_ix9eexg",
        "template_gwv9ceo",
        former.current,
        "vBO4JOP98AyU4tbbe"
      );

      setIsVisivle({ display: "block" });
      event.target.reset();
    } else {
      alert("Only image files are allowed!"); //could display anotehr message instead of alert
    }
  };

  return (
    <>
      {" "}
      <div className="titleContainer">
        {" "}
        <NavLink to="/" className="backNav">
          <img
            className="backBtn"
            src="https://res.cloudinary.com/brnl/image/upload/v1654711651/brnl/left-arrow_nunq1q.png"
          ></img>
        </NavLink>
      </div>
      <section className="brandContainer">
        <form
          ref={former}
          className="advertiseForm"
          onSubmit={(event) => {
            uploadImg(event);
          }}
        >
          <div className="advertiseTitle">Advertise</div>
          <div className="advertiseSubtitle">
            Do you want to advertise your product on this site? Fill in the form
            below!
          </div>

          <label className="">Name</label>
          <input
            type="text"
            name="nameIpt"
            className="nameIpt"
            required
          ></input>
          <label className="">Phone</label>
          <input
            type="text"
            name="phoneIpt"
            className="phoneIpt"
            required
          ></input>
          <label className="">City</label>
          <input
            type="text"
            name="cityIpt"
            className="cityIpt"
            required
          ></input>
          <label className="">Website</label>
          <input
            type="text"
            name="websiteIpt"
            className="websiteIpt"
            required
          ></input>
          <label className="">Category</label>
          <input
            type="text"
            name="categoryIpt"
            className="categoryIpt"
            required
          ></input>
          <label className="">Description</label>
          <input
            type="text"
            name="descriptionIpt"
            className="descriptionIpt"
            required
          ></input>

          <input
            required
            type="file"
            accept="image/png, image/gif, image/jpeg"
            className="custom-file-input"
            onChange={(event) => {
              setSelectedImage(event.target.files[0]);
            }}
          ></input>
          <div className="formSubmitContainer">
            <button className="formBtn" type="submit">
              Send
            </button>
            <span className="formSent" style={isVisible}>
              {" "}
              ✔️ We received your request
            </span>
          </div>
        </form>
      </section>
    </>
  );
}
