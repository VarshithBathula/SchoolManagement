import axios from 'axios'
import {useState,useEffect} from 'react'
import classes from "./Admin.module.css"
import { useNavigate } from 'react-router-dom';

function Admin() {
    let [file, setFile] = useState(null);
    let [file1, setFile1] = useState(null);
    let nav = useNavigate();
    let goBack = () => { nav(-1)}
    const [data,setData]=useState([])
    const [id,setgetname]=useState()
    const [getdata,setGetData]=useState([])
    const [Newname2,setNewName2]=useState()
    const [Newfees2,setNewFees2]=useState()
    const [Newcode2,setNewCode2]=useState()
    const [Newaddress2,setNewAddress2]=useState()
    const [Newname3,setNewName3]=useState()
    const [Newname1,setNewName1]=useState()
    const [Newfees1,setNewFees1]=useState()
    const [Newcode1,setNewCode1]=useState()
    const [Newaddress1,setNewAddress1]=useState()
    
    
        function GetById(){
            axios.get('http://localhost:3004/admin/'+id)
            .then(res => setGetData(res.data))
            .catch(error => {
                console.error('Error fetching students:', error);
            });
            
        }
         function postfun(){
            const formData = new FormData();
            formData.append("name",Newname1);
            formData.append("fees",Newfees1);
            formData.append("schoolCode",Newcode1);
            formData.append("address",Newaddress1);
            formData.append("image", file);
            axios.post('http://localhost:3004/admin',formData)
            .then(response => {

                console.log('Product added successfully:', response.data);
            }).catch(error => {
                console.error('Error adding product:', error); });

        }
        function put(){
            const formData = new FormData();
            formData.append("name",Newname2);
            formData.append("fees",Newfees2);
            formData.append("schoolCode",Newcode2);
            formData.append("address",Newaddress2);
            formData.append("image", file1);
            axios.put('http://localhost:3004/admin/'+Newname2, )
            .then(response => {

                console.log('Product added successfully:', response.data);
            }).catch(error => {
                console.error('Error adding product:', error); });

        }
        function del(){
            axios.delete('http://localhost:3004/'+ Newname3)
            .then(response => {

                console.log('Product added successfully:', response.data);
            }).catch(error => {
                console.error('Error adding product:', error); });
        }
 
    return(
        <div>
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
            <div className={classes.Crud}>
                <h4>New School *POST: </h4>
                <label>Name: </label><br/>
                <input type="text" onChange={(e) => setNewName1(e.target.value)} className={classes.input}></input><br/>
                <label>Fees: </label><br/>
                <input type="text" onChange={(e) => setNewFees1(e.target.value)}className={classes.input}></input><br/>
                <label>Code: </label><br/>
                <input type="text" onChange={(e) => setNewCode1(e.target.value)}className={classes.input}></input><br/>
                <label>Address: </label><br/>
                <input type="text" onChange={(e) => setNewAddress1(e.target.value)}className={classes.input}></input><br/>
                <input style={{marginTop:"20px"}} type='file'  name="file" onChange={(e)=>setFile(e.target.files[0])} ></input><br/>
                <button onClick={postfun}className={classes.btn}>Post</button><br/>
            </div>
        
            <div className={classes.Crud}>
                <h4>Edit *Put By Id: </h4>
                <label>Name: </label><br/>
                <input type="text" onChange={(e) => setNewName2(e.target.value)} style={{borderRadius:"10px",marginTop:"10px",marginBottom:"10px"}}></input><br/>
                <label>Fees: </label><br/>
                <input type="text" onChange={(e) => setNewFees2(e.target.value)}style={{borderRadius:"10px",marginTop:"10px",marginBottom:"10px"}}></input><br/>
                <label>Code: </label><br/>
                <input type="text" onChange={(e) => setNewCode2(e.target.value)}className={classes.input}></input><br/>
                <label>Address: </label><br/>
                <input type="text" onChange={(e) => setNewAddress2(e.target.value)} className={classes.input}></input><br/>
                <input style={{marginTop:"20px"}} type='file'  name="file" onChange={(e)=>setFile1(e.target.files[0])} ></input><br/>
                <button onClick={put} className={classes.btn}>PUT</button><br/>
            </div>
        
            <div className={`${classes.Crud} ${classes.curd}`}>
                <h4>Delete by name:</h4>
                <label>name:</label><br/>
                <input type='text' onChange={(e) => setNewName3(e.target.value)}className={classes.input}></input><br/>
                <button onClick={del} className={classes.btn}>DELETE</button>
            </div>

            <div className={classes.Crud} style={{display:"flex"}}>
                {
                    data.map((obj,id)=>{
                        return (
                        <div key={id} style={{margin:"10px",marginLeft:"15px"}} >
                            <p>
                                Id:      {obj.id}<br/>
                                Name:    {obj.name}<br/>
                                Age:     {obj.age}<br/>
                                Email:   {obj.email}
                            </p>
                        </div>
                        )
                    })
                }
            </div>
            <button onClick={goBack}>Back</button>
        </div>
    )
}

