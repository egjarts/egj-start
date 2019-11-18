import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { Redirect } from "react-router-dom";

const Home = props => {
  const user = useSelector(({ auth }) => auth.user);

  const HomeModule = user.home
    ? () => <Redirect to={user.home} />
    : props => {
        return (
          <Fragment>
            <h1>Home</h1>
          </Fragment>
        );
      };
  return (
    <Fragment>
      <HomeModule />
    </Fragment>
  );
};

export default Home;
