import Head from 'next/head'
import Base from '../components/base'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSortBy, useTable } from 'react-table';


export default function Table({ columns, data}) {


  const sortBy = React.useMemo(() => [
      {id: 'Rank', desc: false}
  ])

  const {
    headerGroups,
    rows,
    prepareRow
  } = useTable({columns, data, initialState: {sortBy: sortBy}}, useSortBy)

  return (
      <table className="min-w-full divide-y divide-gray-200 text-white text-sm">
        <thead className="text-left  bg-indigo-900">
          {headerGroups.map(headerGroup => (
            <tr>
              {headerGroup.headers.map(column => (
                <th className="px-6 py-4" {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row, i) => {
              prepareRow(row)
              if (row.values.Rank === 0) {
                  return
              }
              return (
                <tr key={row.id} className={i % 2 === 0 ? 'bg-blue-900' : 'bg-indigo-900'}>
                    {row.cells.map(cell => {
                        return <td className="px-6 py-4" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                </tr>
                )
            })}
        </tbody>
      </table>
  )
}
