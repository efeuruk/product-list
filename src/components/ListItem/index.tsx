import React, { useState } from 'react'
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";


interface Props {
    data: any;
    dispatch: any;
    addToBasket: (id: number, quantity: number) => void;
    classes: any;
}


export const ListItem: React.FC<Props> = ({ data, dispatch, addToBasket, classes }) => {
    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decrementQuantity = () => {
        if (quantity > 0)
            setQuantity(quantity - 1)
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={data.productName}>
            <Card>
                <CardMedia
                    className={classes.img}
                    component="img"
                    alt={data.image}
                    image={data.image}
                    width="350px"
                    height="350px"
                />
                <Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {data.productName}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="p">
                            {data.category}
                        </Typography>
                        <Typography component="p">Price: {data.price} TL</Typography>
                    </CardContent>
                    <CardActions className={classes.actions}>
                        <Box className={classes.buttonContainer}>
                            <Box style={{ alignSelf: "flex-start" }} component="span">
                                <Button className={classes.button} onClick={incrementQuantity}>
                                    +
                                </Button>
                                <Button className={classes.button} onClick={decrementQuantity}>
                                    -
                                </Button>
                            </Box>
                            <Typography className={classes.quantity}>{quantity}</Typography>
                        </Box>
                        <Button className={classes.addToBasket} size="small" color="secondary" onClick={() => dispatch(addToBasket(data.id, quantity))}>
                            Add to Basket
                        </Button>
                    </CardActions>
                </Box>
            </Card>
        </Grid>
    )
}

export default ListItem;