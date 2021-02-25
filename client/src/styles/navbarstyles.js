import theme from "../theme/mui_theme";
const navbarstyles = {
    nav_main: {
        width: "100%",
        height: "70px",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        justifyContent: "space-between"
    },
    nav_left: {
        display: "flex",
        alignItems: "center",
    },
    nav_title: {
        color: "white",
        marginLeft: "20px"
    },
    nav_right: {
        display: "flex",
        alignItems: "center",
    },
    nav_links_box: {
        display: "flex",

    },
    nav_link: {
        color: "grey",
        textDecoration: "none",
        marginRight: "10px"
    },
    nav_link_selected: {
        color: "white",
        textDecoration: "none",
        marginRight: "10px"
    },
    account_icon: {
        color: "white",
        marginRight: "10px",
    }

}

export default navbarstyles;