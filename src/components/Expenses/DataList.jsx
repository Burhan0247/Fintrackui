import React, { useEffect, useState } from "react"
import { Grid } from "@mui/material"
import { DataListitem } from "./DataListitem"
import axios from "axios"

export const DataList=()=>{
    const [data,setData]=useState([]);
    
    const getData=async ()=>{
        const result=await axios.get("http://localhost:3030/expenses")
        setData(result.data);
    }
    useEffect(()=>{
        getData();

    },[])
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                {
                    data.map((item)=>{
                        return(
                            <DataListitem item={item}/>
                        )
                    })
                }
            </Grid>

        </React.Fragment>
    )
}