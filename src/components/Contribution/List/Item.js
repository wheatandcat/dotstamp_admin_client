// @flow
import React from "react"
import { TableCell, TableRow } from "material-ui/Table"

export type Props = {
  id: number,
  title: string,
  userId: number,
  viewStatus: number,
  createdAt: string,
  updatedAt: string,
  deletedAt: ?string
}

export default ({ id, title, userId, viewStatus, createdAt, updatedAt, deletedAt }: Props) => (
  <TableRow>
    <TableCell>{id}</TableCell>
    <TableCell>{title}</TableCell>
    <TableCell>{userId}</TableCell>
    <TableCell>{viewStatus}</TableCell>
    <TableCell>{createdAt}</TableCell>
    <TableCell>{updatedAt}</TableCell>
    <TableCell>{deletedAt ? 1 : 0}</TableCell>
  </TableRow>
)