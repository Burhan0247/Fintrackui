import React from "react"
import { AddEarning } from "./Earning/AddEarning"
import {Card,CardContent} from "@mui/material"
import { DataList } from "./Earning/DataList"

export const Earnings=()=>{
    return(
        <React.Fragment>
            <Card sx={{height:220}}><CardContent>
            
            <AddEarning />

            </CardContent></Card>
            <Card><CardContent>
                <DataList/>
            </CardContent></Card>
            
        </React.Fragment>
    )
}