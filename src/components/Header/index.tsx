import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, InputBase, Link } from '@material-ui/core';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';

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
    }),
);

export const Header: React.FC = () => {
    const classes = useStyles();
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
                    <IconButton className={classes.shoppingBasket} aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <ShoppingBasketIcon />
                        </Badge>
                    </IconButton>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}