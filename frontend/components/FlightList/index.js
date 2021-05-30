import {useState} from 'react';

import{Container, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Hidden} from '@material-ui/core'
import { makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root:{
        marginBottom:'70px'
    },
    wineName: {
        display: 'block'
    },
    table: {
        Width: '100%',
    },
}))


export default function FlightList(props) {
    const [ moreInfo, setMoreInfo] = useState('');

    const classes = useStyles()



    const wines = props.props
    console.log('accordion props', wines)
    
    return (
    <div>
        
        <Container className={classes.root}>
            <Typography variant ='h4' align='center' gutterBottom>
                Bordeaux Flight
            </Typography>
            {wines.map((wine,index) => {
                return(
                    <Box>
                        <Typography variant='h5'>
                            {wine.year} {wine.name}
                        </Typography>
                        <Typography variant='subtitle2'>
                            {wine.specialAttribute} 
                        </Typography>
                        <Typography variant='subtitle1'>
                            {wine.description} 
                        </Typography>
                        <Box component='div' >
                        {moreInfo == wine._id ?
                            <Button onClick= {() => setMoreInfo('') }>
                                less Info
                            </Button>
                            :
                            <Button onClick= {() => setMoreInfo(wine._id) }>
                                More Info
                            </Button>
                        }
                            {moreInfo == wine._id && 
                            <div>
                                <Typography variant='h6'>
                                    Additional Information:
                                </Typography>
                                <Typography variant='body1'>
                                    <strong>Barrel Program</strong>: {wine.wineMaking.barrelProgram}
                                </Typography>
                                <TableContainer component={Paper}>
                                <Table className={classes.table} size="small" aria-label="a dense table">
                                    <Hidden xsUp>
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Stat</TableCell>
                                        <TableCell align="left">Amount</TableCell>
                                    </TableRow>
                                </TableHead>
                                    </Hidden>
                                
                                    <TableBody>
                                        <TableRow key='ta'>
                                            <TableCell align='right'> TA </TableCell>
                                            <TableCell align='right'> {wine.wineMaking.ta} </TableCell>
                                        </TableRow>
                                        <TableRow key='alc'>
                                            <TableCell align='right'> ALC </TableCell>
                                            <TableCell align='right'> {wine.wineMaking.alc} </TableCell>
                                        </TableRow>
                                        <TableRow key='ph'>
                                            <TableCell align='right'> ph </TableCell>
                                            <TableCell align='right'> {wine.wineMaking.ph} </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                               
                                </TableContainer>
                            </div>
                            
                            }
                        </Box>
                    </Box>
                ) 
            
        })}
        

        </Container>
    </div>
    );
}