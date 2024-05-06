import React, { useEffect, useState } from 'react';

import axios from 'axios'

export const Latest = () => {
    
    const [allBlog, setAllBlog] = useState([]);

    const getAllBlog = async () => {
        try {
            const response = await axios.get("http://localhost:5050/api/getblog");
            setAllBlog(response.data.blog);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllBlog();
    }, []);
    
    return (
        <div className="my-5">
            <h2 className='fs-3 text-center text text-decoration-underline'>Latest posts</h2>
            
            <div className="mt-5 row">
                
                {allBlog.slice(0, 4).map((eachblog) => {
                    return (
                    <div className="col-6 col-md-4">
                            <div className="card mx-auto mt-3" style={{ width: "18rem"}}>
                                    <img src={eachblog.image} className="card-img-top" alt="..." style={{height: "200px", objectFit: 'cover'}} />
                                    <div className="card-body">
                                        <p className="card-text fs-5">{eachblog.title}</p>
                                        <p className="card-text fs-5">{eachblog.content}</p>
                                    </div>
                            </div>
                            </div>
                )
                })};
            </div>
        </div>
);
}