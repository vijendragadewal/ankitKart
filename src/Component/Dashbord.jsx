import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions/usersActions";

class users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props.users;
    console.log(users);

    return (
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            gap: "20px",
          }}
        >
          {users.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "400px",
                  border: "1px solid",
                  padding: "10px",
                  borderRadius: "24px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={"100px"}
                  height={"100px"}
                />
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>{item.category}</p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        {/* <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            gap: "20px",
          }}
        >
          {products &&
            products.map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "400px",
                    border: "1px solid",
                    padding: "10px",
                    borderRadius: "24px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={"100px"}
                    height={"100px"}
                  />
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                  <p>{item.category}</p>
                  <p>{item.description}</p>
                </div>
              );
            })}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { getUsers })(users);
