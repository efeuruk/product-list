import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useDispatch, useSelector, DefaultRootState } from "react-redux";
import { renderAll, filterCategory, filterBrand, filterPriceMargin } from '../../redux/actions'
import { FilterMenu } from '../FilterMenu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        filter: {
            marginBottom: theme.spacing(3),
            background: "#bdbdbd",
            padding: theme.spacing(3),
            height: "100%",
            width: "100%",
            [theme.breakpoints.up('md')]: {
                width: "auto",
            },
        },
        card: {
            minWidth: 200,
            marginBottom: theme.spacing(3)
        },
        filterTitle: {
            marginBottom: theme.spacing(2)
        },
        list: {
            marginLeft: -theme.spacing(1),
            marginRight: -theme.spacing(1)
        }
    }),
);

export const Filter: React.FC = () => {
    const classes = useStyles();
    const dispatch: any = useDispatch();
    const state: any = useSelector((state: DefaultRootState) => state);
    const filterState = state.filters;
    const { categories, brands, priceMargins } = filterState;
    return (
        <Box className={classes.filter}>
            <FilterMenu
                classes={classes}
                title="Categories"
                filterItems={categories}
                filterFunction={filterCategory}
                renderAll={renderAll}
                dispatch={dispatch} />
            <FilterMenu
                classes={classes}
                title="Brands"
                filterItems={brands}
                filterFunction={filterBrand}
                renderAll={renderAll}
                dispatch={dispatch} />
            <FilterMenu
                classes={classes}
                title="Price Margins"
                filterItems={priceMargins}
                filterFunction={filterPriceMargin}
                renderAll={renderAll}
                dispatch={dispatch} />
        </Box>
    )
}

export default Filter;