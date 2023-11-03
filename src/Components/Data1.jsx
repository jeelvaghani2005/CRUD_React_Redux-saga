import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    DELETE_PRODUCT_PROGRESS,
    GET_PRODUCT_PROGRESS,
    POST_PRODUCT_PROGRESS,
    PUT_PRODUCT_PROGRESS,
} from "../redux-saga/product/action/action";

const Data1 = () => {
    const [postdata, setpostdata] = useState({});
    const[show,setshow]=useState({})
    const dispatch = useDispatch();

    const data = useSelector((state) => state.productReducer);

    const change = (e) => {
        setpostdata({ ...postdata, [e.target.name]: e.target.value });
    };

    const submitData = () => {
        dispatch({ type: POST_PRODUCT_PROGRESS, payload: postdata });
        setpostdata({
            name:"",
            email:"",
        })
    };

    const Deletedata=(id)=>{
        console.log(id);
        dispatch({type:DELETE_PRODUCT_PROGRESS,payload:id})
    }
    
    const changeupdate=(e)=>{
        setshow({ ...show, [e.target.name]: e.target.value });
    }
    
    const Updatedata=(value)=>{
        setshow(value)
    }
        const EditData=()=>{
            dispatch({type:PUT_PRODUCT_PROGRESS,payload:show})
        }

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PROGRESS });
    }, []);

    return (
        <div>
            <div>
                <div>
                    <input type="text" name="name" onChange={change} value={postdata.name} />
                </div> 
                <div>
                    <input type="text" name="email" onChange={change} value={postdata.email} />
                </div>
                <div>
                    <button onClick={submitData}>Submit</button>
                </div>
            </div>
                <div>
                    <h3>update data</h3>
                <div>
                    <input type="text" name="name" onChange={changeupdate} value={show.name} />
                </div> 
                <div>
                    <input type="text" name="email" onChange={changeupdate} value={show.email} />
                </div>
                <div>
                    <button onClick={EditData}>Edit</button>
                </div>
            </div>
            
            {data.product.map((e, index) => {
                return (
                    <div key={index}>
                        <h1>{e.name}</h1>
                        <h1>{e.email}</h1>
                        <button onClick={()=>Deletedata(e.id)} >Delete</button>
                        <button onClick={()=>Updatedata(e)} >Update</button>
                    </div>
                );
            })}

        </div>
    );
};

export default Data1;
