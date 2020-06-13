import React from 'react'
import { connect } from 'react-redux';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            flexGrow: 1,
            background: "blue"
        }
    }),
);

export const List: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.list}>
            b
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(List)