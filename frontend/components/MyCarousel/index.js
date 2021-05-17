import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Typography, Button, Grid, Card, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
      },
}))

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

function MyCarousel(props){
    const members = props.props
    console.log(members)

    const classes = useStyles()

    return (
        // <div></div>
        <Carousel autoPlay={false} animation= 'slide' index = {0}>
            {
                members.map( (member, i) => <Item key={i} item={member} /> )
            }
        </Carousel>
    )
}

function Item(member){
    console.log('inside Item', member.item)
    const classes = useStyles()
    const  image = urlFor(member.item.staffImage)

    return (
        <Grid container component = {Paper} className={classes.root} alignItems='center' justify = 'center'>
            <Grid item xs = {12} >
                <Avatar className={classes.avatar} alt = {`picture of ${member.item.name}`} src = {image}/>
            </Grid>
            <Grid item xs={12} component ={Typography} variant='h5'>
                {member.item.name}
            </Grid>
            <Grid item item xs={12} component = {Typography} variant='subtitle1'>
                <strong>{member.item.position}</strong> 
            </Grid>
            <Grid item item xs={12} component = {Typography} variant='subtitle1'>
                <strong>Favorite Wine:</strong> {member.item.favoriteWine}
            </Grid>
         
    </Grid>

    )
}

export default MyCarousel;


