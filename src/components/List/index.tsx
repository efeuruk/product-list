import React from 'react'
import { ListItem } from '../ListItem';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector, DefaultRootState } from "react-redux";
import { addToBasket } from '../../redux/actions'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: theme.spacing(5)
        },
        cardContainer: {
            margin: theme.spacing(2),
            width: "100%",
            [theme.breakpoints.up('sm')]: {
                maxWidth: "350px",
            },
        },
        card: {
            height: "100%",
            display: "flex",
            flexFlow: "column",
            justifyContent: "space-between",
        },
        cardContent: {

        },
        notAvailable: {
            marginLeft: theme.spacing(1)
        }
    }),
);

export const List: React.FC = () => {
    const classes: any = useStyles();
    const dispatch: any = useDispatch();
    const state: any = useSelector((state: DefaultRootState) => state);
    const filterState = state.filters;
    return (
        <Grid className={classes.container}>
            {(filterState.filteredResult.length > 0) ? filterState.filteredResult.map((data, index) => (
                <ListItem
                    key={index}
                    data={data}
                    dispatch={dispatch}
                    addToBasket={addToBasket}
                    classes={classes} />
            )) :
                <Typography className={classes.notAvailable}>This product is not available</Typography>
            }
        </Grid>
    )
}

export default List;