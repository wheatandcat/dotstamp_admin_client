// @flow
import React from "react"
import { TableCell, TableHead, TableRow } from "material-ui/Table"

export default () => (
  <TableHead>
    <TableRow>
      <TableCell>ID</TableCell>
      <TableCell>タイトル</TableCell>
      <TableCell>ユーザーID</TableCell>
      <TableCell>表示状態</TableCell>
    </TableRow>
  </TableHead>
)
