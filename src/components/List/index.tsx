import React from 'react'
import { ListItem } from '../ListItem';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import { Box } from '@material-ui/core';
import { useDispatch, useSelector, DefaultRootState } from "react-redux";
import { addToBasket } from '../../redux/actions'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            flexWrap: "wrap",
            marginBottom: theme.spacing(5)
        },
        cardContainer: {
            margin: theme.spacing(1),
            [theme.breakpoints.up('sm')]: {
                minWidth: "calc(20% - 10px)",
            },
        },
        card: {
            width: "100%",
            [theme.breakpoints.up('sm')]: {
                maxWidth: "350px",
            },
        }
    }),
);

export const List: React.FC = () => {
    const classes: any = useStyles();
    const dispatch: any = useDispatch();
    const state: any = useSelector((state: DefaultRootState) => state);
    return (
        <Box>
            <Typography variant="h4" component="h2" style={{ marginLeft: "8px" }}>Products</Typography>
            <Grid className={classes.container}>
                {state.filters.filteredResult.map((data, index) => (
                    <ListItem
                        key={index}
                        data={data}
                        dispatch={dispatch}
                        addToBasket={addToBasket}
                        classes={classes} />
                ))}
            </Grid>
        </Box>
    )
}

export default List;