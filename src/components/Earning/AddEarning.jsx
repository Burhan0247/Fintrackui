import React,{useEffect, useState} from "react"
import { Grid,Button,TextField,Alert } from "@mui/material"
import Select from "react-select";
import axios from "axios";

export const AddEarning=()=>{
    const [cat,setCat]=useState("");
    const [item,setItem]=useState("");
    const [amt,setAmt]=useState(0);
    const [msg,setMsg]=useState("");
    const [isShow,setIsShow]=useState(false);
    const [options,setOptions]=useState([])

    const getData=async ()=>{
        const result =await axios.get("http://localhost:3030/catdd")
        setOptions(result.data);
    };

    useEffect(()=>{
        getData();
    },[])


    const handleAdd= async ()=>{
        const payload={
            item,
            cat,
            amt,
        };
        const result=await axios.post("http://localhost:3030/addearning",payload);
        setMsg(result.data);

    }

    useEffect(()=>{
        if(msg!==""){
            setIsShow(true);
            resetData();
            setTimeout(()=>{
                // setIsShow(false);    
                setMsg("");
            },5000)
        }else{
            setIsShow(false);
        }
    },[msg]);

    const resetData=()=>{
        setItem("");
        setAmt(0);
        setCat(0);
    }

    return(
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={3}> 
                  <Select  options={options} onChange={(opt)=>setCat(opt.value)}/>
                 </Grid>
                <Grid item xs={3}> <TextField value={item} variant="outlined" label="Item" onChange={(e)=>setItem(e.target.value)}/> </Grid>
                <Grid item xs={3}> <TextField value={amt} variant="outlined" type="number" label="Amount" onChange={(e)=>setAmt(e.target.value)}/> </Grid>
                <Grid item xs={3}> <Button variant="contained" onClick={handleAdd} disabled={item.length<3 || amt<5} sx={{height:50}}>Submit</Button> </Grid>
                <Grid item xs={12}>{isShow && <Alert>{msg}</Alert>}</Grid>
            </Grid>
        </React.Fragment>
    )
}