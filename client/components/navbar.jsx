import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand fs-4 font-bold" href="#" 
        onClick={() => {
            navigate("/home");
        }}
            >
            My Blog
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" onClick={() => {
            navigate("/home");
        }}>
                    Home
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" onClick={() => {
            navigate("/category/politics");
        }}>
                    Politics
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" onClick={() => {
            navigate("/category/romance");
        }}>
                    Romance
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" onClick={() => {
                    navigate("/category/sport");
                }}>
                    Sport
                </a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    </div>
);
};