import React, { useContext, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Box, Typography, AppBar } from "@material-ui/core";
import { MainContext } from "../MainContext";
import { makeStyles } from "@material-ui/core/styles";
import navbarstyles from "../styles/navbarstyles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles((theme) => navbarstyles);

const NavBar = (props) => {
    const { authenticated } = useContext(MainContext)
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);
    const styles = useStyles();
    return (
        <Box position="static" className={styles.nav_main}>
            <Box className={styles.nav_left}>
                <Typography variant="h4" className={styles.nav_title}>Failure to Comply</Typography>
            </Box>
            <Box className={styles.nav_right}>
                <Box className={styles.nav_links_box}>
                    <a href="/news" style={selected === '/news' ? { 'color': 'white' } : null} className={styles.nav_link}>
                        <Typography variant="h6">News</Typography>
                    </a>
                    <a href="/blog" style={selected === '/blog' ? { 'color': 'white' } : null} className={styles.nav_link}>
                        <Typography variant="h6">Blog</Typography>
                    </a>
                    <a href="/about" style={selected === '/about' ? { 'color': 'white' } : null} className={styles.nav_link}>
                        <Typography variant="h6">About</Typography>
                    </a>
                    <a href="/" style={selected === '/' ? { 'color': 'white' } : null} className={styles.nav_link}>
                        <Typography variant="h6">Home</Typography>
                    </a>
                </Box>
                <AccountCircleIcon className={styles.account_icon} />
            </Box>
        </Box>
    )
};

export default NavBar;