export default Admin






// import React from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import UserContext from '../../Context/UserContext';
// import { useContext } from 'react';
// import Account from '../Account/Account';
// import { useNavigate } from 'react-router-dom';
// // import { response } from 'express';
// import axios from 'axios';


// function Admin() {
//     const { user, login,token, setUsertoken} = useContext(UserContext);
//     console.log(user);
//     const nav = useNavigate();

//     const validationSchema = Yup.object().shape({
//         email: Yup.string().email('Invalid email address').required('Email is required'),
//         password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
//     });


//     async function submitForm(values){
//         try{
//             const response = await axios.post('http://localhost:3000/assests',{
//                 email: values.email,
//                 password: values.password
//             });
//             const token = response.data.token;
//             setUsertoken(token)
//             console.log(response);
//             login(response.data)
//             nav('/account')
//         }
//         catch (error) {
//             console.error('sign Up failed');
//         }
//     }
//     return (
//         <div>
//             {!user ?
//                 <Formik
//                     initialValues={{ email: '', password: '' }}
//                     validationSchema={validationSchema}
//                     onSubmit={submitForm}
//                 >
//                     {({ isSubmitting }) => (
//                         <Form>
//                             <div>
//                                 <label htmlFor="email">Email</label>
//                                 <Field type="email" name="email" />
//                                 <ErrorMessage name="email" component="div" className="error" />
//                             </div>

//                             <div>
//                                 <label htmlFor="password">Password</label>
//                                 <Field type="password" name="password" />
//                                 <ErrorMessage name="password" component="div" className="error" />
//                             </div>

//                             <button type="submit" disabled={isSubmitting}>
//                                 SignUp
//                             </button>
//                         </Form>
//                     )}
//                 </Formik> : <Account />}
//         </div>
//     )
// }

// export default Admin









// import axios from 'axios'
// import {useState,useEffect} from 'react'
// import classes from "./Fetcher.module.css"
// import { useNavigate } from 'react-router-dom';

// function Fetcher() {
//     let nav = useNavigate();
//     let goBack = () => { nav(-1); }
//     const [data,setData]=useState([])
//     const [id,setgetid]=useState()
//     const [getdata,setGetData]=useState([])
//     const [Newid,setnewid]=useState()
//     const [Newname,setNewNmae]=useState()
//     const [Newemail,setNewemail]=useState()
//     const [Newage,setNewage]=useState()
    

//     useEffect(() => {
//         axios.get('http://localhost:3000/users')
//             .then(res => {
//                 setData(res.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching students:', error);
//             });
//         },[]);
//         function GetById(){
//             axios.get('http://localhost:3000/users/'+id)
//             .then(res => setGetData(res.data))
//             .catch(error => {
//                 console.error('Error fetching students:', error);
//             });
            
//         }
//          function postfun(){
//             axios.post('http://localhost:3000/users', { id:Newid, name: Newname, email:Newemail ,age: Newage} )
//             .then(response => {

