import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { Button } from "@mui/material";
import { fireBaseDataBase } from "../../fireBase/fireBseHandler";
import CardComponent from "../../Components/CardComponents";
import { Link } from "react-router-dom";
import "./display.css";

function Display() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const databaseRef = ref(fireBaseDataBase, "/Products");
    const data = onValue(databaseRef, async (snapshot) => {
      const productArr = Object.values(snapshot.val());
      setTimeout(() => {
        setProducts(productArr);
      }, 1);
    });
  }, []);
  return (
    <div>
      <div className="add-product__container">
        <Link to="/add-product" className="add-product__link">
          <Button variant="contained">Add Product</Button>
        </Link>
        <div className="card-container">
          {products.map((product, index) => {
            return <CardComponent key={index} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Display;
