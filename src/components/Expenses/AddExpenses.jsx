import React,{useEffect, useState} from "react"
import { Grid,TextField,Button,Alert } from "@mui/material"
import Select from "react-select";
import axios from "axios";

export const AddExpenses=()=>{
    const [cat,setCat]=useState("");
    const [item,setItem]=useState(0);
    const [amt,setAmt]=useState(0);
    const [msg,setMsg]=useState("");
    const [isShow,setIsShow]=useState(false);
    const [options,setOptions]=useState([]);


    const getData=async()=>{
        const result=await axios.get("http://localhost:3030/catdd")
        setOptions(result.data);
    }
    useEffect(()=>{
        getData();
    },[])


    const handleAdd=async()=>{
        const payload={
            item,
            cat,
            amt
        };
        const result=await axios.post("http://localhost:3030/addexpenses",payload);
        setMsg(result.data);
    }
    useEffect(()=>{
        if(msg !== ""){
            setIsShow(true);
            resetData();
            setTimeout(()=>{
                // setIsShow(false)
                setMsg("")
            },2000)
        }else{
            setIsShow(false)
        }
    },[msg]);

    const resetData=()=>{
        setItem("");
        setAmt(0);
        setCat(0);
    }
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={3}> 
                  <Select  options={options} onChange={(opt)=>setCat(opt.value)}></Select>
                 </Grid>
                <Grid item xs={3}> <TextField value={item} variant="outlined" label="Item" fullWidth onChange={(e)=>setItem(e.target.value)}/> </Grid>
                <Grid item xs={3}> <TextField value={amt} variant="outlined" label="Amount" fullWidth onChange={(e)=>setAmt(e.target.value)}/> </Grid>
                <Grid item xs={3}> <Button variant="contained"fullWidth sx={{height:50}} onClick={handleAdd}>Submit</Button> </Grid>
                <Grid item xs={12}>{isShow && <Alert severity="success">{msg}</Alert>} </Grid>
            </Grid>

        </React.Fragment>
    )
}