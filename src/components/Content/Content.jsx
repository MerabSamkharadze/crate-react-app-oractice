import React from "react";
import "./Content.css";
import Product from "../Product/Product";

export default function Content() {
  let products = [
    {
      title: "Wolf",
      img: "https://www.shutterstock.com/image-photo/gray-wolf-canis-lupus-standing-260nw-2366729465.jpg",
      description:
        "The wolf is a powerful, social predator, known for living in packs and communicating through howls. It is highly adaptable, with a diet mainly consisting of meat, and is found across various habitats worldwide.",
    },
    {
      title: "Wolf",
      img: "https://images.pexels.com/photos/397857/pexels-photo-397857.jpeg?cs=srgb&dl=pexels-steve-130217-397857.jpg&fm=jpg",
      description:
        "The wolf is a powerful, social predator, known for living in packs and communicating through howls. It is highly adaptable, with a diet mainly consisting of meat, and is found across various habitats worldwide.",
    },
    {
      title: "Wolf",
      img: "https://images.pexels.com/photos/397857/pexels-photo-397857.jpeg?cs=srgb&dl=pexels-steve-130217-397857.jpg&fm=jpg",
      description:
        "The wolf is a powerful, social predator, known for living in packs and communicating through howls. It is highly adaptable, with a diet mainly consisting of meat, and is found across various habitats worldwide.",
    },
    {
      title: "Wolf",
      img: "https://images.pexels.com/photos/397857/pexels-photo-397857.jpeg?cs=srgb&dl=pexels-steve-130217-397857.jpg&fm=jpg",
      description:
        "The wolf is a powerful, social predator, known for living in packs and communicating through howls. It is highly adaptable, with a diet mainly consisting of meat, and is found across various habitats worldwide.",
    },
  ];
  return (
    <div className="Content">
      {products.map((product) => {
        return (
          <Product
            title={product.title}
            img={product.img}
            description={product.description}
          />
        );
      })}
    </div>
  );
}
