import axios from 'axios'
import {useState,useEffect} from 'react'
import classes from "./Admin.module.css"
import { useNavigate } from 'react-router-dom';

function Parent() {
    let nav = useNavigate();
    let goBack = () => { nav(-1)}
    const [data,setData]=useState([])
    const [id,setgetname]=useState()
    const [getdata,setGetData]=useState([])
    // const [Newname2,setNewName2]=useState()
    // const [Newfees2,setNewFees2]=useState()
    // const [Newcode2,setNewCode2]=useState()
    // const [Newaddress2,setNewAddress2]=useState()
    // const [Newname3,setNewName3]=useState()
    // const [Newname1,setNewName1]=useState()
    // const [Newfees1,setNewFees1]=useState()
    // const [Newcode1,setNewCode1]=useState()
    // const [Newaddress1,setNewAddress1]=useState()
    
    
        function GetById(){
            axios.get('http://localhost:3004/admin/'+id)
            .then(res => setGetData(res.data))
            .catch(error => {
                console.error('Error fetching students:', error);
            });
            
        }
    return (
        <div>
            Parent
            <div>
                <div className={classes.Crud}>
                    <h4>Search by Name: *GET BY ID</h4>
                    <label>Name: </label><br/>
                    <input type="text" onChange={(e) => setgetname(e.target.value)}className={classes.input}></input><br/>
                    <button onClick={GetById}className={classes.btn}>GET</button>
                    <div id='pID' style={{marginTop:"35px"}}>
                        Name:    {getdata.name}<br/>
                        Fees:    {getdata.fees}<br/>
                        Code:    {getdata.schoolCode}<br/>
                        Address: {getdata.address}<br/>
                    </div>
                </div>
            </div>
            <button onClick={goBack}>Back</button>
        </div>
    )
}

export default Parent