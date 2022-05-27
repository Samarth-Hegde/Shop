import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import uploadImage from "../../assets/uploadImage.png";
import "./dataCollection.css"
import { ref as sRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref, push } from "firebase/database";
import { fireBaseStorage, fireBaseDataBase } from "../../fireBase/fireBseHandler";

function DataCollection() {
  const [data, setData] = useState({
    productName: "",
    productPrice: "",
    productMRP: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleClick = async (e) => {
    const dataBaseRef = ref(fireBaseDataBase, "/Products");
    await push(dataBaseRef, data);
    console.log(data);
  };

  const handleImageClick = () => {
    const tempElement = document.createElement("input");
    tempElement.setAttribute("type", "file");
    tempElement.onchange = async (e) => {
      const storageRef = sRef(
        fireBaseStorage,
        `/Products/${new Date().getTime()}`
      );
      await uploadBytes(storageRef, e.target.files[0]);
      const imageURl = await getDownloadURL(storageRef);
      setData({ ...data, productImage: imageURl });
    };
    tempElement.click();
  };

  useEffect(() => {
    if (!data.productPrice) {
      setData({ ...data, productMRP: 0 });
    } else {
      setData({
        ...data,
        productMRP:
          parseFloat(data.productPrice) * 0.18 + parseFloat(data.productPrice),
      });
    }
  }, [data.productPrice]);

  return (
    <div className="data-container">
      <img
        src={data.productImage ? data.productImage : uploadImage}
        alt="upload image"
        width="200px"
        height="200px"
        className="upload-img"
        onClick={handleImageClick}
      />
      <TextField
        sx={{ width: "600px", marginBottom: "20px" }}
        name="productName"
        label="Product Name"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        sx={{ width: "600px", marginBottom: "20px" }}
        name={"productPrice"}
        label="Product Price"
        type="number"
        variant="outlined"
        onChange={handleChange}
      ></TextField>
      <TextField
        sx={{ width: "600px", marginBottom: "20px" }}
        value={data.productMRP}
        name={"productMRP"}
        label="Product MRP"
        variant="outlined"
      ></TextField>
      <Button
        sx={{ backgroundColor: "#0362fc" }}
        variant="contained"
        onClick={handleClick}
      >
        Add
      </Button>
    </div>
  );
}

export default DataCollection;
