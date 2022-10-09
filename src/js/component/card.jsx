import React from "react"; //Main React.js library




export const Card = () => {
	return (   
    <div className="col">
    <div className="card h-100">
        <img src="https://via.placeholder.com/500x350" className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer  d-flex justify-content-center">
        <small className="text-muted">
        <button className="btn btn-primary btn-lg" type="button">Find Out More!</button>
        </small>
        </div>
    </div>
    </div>)
};