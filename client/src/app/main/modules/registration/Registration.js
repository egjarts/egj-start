import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FusePageSimple } from "@fuse";

const styles = theme => ({
  layoutRoot: {}
});

class Register extends Component {
  render() {
    const { classes } = this.props;
    return (
      <FusePageSimple
        classes={{
          root: classes.layoutRoot
        }}
        content={
          <div className="p-24">
            <h1>Register</h1>
            <div>
              <ol>
                <li>Registration steps are defined by the module itself</li>
                <li>
                  Determine whether any steps have been completed
                  <ul>
                    <li>
                      if the request for user completion steps is empty, then
                      the number of completed steps is zero
                    </li>
                  </ul>
                </li>

                <li>Show the current step that needs to be completed</li>
                <li>Record the completion of the current step</li>
              </ol>
            </div>
          </div>
        }
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(Register);
