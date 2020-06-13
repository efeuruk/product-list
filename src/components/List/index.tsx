// TODO: Action fonksiyonlarından yararlan
import React from 'react'
import { ListItem } from '../ListItem';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import { Box } from '@material-ui/core';
import { useDispatch, useSelector, DefaultRootState } from "react-redux";
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../../redux/actions/actionTypes';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardContainer: {
            display: "flex",
            flexWrap: "wrap"
        },
        card: {
            margin: theme.spacing(1),
            minWidth: "100%",
            [theme.breakpoints.up('sm')]: {
                minWidth: "calc(33% - 10px)"
            },
        }
    }),
);

export const List: React.FC = () => {
    const classes: any = useStyles();
    const dispatch: any = useDispatch();
    const state: any = useSelector((state: DefaultRootState) => state);
    const listItemsState = state.listItems;
    const { data } = listItemsState;
    return (
        <Box>
            <Typography variant="h4" component="h2">Products</Typography>
            <Grid className={classes.cardContainer}>
                {data.map(data => (
                    <ListItem
                        data={data}
                        dispatch={dispatch}
                        addToBasket={ADD_TO_BASKET}
                        removeFromBasket={REMOVE_FROM_BASKET}
                        classes={classes} />
                ))}
            </Grid>
        </Box>
    )
}

export default List;