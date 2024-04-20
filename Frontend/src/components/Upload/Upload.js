// import React,{ useState } from "react";
// import axios from 'axios';
// import classes from "./Upload.module.css"

// function Upload() {
//   let [file, setFile] = useState(null);
// //   let [imageUrl,setImageUrl] = useState("");

//   const handleFileChange = (e) => {
//     setFile(URL.createObjectURL(e.target.files[0]));
//   }

//   const upload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);
//       let res = await axios.post("http://localhost:3004/image", formData);
//       console.log(res);
//     //   setImageUrl(res.data);
//     }
//     catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <div className="App">
//         <div className={classes.ProfileSection}>
//       <h2>Profile Pic</h2>
//       <img className={classes.ProfilePic} src={file}/>
//       </div>
//       <input type="file" onChange={handleFileChange}></input>
//       <button onClick={upload}>Upload Image</button>
//     </div>
//   );
// }

// export default Upload;

import React, { useState } from "react";
import axios from 'axios';
import classes from "./Upload.module.css";

function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      let res = await axios.post("http://localhost:3004/admin", formData);
      console.log(res);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <div className={classes.ProfileSection}>
        <h2>Profile Pic</h2>
        {file && <img className={classes.ProfilePic} src={URL.createObjectURL(file)} alt="Profile Pic" />}
      </div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={upload}>Upload Image</button>
    </div>
  );
}

export default Upload;