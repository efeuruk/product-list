import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        filter: {
            marginRight: theme.spacing(3),
            background: "red",
            padding: theme.spacing(8)
        },
        card: {
            padding: theme.spacing(3),
            marginBottom: theme.spacing(3)
        }
    }),
);

export const Filter: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.filter}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography>Bilgisayarlar</Typography>
                    <Typography>10 ürün var</Typography>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <Typography>Bilgisayarlar</Typography>
                    <Typography>10 ürün var</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Filter;