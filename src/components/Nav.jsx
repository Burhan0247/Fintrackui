import React from "react"
import { Link } from "react-router-dom"
import { Grid,Card,CardContent,Button } from "@mui/material"

export const Nav=()=>{
    return(
        <React.Fragment>
            <Card sx={{border:1}}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={2}> <Link to="/home"> <Button variant="contained" fullWidth>Home</Button> </Link> </Grid>
                        <Grid item xs={2}> <Link to="/dash"> <Button variant="contained" fullWidth>Dashboard</Button> </Link> </Grid>
                        <Grid item xs={2}> <Link to="/earnings"> <Button variant="contained" fullWidth>Earnings</Button> </Link> </Grid>
                        <Grid item xs={2}> <Link to="/expenses"> <Button variant="contained" fullWidth>Expenses</Button> </Link> </Grid>
                    </Grid>

                </CardContent>
            </Card>
            <br />
            

        </React.Fragment>
    )
}