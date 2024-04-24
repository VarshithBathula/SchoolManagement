import React from "react";
import * as React from "react";
import {useState,useEffect} from "react";
function SchoolCard({obj}){
    let [file1, setFile1] = useState(null);
    const [Newname2,setNewName2]=useState()
    const [Newfees2,setNewFees2]=useState()
    const [Newcode2,setNewCode2]=useState()
    const [Newaddress2,setNewAddress2]=useState()
    function put(){
        const formData = new FormData();
        formData.append("name",Newname2);
        formData.append("fees",Newfees2);
        formData.append("schoolCode",Newcode2);
        formData.append("address",Newaddress2);
        formData.append("image", file1);
        axios.put('http://localhost:3004/admin/'+Newname2,formData )
        .then(response => {
            console.log('Product updated successfully:', response.data);
        }).catch(error => {
            console.error('Error adding product:', error); });
    }
}
export default SchoolCard