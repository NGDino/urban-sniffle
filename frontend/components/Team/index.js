import {makeStyles} from '@material-ui/core/styles';
import {Box, Grid, Card, Avatar,CardActions, CardContent, Typography, Button} from '@material-ui/core';
import MyCarousel from '../MyCarousel';

const useStyles = makeStyles((theme) => ({
    
    root:{
      display: 'flex',
      // overflow: 'hidden',
      backgroundColor: '#554287'

    },
    staffContainer: {

    },
      heading: {

        
      },
      pos: {
        marginBottom: 12,
      },

}));



const Team = (props) => {
    const classes = useStyles()

    return(
        <div className ={classes.root}>
          <Grid container className = {classes.staffContainer}>
            <Grid item component= {Typography} variant = 'h3' className= {classes.heading}>
              Meet our Team
            </Grid>
            <Grid item component='div'>
              <MyCarousel/>
            </Grid>
          </Grid>
        </div>
    )
}

export default Team;