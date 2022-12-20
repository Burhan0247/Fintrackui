import React from "react"
import { Grid,Button } from "@mui/material"
import axios from "axios"

export const DataListitem=({item,doRefresh})=>{

    const handleDelete=async (_id)=>{
        const payload={_id};
        await axios.post("http://localhost:3030/deletearning",payload);
        doRefresh();   
    };
    return(
        <React.Fragment>
            <Grid item xs={3} sx={{borderTop:"1px solid black",pb:2}}>{item.item}</Grid>
            <Grid item xs={3} sx={{borderTop:"1px solid black"}}>{item.cat}</Grid>
            <Grid item xs={2} sx={{borderTop:"1px solid black"}}>{item.amt}</Grid>
            <Grid item xs={2} sx={{borderTop:"1px solid black"}}><Button variant="contained" color="success"> Edit</Button></Grid>
            <Grid item xs={2} sx={{borderTop:"1px solid black",pb:2}}>
                <Button variant="contained" color="error" 
                onClick={()=>handleDelete(item._id)}>Delete</Button>
                </Grid>
        </React.Fragment>
    )
}