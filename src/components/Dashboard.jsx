import React from "react"
import { Card,CardContent } from "@mui/material";
import { Finance } from "./Dashboard/Finance";

export const Dashboard=()=>{
    return(
        <React.Fragment>
            <Card><CardContent>
                <Finance/>
                </CardContent></Card>
            

        </React.Fragment>
    );
};