import React, { FC, useState } from 'react'
import {
  Collapse, styled, useMediaQuery, useTheme
} from '@mui/material'
import { TransitionGroup } from 'react-transition-group'

import {
  TableCell,
  TableRow,
  TableBody
} from './styles'

export interface TableItem {
  key: string,
  value: string
}

export interface ResultTableProps {
  items: TableItem[]
  isDetailed?: boolean
  withHiddenItems?: boolean
}

const CollapsedTableRow: FC<{ item: TableItem, isDetailed?: boolean }> = ({
  item, isDetailed,
}) => {
  const theme = useTheme()

  return (
    <TableRow isdetailed={isDetailed}>
      <TableCell
        iskey
        isdetailed={isDetailed}
      >
        {item.key}
      </TableCell>
      <TableCell
        isdetailed={isDetailed}
        sx={isDetailed ? { ...theme?.typography?.p3_Regular_Text } : null}
      >
        {item.value}
      </TableCell>
    </TableRow>
  )
}

export const ResultTable: FC<ResultTableProps> = ({ items, isDetailed, withHiddenItems }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme?.breakpoints?.down('sm'))

  const maxListLenght = 3
  const [activeItems, setActiveItems] = useState(
    items.length > 2 ? items.slice(0, maxListLenght) : items
  )

  return (
    <>
      <TableBody>
        <TransitionGroup>
          {(isMobile || withHiddenItems) && activeItems.map((item, index) => (
            <Collapse key={`table-row-${index}`} sx={{ display: 'block' }}>
              <CollapsedTableRow item={item} isDetailed={isDetailed} />
            </Collapse>
          ))}
          {!isMobile && !withHiddenItems && activeItems.map((item, index) => (
            <Collapse key={`table-row-${index}`}>
              <CollapsedTableRow item={item} isDetailed={isDetailed} />
            </Collapse>
          ))}
        </TransitionGroup>
      </TableBody>
      {!isMobile && !withHiddenItems && (
        <ShowMoreLink
          onClick={() => {
            setActiveItems(
              activeItems.length !== items.length ? items : items.slice(0, maxListLenght)
            )
          }}
        >
          {activeItems.length !== items.length ? 'Показать ещё' : 'Свернуть'}
        </ShowMoreLink>
      )}
    </>
  )
}

const ShowMoreLink = styled('span')(({ theme }) => ({
  ...theme?.typography?.p3_Comp,
  display: 'block',
  width: '100%',
  marginTop: '14px',
  color: theme?.palette?.accent?.active,
  cursor: 'pointer',
}))
