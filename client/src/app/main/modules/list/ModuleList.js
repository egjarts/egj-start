import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import modules from "app/main/modules";

const List = props => {
  return (
    <Fragment>
      {modules.map(module => {
        let path = module.routes[0].path;
        console.log({ type: typeof path, path });
        if (typeof path !== "string") path = path[0];

        return (
          <Link key={module.id} to={path}>
            ({module.displayName})
          </Link>
        );
      })}
    </Fragment>
  );
};

export default List;
