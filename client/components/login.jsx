import React, { useEffect, useState } from 'react';

import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPassword(false);
        }, 2000);
        }, [showPassword]);
        
    const submitForm = async () => {

        try {
        const data=  await axios.post("http://localhost:5050/api/login", {
                username: username,
                password: password,
            });
            console.log(data);
            navigate("/home");
        } catch (error) {
            setErrorMessage(error.response.data.error);
            };
        };
        
    useEffect(() => {
        if (errorMessage !=="") {
            setTimeout(() => {
                setErrorMessage("");
            }, 4000);
        }
    }, [errorMessage]);
    
    return (<div>
    <div className="vh-100 bg-primary d-flex justify-content-center align-items-center">
        <div className=" p-5">
            <h3 className="fs-3 text-center my-3">LOGIN</h3>
            <form action="" className="d-flex flex-column bg-white rounded-1 p-4">
                <input style={{ width: "500px"}} type="text" placeholder="Enter Username" className="mb-4 py-3 ps-2 border-2 border-black rounded-full fs-4" value={username} onChange={(e) =>{setUsername(e.target.value);} }/>
                <div className="d-flex">
                <input style={{ width: "500px"}} type={showPassword === true ? "text" : "password"} placeholder="Enter Password" className="mb-4 py-3 ps-2 border-2 border-black rounded-full fs-4" value={password} onChange={(e) =>{setPassword(e.target.value);} }/>
                <i 
                    onClick={() => {
                        setShowPassword(!showPassword);
                    }}
                    className="fs-3 pt-3" style={{marginLeft: "-70px", cursor: "pointer"}}>👁</i>
                </div>
                <button onClick={(e) => {
                    e.preventDefault();
                    submitForm();
                }} className="btn btn-primary rounded px-3 fs-3">
                    Submit
                </button>
                <button className="btn w-100 btn-danger rounded-1 mt-3 fs-3" onClick={() => {
                    navigate("/register");
                }}
                >
                    Go to Register
                </button>
            </form>
        </div>
    </div>
    
    {errorMessage !== "" && (
    <div className=" bg-light rounded-2 p-3 text-dark fs-3" style={{ position: "fixed", bottom: "30px", right: "30px"}}>
    {errorMessage}
    </div>
    )}
</div>
)};
