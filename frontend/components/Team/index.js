import {makeStyles} from '@material-ui/core/styles';
import {Grid, Card, Avatar} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
    },
    background: {
        backgroundColor: '#554287'
    }

}));

const Team = (props) => {
    const classes = useStyles()
    console.log('staff', props)

    return(
        <div className ={classes.root}>
            <Grid 
            container
            className= {classes.background}
            direction = 'row'
            alignItems = 'center'
            justify='center'
            // make a card
            >
                <Grid 
                item
                component={Card}
                xs ={5}
                
                >
                    <Avatar>

                    </Avatar>
                    {/* image avatar   */}
                </Grid>
            
            </Grid>
            
        </div>
    )
}

export default Team;