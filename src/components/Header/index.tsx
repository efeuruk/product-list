import React from 'react';
import {
    AppBar, Toolbar, IconButton, Typography, Box, InputBase, Link, Menu, MenuItem, Divider
    , Card, CardMedia, CardContent, CardActions, Button
} from '@material-ui/core';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import { useDispatch, useSelector, DefaultRootState } from "react-redux";
import { removeFromBasket, search } from '../../redux/actions'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        headerContainer: {
            justifyContent: "space-between"
        },
        linkContainer: {
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
        },
        basketButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            width: "15%",
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        menuIcon: {
            display: 'block',
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        logo: {
            '&:hover': {
                textDecoration: 'none'
            },
        },
        shoppingBasket: {
            marginRight: theme.spacing(4),
            [theme.breakpoints.up('sm')]: {
                marginRight: "0"
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
        card: {
            maxWidth: "300px",
            margin: theme.spacing(0, "10px")
        },
        empty: {
            padding: theme.spacing(3)
        },
        button: {
            margin: theme.spacing(0, "auto")
        }
    }),
);

export const Header: React.FC = () => {
    const classes = useStyles();
    const dispatch: any = useDispatch();
    const state: any = useSelector((state: DefaultRootState) => state);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const basketState = state.basket;
    const { basketData } = basketState

    const handleSearch = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(search(event.target.value))
    }

    const handleBasketOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleBasketClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'basket'
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleBasketClose}
        >
            {(basketData.length > 0) ? basketData?.map((data, index) => {
                return (
                    <Box key={index}>
                        <MenuItem>
                            <Card className={classes.card} key={data[0]?.id}>
                                <CardMedia
                                    component="img"
                                    alt={data[0]?.image}
                                    image={data[0]?.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {data[0]?.productName}, {data[0]?.category}
                                    </Typography>
                                    <Typography component="p">Price: {data[0]?.price} TL</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button className={classes.button} variant="contained" color="secondary" data-index={index} disableElevation onClick={(e) => dispatch(removeFromBasket(e.currentTarget.dataset))}>
                                        Remove From Basket
                                        </Button>
                                </CardActions>
                            </Card>
                        </MenuItem>
                        <Divider />
                    </Box>
                )
            }) :
                <MenuItem className={classes.empty}>
                    <Typography>Basket is empty</Typography>
                </MenuItem>
            }
        </Menu>
    );

    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.headerContainer}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link className={classes.logo} href="#" onClick={preventDefault} color="inherit">
                            LOGO
                        </Link>
                    </Typography>
                    <MenuIcon className={classes.menuIcon} />
                    <Box className={classes.linkContainer}>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Link className={classes.logo} href="#" onClick={preventDefault} color="inherit">
                                Link1
                        </Link>
                        </Typography>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Link className={classes.logo} href="#" onClick={preventDefault} color="inherit">
                                Link2
                        </Link>
                        </Typography>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Link className={classes.logo} href="#" onClick={preventDefault} color="inherit">
                                Link3
                        </Link>
                        </Typography>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Link className={classes.logo} href="#" onClick={preventDefault} color="inherit">
                                Link4
                        </Link>
                        </Typography>
                    </Box>
                    <IconButton
                        className={classes.shoppingBasket}
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleBasketOpen}
                        aria-label={`show ${basketState.index} new notifications`}
                        color="inherit">
                        <Badge badgeContent={basketState.index} color="secondary">
                            <ShoppingBasketIcon />
                        </Badge>
                    </IconButton>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Products..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleSearch}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}

export default Header;