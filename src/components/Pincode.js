import React, { useState } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux"; 
import { setData, setLoading, setError,selectLoading } from "../redux/features/data/dataSlice"; 
import { useNavigate } from "react-router-dom";

const Pincode = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector(selectLoading);
    const [isLoading,setIsLoading]=useState(false);
    const handle = (e) => {
        e.preventDefault();
        dispatch(setData(null)); 
        dispatch(setError(null)); 
        dispatch(setLoading(true)); // Start loading
        setIsLoading(true);

        if (input.length >= 6) { // Check for input length
            axios.get(`https://api.postalpincode.in/pincode/${input}`)
                .then((res) => {
                    dispatch(setData(res.data)); // Set data in Redux state
                    setIsLoading(false);
                    navigate("/display"); // Navigate to display route
                })
                .catch((err) => {
                    dispatch(setError(err)); 
                    setIsLoading(false);
                   
                })
                .finally(() => {
                    dispatch(setLoading(false)); 
                    
                    setIsLoading(false);
                });
        } else {
            alert("Enter at least 6 digits");
            dispatch(setLoading(false)); 
            setIsLoading(false);
        }

        setInput(""); // Clear input
    }

    return (
        <div>
            <form onSubmit={handle}>
                <input placeholder="Enter Pincode" id="search-pincode"value={input} onChange={(e) => setInput(e.target.value)} type="number" />
                <button className="button"type="submit">Submit</button>
            </form>
            {isLoading && <div id="loader">Loading</div>}
        </div>
    )
}

export default Pincode;
