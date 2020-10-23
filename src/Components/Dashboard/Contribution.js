import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        fontWeight: "bold",
        marginBottom: "6%"
    },
    link: {
        marginLeft: "120px"
    },
    name: {
        fontWeight: "bold",
        fontSize: "15px"

    },
    value: {
        fontWeight: "bold",

    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          width: theme.spacing(30),
          height: theme.spacing(10),
          marginBottom:theme.spacing(0.5)
        },
      },
      
}))

export default function Contribution() {
    const classes = useStyles()
    return (
        <React.Fragment>
            
            <Typography component="h1" variant="h5"  className={classes.root} >
                Contributions Overview
                    <Typography display="inline" className={classes.link} >
                    <Link href="#">Edit</Link>
                </Typography>
            </Typography>
            <Typography component="h1" noWrap paragraph={true} className={classes.name} >
                TOTAL BALANCE
                    <Typography variant="h5" className={classes.value} >
                    $0
                </Typography>
            </Typography>
            <div className={classes.paper}>
            <Paper  elevation={0}>
                <Typography component="h1" noWrap className={classes.name} >
                    TOTAL VANGUARD ASSETS
            </Typography>
                <Typography variant="h5" className={classes.value} >
                    $0
                </Typography>
            </Paper>
            <Paper  elevation={0} >
                <Typography component="h1" noWrap className={classes.name} >
                    CONNECTED ACCOUNTS <br/>BALANCE
            </Typography>
                <Typography variant="h5" className={classes.value} >
                    $0
                </Typography>
            </Paper>
            </div>
            <div className={classes.paper}>
            <Paper  elevation={0}>
                <Typography component="h1" noWrap className={classes.name} >
                    YEARLY CONTRIBUTIONS
            </Typography>
                <Typography variant="h5" className={classes.value} >
                    $0
                </Typography>
            </Paper>
            <Paper  elevation={0} >
                <Typography component="h1" noWrap className={classes.name} >
                    RISK ATTRIBUTE
            </Typography>
                <Typography variant="h5" className={classes.value} >
                    $0
                </Typography>
            </Paper>
            </div>
        </React.Fragment>
    )
}
