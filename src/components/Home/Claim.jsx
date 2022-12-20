import React, { useState } from "react";
import { Grid,TextField,Button } from "@mui/material";

export const Claim=()=>{
    const [empId,setEmpId]=useState(0)
    const [amnt,setAmnt]=useState(0)



    const handleSubmit=()=>{
        const payload={
            empId,
            amnt,
        };
        localStorage.setItem("expclaim",JSON.stringify(payload))

    }
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={4}> <TextField onChange={(e)=>setEmpId(e.target.value)} variant="outlined" label="Employee ID"/> </Grid>
                <Grid item xs={4}><TextField onChange={(e)=>setAmnt(e.target.value)} variant="outlined" label="Amount"/></Grid>
                <Grid item xs={4}><Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button></Grid>
            </Grid>
            
        </React.Fragment>
    )
}