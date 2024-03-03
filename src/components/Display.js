import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPincodeData } from '../redux/features/data/dataSlice';


const Display = () => {
    const pincodeData = useSelector(selectPincodeData);
    const [filterInput, setFilterInput] = useState('');

  
    if(pincodeData[0].Status!="Success"){
    
    }

    // Function to handle onChange event of the filter input
    const handleFilterChange = (e) => {
        setFilterInput(e.target.value);
    };

    // Filter the pincodeData based on filterInput
    const filteredData = pincodeData ? pincodeData[0].PostOffice.filter(postOffice =>
        postOffice.Name.toLowerCase().includes(filterInput.toLowerCase())
    ) : [];

    return (
        <div id="main">
            {<div id="main-2">
              
                <input 
                id="filter"
                    type="text" 
                    placeholder="Filter address" 
                    value={filterInput} 
                    onChange={handleFilterChange} 
                />
               
                {filteredData.length > 0 ? (
                    <>
                      
                        {filteredData.map((postOffice, ind) => (
                            <div className="cards" key={ind}>
                                <div className="card">
                                    <p>Name: {postOffice.Name}</p>
                                    <p>Branch Type: {postOffice.BranchType}</p>
                                    <p>Delivery Status: {postOffice.DeliveryStatus}</p>
                                    <p>District: {postOffice.District}</p>
                                    <p>State: {postOffice.State}</p>
                                    <p>Country: {postOffice.Country}</p>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                 
                    <div>No data found</div>
                )}
            </div>}
        </div>
    )
}

export default Display;
