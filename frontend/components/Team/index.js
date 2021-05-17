import {makeStyles} from '@material-ui/core/styles';
import {Box, Grid, Card, Avatar,CardActions, CardContent, Typography, Button} from '@material-ui/core';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const Team = (props) => {
    const classes = useStyles()

    return(
        <div className ={classes.root}>
          <Grid container className = {classes.staffContainer}>
            <Grid item component= {Typography} variant = 'h3' className= {classes.heading}>
              Meet our Team
            </Grid>
            <Grid item component='div'>
              <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </Carousel>;
            </Grid>
          </Grid>
        </div>
    )
}

export default Team;