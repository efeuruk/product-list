import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../../redux/actions/actionTypes';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            flexGrow: 1,
            background: "blue"
        }
    }),
);

export const List: React.FC = () => {
    const classes: any = useStyles();
    const state: any = useSelector(state => state.listItems);
    const dispatch: any = useDispatch();
    return (
        <Box className={classes.list}>
            <h1>{state.index}</h1>
            <button onClick={() =>
                dispatch({
                    type: ADD_TO_BASKET
                })}>Coştur</button>
            <button onClick={() =>
                dispatch({
                    type: REMOVE_FROM_BASKET
                })}>Söndür :(</button>
        </Box>
    )
}

export default List;