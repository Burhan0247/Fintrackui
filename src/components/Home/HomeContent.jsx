import React from "react"
import { Claim } from "./Claim";
import { Account } from "./Account";
import { Card,CardContent } from "@mui/material";



export const HomeContent=()=>{
    return(
        <React.Fragment>
            <Card><CardContent>
            <Claim/>
            </CardContent></Card><br />
            <Card><CardContent>
                <Account/>
            </CardContent></Card>

        </React.Fragment>
    );
};