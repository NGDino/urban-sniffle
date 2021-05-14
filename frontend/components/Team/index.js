import {makeStyles} from '@material-ui/core/styles';
import {Box, Grid, Card, Avatar,CardActions, CardContent, Typography, Button} from '@material-ui/core';
import ReactCardCarousel from 'react-card-carousel';

const useStyles = makeStyles((theme) => ({
    
    spacer: {
        height: 303,
        display: 'block'
    },
    background: {
        backgroundColor: '#554287'
    },
    bullet: {
        // display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },

}));



const Team = (props) => {
    const classes = useStyles()
    console.log('staff', props)
    const bull = <span className={classes.bullet}>•</span>;

    return(
        <div className ={classes.root}>
            <Grid container>
            <ReactCardCarousel  >
            <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </ReactCardCarousel>

            </Grid>

            
        
            {/* <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
                <div style={ MyCarousel.CARD_STYLE }>
                First Card
                </div>
                <div style={ MyCarousel.CARD_STYLE }>
                Second Card
                </div>
                <div style={ MyCarousel.CARD_STYLE }>
                Third Card
                </div>
                <div style={ MyCarousel.CARD_STYLE }>
                Fourth Card
                </div>
                <div style={ MyCarousel.CARD_STYLE }>
                Fifth Card
                </div>
            </ReactCardCarousel> */}
                    {/* <Avatar>

                    </Avatar> */}
            
            
        </div>
    )
}

export default Team;