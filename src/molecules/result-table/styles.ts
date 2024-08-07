import {
  Table,
  TableRow as MuiTableRow,
  TableCell as MuiTableCell,
  styled,
} from '@mui/material'

export const TableBody = styled(Table)(() => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}))

export const TableRow = styled(MuiTableRow)<{ isdetailed?: boolean }>(({ isdetailed }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  padding: '12px 0',
  flexDirection: isdetailed ? 'column' : 'row',
}))

export const TableCell = styled(MuiTableCell)<{
  isdetailed?: boolean,
  iskey?: boolean
}>(({ theme, iskey, isdetailed }) => ({
  ...theme?.typography?.p4_Regular_Comp,
  padding: 0,
  paddingTop: !isdetailed ? '2px' : '0',
  display: 'block',
  color: iskey ? theme?.palette?.text?.secondary : theme?.palette?.text?.primary,
  borderBottom: 'none',
}))
