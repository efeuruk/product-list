import React from 'react'
import { ListItem } from '../ListItem';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector, DefaultRootState } from "react-redux";
import { addToBasket } from '../../redux/actions'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flexGrow: 1,
            margin: theme.spacing(0, "auto", 5)
        },
        notAvailable: {
            marginLeft: theme.spacing(1)
        },
        img: {
            objectFit: "contain"
        }
    }),
);

export const List: React.FC = () => {
    const classes: any = useStyles();
    const dispatch: any = useDispatch();
    const state: any = useSelector((state: DefaultRootState) => state);
    const filterState = state.filters;
    return (
        <Grid container spacing={2} className={classes.container}>
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