import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

interface Props {
    data: any;
    dispatch: any;
    addToBasket: () => void;
    removeFromBasket: () => void;
    classes: any;
}

export const ListItem: React.FC<Props> = ({ data, dispatch, addToBasket, removeFromBasket, classes }) => {
    return (
        <Grid item key={data.productName} className={classes.card}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={data.image}
                        height="auto"
                        image={data.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {data.productName}
                        </Typography>
                        <Typography component="p">Price: {data.price} TL</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="secondary" onClick={() => dispatch(addToBasket())}>
                        Add to Basket
                                    </Button>
                    <Button size="small" color="default" onClick={() => dispatch(removeFromBasket())}>
                        Remove From Basket
                                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ListItem;