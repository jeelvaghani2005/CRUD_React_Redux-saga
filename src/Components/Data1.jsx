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
            <button type="button" class=" mt-5 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Data
             </button>

{/* modal */}

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <div>
                                    <input className="form-control" placeholder="UserName" type="text" name="name" onChange={change} value={postdata.name} />
                                </div>
                                <div>
                                    <input className="form-control mt-3 mb-3" placeholder="UserEmail" type="text" name="email" onChange={change} value={postdata.email} />
                                </div>
                                <div>
                                    <button className="btn btn-success" data-bs-dismiss="modal" onClick={submitData}>Submit</button>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* show data */}
            <table className="table mt-5" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {data.product.map((e, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>
                                    <button className=" ms-2 btn btn-danger" onClick={() => Deletedata(e.id)} >Delete</button>
                                    <button className=" ms-2 btn btn-success" data-bs-toggle="modal" data-bs-target="#updatemodal" onClick={() => Updatedata(e)} >Update</button>
                                </td>
                            </tr>

                        </tbody>
                    );
                })}
            </table>


            <div class="modal fade" id="updatemodal" tabindex="-1" aria-labelledby="updatemodal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <h3>Update Data</h3>
                                <div>
                                    <input type="text"  className="form-control mt-3" placeholder="UserName" name="name" onChange={changeupdate} value={show.name} />
                                </div>
                                <div>
                                    <input type="text" className="form-control mb-2 mt-3" placeholder="UserEmail" name="email" onChange={changeupdate} value={show.email} />
                                </div>
                                <div>
                                    <button className="btn btn-success" data-bs-dismiss="modal" onClick={EditData}>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Data1;
