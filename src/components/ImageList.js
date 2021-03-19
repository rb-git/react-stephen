import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  //console.log(props.images);

  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  /* BEFORE DESTRUCTURING 
  const images = props.images.map((image) => {
  return (
    <img key={image.id} alt={image.description} src={image.urls.regular} />
  );
});
  */

  return <div className="image-list">{images}</div>;
};

export default ImageList;
