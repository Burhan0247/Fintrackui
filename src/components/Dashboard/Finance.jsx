import React,{useEffect,useState} from "react"
import { Grid,Button,TextField } from "@mui/material"
import { useNavigate } from "react-router-dom";

export const Finance=()=>{
    const [curr,setCurr]=useState({});
    const [paidamnt,setPaidamnt]=useState(0);
    const [balance,setBalance]=useState(0);

    const navigate=useNavigate();

    useEffect(()=>{
        const currData=localStorage.getItem("expclaim");
        currData && setCurr(JSON.parse(currData));
    },[])
    useEffect(()=>{
        setBalance(curr.sanc-paidamnt);

    },[paidamnt]);

    const handleApproved= ()=>{
        const payload={
            ...curr,
            paidamnt,
            balance
        }
        localStorage.setItem("expclaim",JSON.stringify(payload))
        navigate("/")
        
    };

    const handleReject=()=>{
        localStorage.removeItem("expclaim");
        navigate("/")



    }

    return(
        <React.Fragment>
            {curr.sanc && (
            <Grid container spacing={2}>
                <Grid item xs={3}>{curr.empId}</Grid>
                <Grid item xs={3}>{curr.amnt}</Grid>
                <Grid item xs={3}>{curr.eligAmt}</Grid>
                <Grid item xs={3}>{curr.apprAmt}</Grid>
                <Grid item xs={3}>{curr.outstanding}</Grid>
                <Grid item xs={3}>{curr.sanc}</Grid>
                <Grid item xs={3}><TextField variant="outlined" label="Paid Amount"
                                   onChange={(e)=>setPaidamnt(e.target.value)}/></Grid>
                <Grid item xs={3}>{balance}</Grid>
                <Grid item xs={3}><Button variant="contained" color="success" onClick={handleApproved}>Approved</Button></Grid>
                <Grid item xs={3}><Button variant="contained" color="error" onClick={handleReject}>Reject</Button></Grid>
            </Grid>
            )}
        </React.Fragment>
    )
}