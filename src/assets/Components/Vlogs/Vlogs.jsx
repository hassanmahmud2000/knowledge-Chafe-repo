import { useEffect } from "react";
import { useState } from "react";
import Vlog from "../Vlog/Vlog";
import { PropTypes } from 'prop-types';


const Vlogs = ( {handleBookmark}) => {
    const [vlogs,setVlogs] = useState ([])
    useEffect ( ()=> {
        fetch ('Vlogs.json')
        .then (res => res.json ())
        .then (data => setVlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
           {/* <h1 className="text-3xl font-bold">Blogs : {vlogs.length }</h1> */}
            {
                vlogs.map (vlog =>  <Vlog
                     key={vlog.id} 
                     blog={vlog}
                     handleBookmark= {handleBookmark}> 
                     </Vlog>)
            }
        </div>
    );
};
Vlogs.propTypes= {
    handleBookmark :PropTypes.func.isRequired
}

export default Vlogs;