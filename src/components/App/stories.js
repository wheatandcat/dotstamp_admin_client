// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import AppBar, { Menu } from "./"

storiesOf("App", module)
  .add(" AppBar", () => <AppBar title='foo'>foo</AppBar>)
  .add(" Menu", () => <Menu />)
