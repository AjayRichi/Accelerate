import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doughnut } from 'react-chartjs-2'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const state = {
    labels: ['Health', 'Misc Health', 'Other', 'Retirement'],
    datasets: [
        {
            label: 'Insurance',
            backgroundColor: [
                '#6600ff',
                '#00ff00',
                '#ffff00',
                '#ff3333',

            ],
            hoverBackgroundColor: [
                '#3d0099',
                '#00b300',
                '#e6e600',
                '#b30000',
            ],
            data: [40, 15, 20, 25,],
        }
    ]
}

const useStyles = makeStyles((theme) => ({
    root: {
        fontWeight: "bold",
        marginBottom: "7%"
    },
    link: {
        marginLeft: "120px"
    }
}))



export default function DoughnutChart() {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Typography component="h1" variant="h5" className={classes.root}  >
                Benefits overview
                    <Typography display="inline" className={classes.link}>
                    <Link href="#edit">Edit</Link>
                </Typography>
            </Typography>

            <Doughnut width="340"
                data={state}
                options={{
                    cutoutPercentage: 60,
                    legend: {
                        display: true,
                        position: 'right',
                    }
                }}
            />
            <br/>
        </React.Fragment>
    )
}

