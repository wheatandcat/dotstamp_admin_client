// @flow
import React from "react"
import ListSubheader from "material-ui/List/ListSubheader"
import List, { ListItem, ListItemText } from "material-ui/List"

export default () => (
  <div>
    <List subheader={<ListSubheader>MENU</ListSubheader>}>
      <ListItem button>
        <ListItemText primary='投稿' />
      </ListItem>
      <ListItem button>
        <ListItemText primary='ユーザー' />
      </ListItem>
    </List>
  </div>
)
