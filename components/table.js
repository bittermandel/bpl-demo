import Head from 'next/head'
import Base from '../components/base'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';


export default function Table({ columns, data}) {


  const sortBy = React.useMemo(() => [
      {id: 'Rank', desc: false}
  ])

  const {
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable({columns, data, initialState: { pageIndex: 0 }, sortBy: sortBy }, useSortBy, usePagination)

  return (
      <>
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
            {page.map((row, i) => {
                prepareRow(row)
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
        <div className="pagination text-white">
            <button className="mx-1"onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
            </button>{' '}
            <button className="mx-1"onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
            </button>{' '}
            <button className="mx-1" onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
            </button>{' '}
            <button className="mx-1"onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
            </button>{' '}
            <span className="ml-2">
                Page{' '}
                <strong>
                {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span>
                | Go to page:{' '}
                <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(page)
                }}
                style={{ width: '100px' }}
                className="ml-1 text-black"
                />
            </span>{' '}
            <select
                value={pageSize}
                onChange={e => {
                setPageSize(Number(e.target.value))
                }}
                className="ml-3 text-black"
            >
                {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                </option>
                ))}
            </select>
        </div>
      </>
  )
}
