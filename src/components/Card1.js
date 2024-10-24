import { useRef } from "react";
import React, { useState }from 'react';

export default function Card1(props) {
    const [isLoading, setIsLoading] = useState(false); // Default to false (not loading)
    const [selectedFile,setSelectedFile]=useState(null);
    const fileInputRef = useRef(null);
    const [preview,setPreview]=useState(null);


    const handleUploadClick = () => {
        if (selectedFile){
            setIsLoading(true);
            props.triggerAlert('File Uploading','success',3000);
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        }
        else{
            props.triggerAlert('Select a file to upload','error',3000);
        }
    };

    const handleFileChange=(event)=>{
    const file=event.target.files[0];
    if (file){
        setSelectedFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
        setPreview(reader.result);
        props.imageRef(reader.result);
        };
        reader.readAsDataURL(file); // Read the file as a data URL (base64 string)
        }
    };
    const clearHandler=()=>{
        setSelectedFile(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Clear the file input field
        }
        props.imageRef(null);
    }


  return (
    <div className={`card container p-2 text-center bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} style={{ width: '500px'}}>
      <h1 className="mt-4 mb-2">Select a file</h1>
      <p className="mb-4">Upload only JPG or PNG</p>
      <div className="input-group mb-3 ml-5 mr-5">
        <input type="file" className="form-control" id="inputGroupFile02" onChange={handleFileChange} ref={fileInputRef} accept="image/jpeg, image/png"/>
      </div>
      
      <div className="d-flex justify-content-center gap-3 mt-3">
        <button
          id="loadingButton"
          className="btn btn-primary "
          onClick={handleUploadClick} // Call the arrow function on click
          disabled={isLoading} // Disable the button while loading
        >
          {!isLoading && <span>Upload</span>}
          {isLoading && (
            <>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span className="ms-2">Loading...</span>
            </>
          )}
        </button>
        {selectedFile&&<button id='clearButton' className='btn btn-danger ml-3' onClick={clearHandler}><span>Clear</span></button>}
      </div>
    </div>
  );
}
