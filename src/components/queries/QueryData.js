import React, { Component } from "react";
import { gql } from "apollo-boost"; //formats queries for us
import { Query } from "react-apollo";
//value and invoke it with backticks=>"tagging"; tags have additional functionality
export const GET_USERS = gql`
  query {
    getUser(id: 48) {
      user_name
    }
  }
`;

class QueryData extends Component {
  render() {
    return (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div>
                <img
                  src="https://media.giphy.com/media/GIEXgLDfghUSQ/giphy.gif"
                  alt="loading"
                />
              </div>
            );
          if (error)
            return (
              <div>
                <img
                  src="http://www.fico.com/en/blogs/wp-content/uploads/2017/03/Lack-of-Data.gif"
                  alt="error"
                />
              </div>
            );
          return <div>{this.props.render(data)}</div>;
        }}
      </Query>
    );
  }
}
export default QueryData;
