import React, { useEffect, useState } from "react";

import { Adminnavbar } from "./adminnavbar";
import axios from "axios";

export const Admin = () => {
    const [showAddblog, setShowAddBlog] = useState(false);
    const [allBlog, setAllBlog] = useState([]);

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [image,setImage] = useState("");
    const [category,setCategory] = useState("Politics");

    const handleSubmit = async () => {
        try {
            await axios.post("http://localhost:5050/api/addblog",{
                title,
                content,
                image,
                category,
            });
            setTitle("");
            setContent("");
            setImage("");
            setCategory("Politcs");
            getAllBlog();
            alert("Post added successfully");
        } catch (error) {
            console.log(error)
        }
    };

    const getAllBlog = async () => {
    try {
        const response = await axios.get("http://localhost:5050/api/getblog");

    setAllBlog(response.data.blog);
    } catch (error) {
    console.log(error);
    }
};
    console.log(allBlog);

    useEffect(() => {
    getAllBlog();
}, []);

    return (
    <div>
      {/* {beginning of navbar} */}
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a
            className="navbar-brand fs-4 font-bold"
            onClick={() => {
                navigate("/home");
            }}
            >
            My Blog
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <a
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => {
                    setShowAddBlog(false);
                    }}
                >
                    Show Blog
                </a>
                </li>
                <li className="nav-item">
                <a
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => {
                    setShowAddBlog(true);
                    }}
                >
                    Add Blog
                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
      {/* {end of navbar} */}

    {showAddblog === true ? (
        <div className="">
            <h2 className="text-center mt-4">Add new blog</h2>
            <form action="" className="mx-5 mt-2">
        <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                    Title
                </label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}/>
                </div>
                            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label fs-5">
                    Image
                </label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                value={image}
                onChange={(e) => {
                    setImage(e.target.value);
                }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="fs-5 mb-2">
                        Category
                    </label>
                    <select name="" id="" className="w-100 py-2 rounded-2"
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}>
                        <option value="Politics">Politics</option>
                        <option value="Sport">Sport</option>
                        <option value="Romance">Romance</option>
                    </select>
                <label for="exampleFormControlTextarea1" className="form-label fs-5">
                    Content
                </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value);
                }}
                ></textarea>
                </div>
                <button className="btn btn-primary btn-sm" type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    Submit
                </button>
            </form>
        </div>
    ) : (
        <div mb-5>
        <div className="my-5 row">
            <div className="mt-5 row">
            {allBlog.map((eachblog) => {
                return (
                <div className="col-md-4 col-6">
                    <div className="card mx-auto mt-3" style= {{ width: "18rem" }}>
                    <img
                        src={eachblog.image}
                        className="card-img-top"
                        alt="..."
                        style={{ height: "300px", objectfit: "cover" }}
                    />
                    <div className="card-body">
                        <p className="card-text fs-5"> {eachblog.title}</p>
                        <p className="card-text fs-6"> {eachblog.category}</p>
                        <p className="card-text fs-5"> {eachblog.content}</p>
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        </div>
    )}
    </div>
);
};