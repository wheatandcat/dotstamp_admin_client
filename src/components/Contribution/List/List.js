// @flow
import React from "react"
import Table, { TableBody } from "material-ui/Table"
import { type Props as ItemProps } from "./Item"
import { Header, Item } from "./"

export type Props = {
  items: Array<ItemProps>
}

export default ({ items }: Props) => (
  <Table>
    <Header />
    <TableBody>
      {items.map(({ id, title, userId, viewStatus }) => (
        <Item key={id} id={id} title={title} userId={userId} viewStatus={viewStatus} />
      ))}
    </TableBody>
  </Table>
)
