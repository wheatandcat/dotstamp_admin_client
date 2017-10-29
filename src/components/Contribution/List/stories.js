// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { List, Item, Header, Summary } from "./"

storiesOf("Contribution/List", module)
  .add(" Summary", () => (
    <Summary
      items={[
        {
          id: 1,
          title: "foo",
          userId: 1,
          viewStatus: 1
        },
        {
          id: 2,
          title: "bar",
          userId: 1,
          viewStatus: 1
        }
      ]}
    />
  ))
  .add(" List", () => (
    <List
      items={[
        {
          id: 1,
          title: "foo",
          userId: 1,
          viewStatus: 1
        },
        {
          id: 2,
          title: "bar",
          userId: 1,
          viewStatus: 1
        }
      ]}
    />
  ))
  .add(" Header", () => <Header />)
  .add(" Item", () => <Item id={1} title='foo' userId={1} viewStatus={1} />)
