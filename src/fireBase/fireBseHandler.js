import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCD8LenuF6r7flCb2WdOsCtj76i65iWing",
  authDomain: "shop-d985f.firebaseapp.com",
  databaseURL:
    "https://shop-d985f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shop-d985f",
  storageBucket: "shop-d985f.appspot.com",
  messagingSenderId: "841524089062",
  appId: "1:841524089062:web:3889a02031474bbd6aab27",
};

const app = initializeApp(firebaseConfig);
export const fireBaseStorage = getStorage(app);
export const fireBaseDataBase = getDatabase(app);
