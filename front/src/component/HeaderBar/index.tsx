import React from 'react';
import { useStyles } from 'src/component/HeaderBar/style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface HeaderBarProps {

}

const HeaderBar: React.FC<HeaderBarProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Top rated TMDb films.
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default HeaderBar;
