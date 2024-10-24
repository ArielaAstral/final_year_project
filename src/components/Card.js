import React from 'react';

export default function Card(props) {
    return (
        props.image&&<div className={`card container p-2 bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} style={{ width: '450px'} }>
            <h5 className="card-title mt-2">Preview:</h5>
            {props.image ? (
                <img src={props.image} className="card-img  mb-3" alt="Preview" style={{width:'424.4px',height:'242.512px'}}/>
            ) : (
                <img src="/placeholder.png" className="card-img mb-3" alt="Placeholder" />
            )}
        </div>
    );
}