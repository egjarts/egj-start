import React, { Fragment } from "react";
import { AppBar, Hidden, Toolbar as MuiToolbar } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { FuseSearch, FuseShortcuts } from "@fuse";
import NavbarMobileToggleButton from "app/layout/shared-components/NavbarMobileToggleButton";
import QuickPanelToggleButton from "app/layout/shared-components/quickPanel/QuickPanelToggleButton";
import UserMenu from "app/layout/shared-components/UserMenu";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  separator: {
    width: 1,
    height: 64,
    backgroundColor: theme.palette.divider
  }
}));

function Toolbar(props) {
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const toolbarTheme = useSelector(({ fuse }) => fuse.settings.toolbarTheme);

  const classes = useStyles(props);

  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar id="fuse-toolbar" className="flex relative z-10" color="default">
        <MuiToolbar className="p-0">
          {config.navbar.display && config.navbar.position === "left" && (
            <Hidden lgUp>
              <NavbarMobileToggleButton className="w-64 h-64 p-0" />
              <div className={classes.separator} />
            </Hidden>
          )}

          <div className="flex flex-1">
            {config.toolbar.items && config.toolbar.items.shortcuts.display && (
              <Hidden mdDown>
                <FuseShortcuts className="px-16" />
              </Hidden>
            )}
          </div>

          <div className="flex">
            <UserMenu />

            {config.toolbar.items && config.toolbar.items.search.display && (
              <Fragment>
                <div className={classes.separator} />

                <FuseSearch />
              </Fragment>
            )}
            {config.toolbar.items &&
              config.toolbar.items.quickPanelToggleButton.display && (
                <Fragment>
                  <div className={classes.separator} />

                  <QuickPanelToggleButton />
                </Fragment>
              )}
          </div>

          {config.navbar.display && config.navbar.position === "right" && (
            <Hidden lgUp>
              <NavbarMobileToggleButton />
            </Hidden>
          )}
        </MuiToolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Toolbar;
