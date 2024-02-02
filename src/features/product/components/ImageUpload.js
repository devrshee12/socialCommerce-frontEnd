import React, { useEffect, useRef } from "react";




const ImageUpload = ({setFormData, title}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef?.current?.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
        // cloudName: "dr8ta1ngp",
        // uploadPreset: "ml_default",
      },
      (error, res) => {
        if (res.event === "success") {
          console.log("url is : ", res.info.secure_url)
          setFormData((prevState) => ({
            ...prevState,
            image:
              prevState?.image?.length > 0
                ? [...prevState.image, res.info.secure_url]
                : [res.info.secure_url],
          }));
        }

        if(error){
            console.log("here in error cloud : ", error)
        }
      }
    );
  }, []);
  return (
    <>
      {/* <button
        className="btn btn-outline-secondary"
        style={{height:"40px", }}
        onClick={(e) => {
          e.preventDefault();
          return widgetRef.current.open();
        }}
      >
        Upload Images
      </button> */}

        <label for="formFile" style={{cursor:"pointer", fontWeight:"bold"}} class="form-label mt-4" onClick={(e) => {
            e.preventDefault();
            return widgetRef.current.open();
          }}>{title}</label>
          {/* <input class="form-control" type="file" id="formFile" 
          onClick={(e) => {
            e.preventDefault();
            return widgetRef.current.open();
          }}/> */}
    </>
  );
};
export default ImageUpload;