import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Body() {
  const products = [
    {
      name: "Airpods Wireless Bluetooth Headphones",
      image: "/images/airpods.jpg",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly. High-quality AAC audio offers immersive listening experience. Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category: "Electronics",
      price: 89.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "iPhone 11 Pro 256GB Memory",
      image: "/images/phone.jpg",
      description:
        "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
      brand: "Apple",
      category: "Electronics",
      price: 599.99,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      name: "Canon EOS 80D DSLR Camera",
      image: "/images/camera.jpg",
      description:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
      brand: "Canon",
      category: "Electronics",
      price: 929.99,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
      name: "Sony Playstation 4 Pro White Version",
      image: "/images/playstation.jpg",
      description:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      brand: "Sony",
      category: "Electronics",
      price: 399.99,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      name: "Logitech G-Series Gaming Mouse",
      image: "/images/mouse.jpg",
      description:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
      brand: "Logitech",
      category: "Electronics",
      price: 49.99,
      countInStock: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
      name: "Amazon Echo Dot 3rd Generation",
      image: "/images/alexa.jpg",
      description:
        "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
      brand: "Amazon",
      category: "Electronics",
      price: 29.99,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
  ];

  return (
    // <div>
    //   {products.map((product) => {
    //     return (
        //   <Card style={{ width: '18rem' }}>
        //   <Card.Img variant="top" src="holder.js/100px180" />
        //   <Card.Body>
        //     <Card.Title>Card Title</Card.Title>
        //     <Card.Text>
        //       Some quick example text to build on the card title and make up the
        //       bulk of the card's content.
        //     </Card.Text>
        //     <Button variant="primary">Go somewhere</Button>
        //   </Card.Body>
        // </Card>
    //     );
    //   })}
    // </div>
  );
}

export default Body;
