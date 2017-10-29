// @flow
import React from "react"
import { TableCell, TableRow } from "material-ui/Table"

export type Props = {
  id: number,
  title: string,
  userId: number,
  viewStatus: number
}

export default ({ id, title, userId, viewStatus }: Props) => (
  <TableRow>
    <TableCell>{id}</TableCell>
    <TableCell>{title}</TableCell>
    <TableCell>{userId}</TableCell>
    <TableCell>{viewStatus}</TableCell>
  </TableRow>
)
