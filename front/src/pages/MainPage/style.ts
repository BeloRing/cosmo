import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        filmItem: {
            height: 150,
            border: '1px solid green',
            margin: 15,
            padding: 8
        },
        star: {
            fontSize: 20,
            color: '#3f51b5'
        },
        overview: {
            height: 72,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        rate: {
            display: 'flex',
            alignItems: 'center',
            margin: 4
        }
    })
);

