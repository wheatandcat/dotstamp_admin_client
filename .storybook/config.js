import { configure, addDecorator } from "@storybook/react"
import { provider } from "./decorators"

addDecorator(provider)

const req = require.context("../src", true, /stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
