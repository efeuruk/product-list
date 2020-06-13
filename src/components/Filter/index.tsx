import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
    Box, Card, CardContent, Typography,
    List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox
} from '@material-ui/core';
import { useDispatch, useSelector, DefaultRootState } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        filter: {
            marginTop: theme.spacing(6),
            marginRight: theme.spacing(3),
            background: "#959595",
            padding: theme.spacing(3),
            height: "100%"
        },
        card: {
            minWidth: 200,
            marginBottom: theme.spacing(3)
        },
        filterTitle: {
            marginBottom: theme.spacing(2)
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
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.filterTitle} variant="h5">Categories</Typography>
                    <List component="nav" aria-label="categories">
                        {categories.map(categories => (
                            <ListItem key={`${categories}`} divider>
                                <ListItemText primary={`${categories}`} />
                                <ListItemSecondaryAction>
                                    <Checkbox
                                        edge="end"
                                        onChange={() => console.log("change")}
                                        checked={true}
                                        inputProps={{ 'aria-labelledby': "efe" }}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.filterTitle} variant="h5">Brands</Typography>
                    <List component="nav" aria-label="categories">
                        {brands.map(brands => (
                            <ListItem key={`${brands}`} divider>
                                <ListItemText primary={`${brands}`} />
                                <ListItemSecondaryAction>
                                    <Checkbox
                                        edge="end"
                                        onChange={() => console.log("change")}
                                        checked={true}
                                        inputProps={{ 'aria-labelledby': "efe" }}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.filterTitle} variant="h5">Price Margins</Typography>
                    <List component="nav" aria-label="categories">
                        {priceMargins.map(priceMargins => (
                            <ListItem key={`${priceMargins}`} divider>
                                <ListItemText primary={`${priceMargins}`} />
                                <ListItemSecondaryAction>
                                    <Checkbox
                                        edge="end"
                                        onChange={() => console.log("change")}
                                        checked={true}
                                        inputProps={{ 'aria-labelledby': "efe" }}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Filter;