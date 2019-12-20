import React, {
  Fragment,
  useEffect,
  useState,
  useRef,
  useReducer
} from "react";
import ReactDOM from "react-dom";
import {
  Card,
  Popover,
  Container,
  OverlayTrigger,
  Row,
  Col,
  Form,
  Overlay
} from "react-bootstrap";

import data from "@data/staff.js";

const reduceFilters = (filters, filter) => {
  const newFilters = { ...filters, ...filter };
  const result = {
    ...newFilters,
    result: data.filter(item => {
      const include =
        (newFilters.active && item.status === "Active") ||
        (newFilters.applied && item.status === "Applied") ||
        (newFilters.inactive && item.status === "Inactive") ||
        (newFilters.disabled && item.status === "Disabled");

      return include;
    })
  };
  return result;
};

const initialFilters = {
  active: true,
  applied: false,
  inactive: false,
  disabled: false,
  archived: false,
  deleted: false
};

const Staff = props => {
  const [filters, applyFilters] = useReducer(
    reduceFilters,
    reduceFilters(initialFilters, null)
    //initialFilters
  );

  const showStaffDetails = (props, item) => {
    props.open = props.show ? true : false;
    delete props.show;
    delete props.arrowProps;

    console.log(props);

    return (
      <Popover {...props}>
        <Card className="staff-detail" border={item.status.toLowerCase()}>
          <Card.Header className="text-center">
            <Card.Title>{item.name.displayName}</Card.Title>
            <img
              style={{ width: "64px", height: "64px" }}
              src={
                item.photoUrl ||
                "https://secure.gravatar.com/avatar/8ceade13568d8c5f2c58c7d6d40c6563.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0025-48.png"
              }
              alt={item.name.fullName}
              className="rounded-circle mx-auto"
            />
          </Card.Header>
          <Card.Body>
            Got this data from:
            <ul>
              {Object.keys(item.dataSources).map(key => (
                <li key={key}>{key}</li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Popover>
    );
  };

  return (
    <>
      <Row>
        <Col className="col-2 border-right">
          <Container className="p-5">
            Include:
            <Form>
              <Form.Check
                className="custom-toggle mb-2"
                id="filter-active"
                type="switch"
                label="Active"
                checked={filters.active}
                onChange={({ target }) =>
                  applyFilters({ active: target.checked })
                }
              />
              <Form.Check
                className="custom-toggle mb-2"
                type="switch"
                id="filter-applied"
                label="Applied"
                checked={filters.applied}
                onChange={({ target }) =>
                  applyFilters({ applied: target.checked })
                }
              />
              <Form.Check
                className="custom-toggle mb-2"
                type="switch"
                id="filter-inactive"
                label="Inactive"
                checked={filters.inactive}
                onChange={({ target }) =>
                  applyFilters({ inactive: target.checked })
                }
              />
              <Form.Check
                className="custom-toggle mb-2"
                type="switch"
                id="filter-disabled"
                label="Disabled"
                checked={filters.disabled}
                onChange={({ target }) =>
                  applyFilters({ disabled: target.checked })
                }
              />
            </Form>
          </Container>
        </Col>
        <Col>
          <Container
            fluid
            className="mx-auto text-center flex"
            style={{ overflow: "auto" }}
          >
            {filters.result.map((item, index) => {
              return (
                <OverlayTrigger
                  key={["staff-icon", index].join("-")}
                  trigger={["hover", "click", "focus"]}
                  placement="bottom"
                  overlay={props => showStaffDetails(props, item)}
                  delay={{ show: 0, hide: 400 }}
                  popperConfig={{
                    modifiers: {
                      arrow: { enabled: false },
                      flip: { enabled: false },
                      inner: { enabled: true }
                    },
                    positionFixed: true
                  }}
                >
                  <div
                    className="m-0 p-2 text-center"
                    id={["staff-icon", index].join("-")}
                    style={{ width: "96px", display: "inline-block" }}
                    key={["staff-icon", index].join("-")}
                  >
                    <img
                      style={{ width: "48px", height: "48px" }}
                      src={
                        item.photoUrl ||
                        "https://secure.gravatar.com/avatar/8ceade13568d8c5f2c58c7d6d40c6563.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0025-48.png"
                      }
                      alt={item.name.fullName}
                      className="rounded-circle mx-auto"
                    />
                  </div>
                </OverlayTrigger>
              );
            })}
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Staff;
