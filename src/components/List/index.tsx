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
            [theme.breakpoints.up('md')]: {
                margin: theme.spacing(0, 1, 5, 3),
            },
        },
        notAvailable: {
            marginLeft: theme.spacing(1)
        },
        img: {
            objectFit: "contain"
        },
        actions: {
            flexFlow: "column",
            alignItems: "flex-start"
        },
        buttonContainer: {
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: theme.spacing(1)
        },
        button: {
            border: "1px solid black",
            padding: "3px",
            minWidth: "32px",
            marginLeft: theme.spacing(1),
            '&:hover': {
                backgroundColor: "teal",
                color: "white"
            },
        },
        quantity: {
            marginLeft: theme.spacing(3),
            alignSelf: "center"
        },
        addToBasket: {
            border: "1px solid teal",
            '&:hover': {
                backgroundColor: "teal",
                color: "white"
            },
        }
    }),
);

export const List: React.FC = () => {
    const classes: any = useStyles();
    const dispatch: any = useDispatch();
    const state: any = useSelector((state: DefaultRootState) => state);
    const filterState = state.filters;
    return (
        <Grid container spacing={3} className={classes.container}>
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