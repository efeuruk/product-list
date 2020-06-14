import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

interface Props {
    data: any;
    dispatch: any;
    addToBasket: (id: number) => void;
    classes: any;
}

export const ListItem: React.FC<Props> = ({ data, dispatch, addToBasket, classes }) => {
    return (
        <Grid item key={data.productName} className={classes.cardContainer}>
            <Card className={classes.card}>
                <CardMedia
                    component="img"
                    alt={data.image}
                    image={data.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.productName}, {data.category}
                    </Typography>
                    <Typography component="p">Price: {data.price} TL</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="secondary" onClick={() => dispatch(addToBasket(data.id))}>
                        Add to Basket
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ListItem;