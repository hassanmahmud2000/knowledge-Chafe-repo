import { useEffect } from "react";
import { useState } from "react";
import Vlog from "../Vlog/Vlog";

const Vlogs = () => {
    const [vlogs,setVlogs] = useState ([])
    useEffect ( ()=> {
        fetch ('Vlogs.json')
        .then (res => res.json ())
        .then (data => setVlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
           <h1 className="text-3xl">Vlogs : {vlogs.length }</h1>
            {
                vlogs.map (vlog =>  <Vlog key={vlog.id} blog={vlog}></Vlog>)
            }
        </div>
    );
};

export default Vlogs;