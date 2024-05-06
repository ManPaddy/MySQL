import React, { useEffect, useState } from "react";

import { Navbar } from "./navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Eachcategory = () => {
const [allBlog, setAllBlog] = useState([]);
const params = useParams();

const getAllBlog = async () => {
    try {
    const response = await axios.get("http://localhost:5050/api/getblog");

    const data = response.data.blog.filter((item) => {
        return item.category.toUpperCase() === params.name.toUpperCase();
    });
    setAllBlog(data);
    } catch (error) {
    console.log(error);
    }
};
console.log(allBlog);

useEffect(() => {
    getAllBlog();
}, [params.name]);

return (
    <div>
    <Navbar></Navbar>
    <div className="my-5 row">
        <div className="mt-5 row">
        {allBlog.map((eachblog) => {
            return (
            <div className="col-md-4 col-6">
                <div class="card mx-auto mt-3" style={{ width: "18rem" }}>
                <img
                    src={eachblog.image}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "300px", objectfit: "cover" }}
                />
                <div class="card-body">
                    <p class="card-text fs-5"> {eachblog.title}</p>
                    <p class="card-text fs-6"> {eachblog.category}</p>
                    <p class="card-text fs-5"> {eachblog.content}</p>
                </div>
                </div>
            </div>
            );
        })}
        </div>
    </div>
    </div>
);
};