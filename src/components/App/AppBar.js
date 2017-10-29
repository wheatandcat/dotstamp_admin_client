// @flow
import React, { type Node } from "react"
import styled from "styled-components"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import Grid from "material-ui/Grid"
import { Menu } from "./"

export type Props = {
  children?: Node,
  title: string
}

const Contents = styled.div`
  padding-top: 1rem;
`

export default ({ title, children }: Props) => (
  <div>
    <Grid container spacing={24}>
      <Grid item xs={6} sm={2}>
        <Menu />
      </Grid>
      <Grid item xs={18} sm={10}>
        <AppBar position='static' color='default'>
          <Toolbar>
            <Typography type='title' color='inherit'>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Contents>{children}</Contents>
      </Grid>
    </Grid>
  </div>
)
