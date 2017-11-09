// @flow
import React, { Component } from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"

class NewEntry extends Component {
  onClick () {
    this.props
      .mutate({
        variables: { repoFullName: "apollographql/apollo-client" }
      })
      .then(({ data }) => {
        console.log("got data", data)
      })
      .catch((error) => {
        console.log("there was an error sending the query", error)
      })
  }
  render () {
    return <div onClick={this.onClick.bind(this)}>Click me</div>
  }
}
const submitRepository = gql`
  mutation submitRepository($repoFullName: String!) {
    submitRepository(repoFullName: $repoFullName) {
      createdAt
    }
  }
`
const NewEntryWithData = graphql(submitRepository)(NewEntry)
