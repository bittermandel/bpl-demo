import Head from 'next/head'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';

import Base from '../components/base'
import Table from '../components/table';



export default function Home() {
  const [data, setData] = useState({ members: []});

  const columns = React.useMemo(
    () => [
      {
        Header: 'Rank',
        accessor: 'Rank'
      },
      {
        Header: 'Team',
        accessor: 'TeamName'
      },
      {
        Header: 'Character',
        accessor: 'CharacterName'
      },
      {
        Header: 'Class',
        accessor: 'Class'
      },
      {
        Header: 'Level',
        accessor: 'Level'
      },
      {
        Header: 'Delve',
        accessor: 'Delve'
      }
    ]
  )

  useEffect(async () => {
    const result = await axios.get("https://bpl3-api.herokuapp.com/member");
    setData({members: result.data})
  }, []);

  console.log(data);
  return (
    <Base>
      <Table columns={columns} data={data.members}></Table>
    </Base>
  )
}
