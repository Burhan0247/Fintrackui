import React from "react"
import { Grid,Button } from "@mui/material"

export const DataListitem=({item})=>{
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={3} sx={{borderTop:"1px solid gray",pb:2,scrollMargin:2}}>{item.item}</Grid>
                <Grid item xs={3} sx={{borderTop:"1px solid gray",pb:2}}>{item.cat}</Grid>
                <Grid item xs={2} sx={{borderTop:"1px solid gray",pb:2}}>{item.amt}</Grid>
                <Grid item xs={2} sx={{borderTop:"1px solid gray",pb:2}}><Button variant="contained" color="success">Edit</Button></Grid>
                <Grid item xs={2} sx={{borderTop:"1px solid gray",pb:2}}><Button variant="contained" color="error">Delete</Button></Grid>

            </Grid>

        </React.Fragment>
    )
}