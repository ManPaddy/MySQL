import { Footer } from "./footer";
import { Latest } from "./latest";
import {Navbar} from "./navbar";
import React from 'react'
import blogbg from "../src/assets/blogbg.jpeg";

export const Home = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div
        className="d-flex align-items-center"
        style={{
          backgroundImage: `url(${blogbg})`,
          height: "80vh",
          width: "100vw",
          backgroundColor: "rgba (0, 0, 0, 0.737)",
          backgroundBlendMode: "darker",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

        }}
      >
        <div className='ps-4'>
          <h3 className='text-light fs-1'>Welcome to my blog</h3>
          <p className='text-light fs-3'>we offer you the latest news from all over the world</p>
          <button className='btn btn-primary btn-lg'> Click here to view news 🏹 </button>
        </div>
      </div>
      <Latest></Latest>
      <Footer></Footer>
    </div>
  );
};