//                 console.log('Product added successfully:', response.data);
//             }).catch(error => {
//                 console.error('Error adding product:', error); });

//         }
//         function put(){
//             axios.put('http://localhost:3000/users/'+Newid, { name: Newname, email:Newemail ,age: Newage} )
//             .then(response => {

//                 console.log('Product added successfully:', response.data);
//             }).catch(error => {
//                 console.error('Error adding product:', error); });

//         }
//         function del(){
//             axios.delete('http://localhost:3000/users/'+ Newid)
//             .then(response => {

//                 console.log('Product added successfully:', response.data);
//             }).catch(error => {
//                 console.error('Error adding product:', error); });
//         }
 
//     return(
//         <div>
//             <div>
//             <div className={classes.Crud}>
//                 <h4>Get By Id</h4>
//                 <label>Id: </label><br/>
//             <input type="text" onChange={(e) => setgetid(e.target.value)}className={classes.input}></input><br/>
//             <button onClick={GetById}className={classes.btn}>GET</button>
//             {
          
//             <div>
//                 <div id='pID' style={{marginTop:"35px"}}>
//                 Id   :      {getdata.id}<br/>
//                 Name:    {getdata.name}<br/>
//                 Age :    {getdata.age}<br/>
//                 Email: {getdata.email}<br/>
//                 </div>
                
                
//                 </div>
//           }
//           </div>
//         </div>
//         <div className={classes.Crud}>
//             <h4>POST: </h4>
//             <label>Id: </label><br/>
//             <input type="text" onChange={(e) => setnewid(e.target.value)} className={classes.input}></input><br/>
//             <label>Name: </label><br/>
//             <input type="text" onChange={(e) => setNewNmae(e.target.value)}className={classes.input}></input><br/>
//             <label>Email: </label><br/>
//             <input type="text" onChange={(e) => setNewemail(e.target.value)}className={classes.input}></input><br/>
//             <label>age: </label><br/>
//             <input type="text" onChange={(e) => setNewage(e.target.value)}className={classes.input}></input><br/>
//             <button onClick={postfun}className={classes.btn}>Post</button><br/>

//         </div>
        
//         <div className={classes.Crud}>
//             <h4>Put By Id: </h4>
//             <label>Id: </label><br/>
//             <input type="text" onChange={(e) => setnewid(e.target.value)} style={{borderRadius:"10px",marginTop:"10px",marginBottom:"10px"}}></input><br/>
//             <label>Name: </label><br/>
//             <input type="text" onChange={(e) => setNewNmae(e.target.value)}style={{borderRadius:"10px",marginTop:"10px",marginBottom:"10px"}}></input><br/>
//             <label>Email: </label><br/>
//             <input type="text" onChange={(e) => setNewemail(e.target.value)}className={classes.input}></input><br/>
//             <label>age: </label><br/>
//             <input type="text" onChange={(e) => setNewage(e.target.value)} className={classes.input}></input><br/>
//             <button onClick={put} className={classes.btn}>PUT</button><br/>

//         </div>
        
//         <div className={`${classes.Crud} ${classes.curd}`}>
//             <h4>Delete</h4>
//             <label>id:</label><br/>
//             <input type='text' onChange={(e) => setnewid(e.target.value)}className={classes.input}></input><br/>
//             <button onClick={del} className={classes.btn}>DELETE</button>
//         </div>

//         <div className={classes.Crud} style={{display:"flex"}}>
      
//         {
//           data.map((obj,id)=>{
//             return <div key={id} style={{margin:"10px",marginLeft:"15px"}} >
//                 <p>
//                 Id   :      {obj.id}<br/>
//                 Name:    {obj.name}<br/>
//                 Age :    {obj.age}<br/>
//                 Email:{obj.email}
//                 </p>
                
                
//                 </div>
//           })
//         }
      
//     </div>
//     <button onClick={goBack}>Back</button>
//         </div>
//     )


// }

// export default Fetcher