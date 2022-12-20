import React,{useState,useEffect} from "react"
import axios from "axios"
import { DataListitem } from "./DataListitem"
import { Grid } from "@mui/material"

export const DataList=()=>{
    const [data,setData]=useState([]);
    const [refresh,setRefresh]=useState(false);
   const getData=async ()=>{
    const result=await axios.get("http://localhost:3030/earnings")
    setData(result.data);
   }
   useEffect(()=>{
    getData();
   },[]);

   const doRefresh=()=>{
    setRefresh(true)               //this can also be done
    // setRefresh(!refresh)
   }
   useEffect(()=>{
    if(refresh){
        getData();
        setRefresh(false);
    }
   },[refresh])

    return(
        <React.Fragment>
            <Grid container spacing={2}>
            {
                data.map((item)=>{
                    return(
                        <DataListitem item={item} doRefresh={doRefresh} />
                    )
                })
            }
            </Grid>

        </React.Fragment>
       
    )
}