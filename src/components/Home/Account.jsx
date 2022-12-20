import React,{useEffect, useState} from "react"
import { Grid,TextField,Button } from "@mui/material"
import { useNavigate } from "react-router-dom";


export const Account=()=>{
    const [curr,setCurr]=useState({});
    const [elig,setElig]=useState(0);
    const [apamt,setApamt]=useState(0);
    const [outs,setOuts]=useState(0);
    const [sanc,setSanc]=useState(0);



    const navigate = useNavigate();

    useEffect (()=>{
        const currData = localStorage.getItem("expclaim");
        currData && setCurr(JSON.parse(currData))
    },[])


    const handleReject=()=>{
        localStorage.removeItem("expclaim")
        setCurr({});
    }

    useEffect(()=>{
        setSanc(apamt-outs)
    },[apamt,outs])

    const handleApproved= async ()=>{
        const payload={
            ...curr,
            eligAmt:elig,
            apprAmt:apamt,
            outstanding: outs,
            sanc,
        };
        await localStorage.setItem("expclaim",JSON.stringify(payload));
        navigate("/dash")
    };


    return(
        <React.Fragment>
              {curr.empId && !curr.sanc && (
            <Grid container spacing={2}>
                <Grid item xs={3}>{curr.empId}</Grid>
                <Grid item xs={3}>{curr.amnt}</Grid>
                <Grid item xs={3}><TextField variant="outlined" label="Eligable Amount" 
                                    onChange={(e)=>setElig(e.target.value)} fullWidth/></Grid>
                <Grid item xs={3}><TextField variant="outlined" label="Approved Amount" 
                                    onChange={(e)=>setApamt(e.target.value)} fullWidth/></Grid>
                <Grid item xs={3}><TextField variant="outlined" label="Outstanding amount" 
                                    onChange={(e)=>setOuts(e.target.value)} fullWidth/></Grid>
                <Grid item xs={3}>Sanctioned Amount:{sanc}</Grid>
                <Grid item xs={3}><Button variant="contained" color="success"
                                      onClick={handleApproved}>Approved</Button></Grid>
                <Grid item xs={3}><Button variant="contained" color="error" onClick={handleReject}>Rejected</Button></Grid>
            </Grid>
            )}
            
        </React.Fragment>
    )
}