import React from "react";
import { Header } from "../Header/Header";
// import { AsideMenu } from "../asideMenu/asideMenu";
import { useStyles } from "./defaultLayout.styles";

const DefaultLayout = ({ children, routes }) => {
  const classes = useStyles();
  return (<div className={classes.app} >
    <div className={classes.header} >
      <Header />
    </div> {
      /* <div className={classes.asideMenu}>
              <AsideMenu links={routes} />
            </div> */
    }

    <div className={classes.content} > {children} </div> </div >
  );
};

export { DefaultLayout };