import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";


const Header = () => {
    return (
        <AppBar position="static"
            style={
                { position: "fixed" }
            } >
            <Toolbar>
                <IconButton edge="start"
                    color="inherit"
                    aria-label="menu" >
                    { /* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6" > Menu </Typography>
                <Button color="inherit" > Login </Button>
            </Toolbar >
        </AppBar>
    )
}

export { Header };