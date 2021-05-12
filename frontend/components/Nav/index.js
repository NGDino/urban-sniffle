import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction, AppBar}  from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const Nav = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    return (
        <div>
            <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}} component='footer'>
                <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    console.log(value)
                    setValue(newValue);
                    console.log(value)
                }}
                showLabels
                className={classes.root}
                >

                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>

            </AppBar>
            
        </div>
        
    );
}

export default Nav;