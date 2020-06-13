import React from 'react'
import { ListItem } from '../ListItem';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import { Box } from '@material-ui/core';
import { useDispatch, useSelector, DefaultRootState } from "react-redux";
import { addToBasket, removeFromBasket } from '../../redux/actions'

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
                        addToBasket={addToBasket}
                        removeFromBasket={removeFromBasket}
                        classes={classes} />
                ))}
            </Grid>
        </Box>
    )
}

export default List;