import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import AddItem from '../component/AddItem'
import Backlog from '../component/Backlog'
import Done from '../component/Done'
import Ongoing from '../component/Ongoing'
import Todo from '../component/Todo'

const taskData = [
  {
      id: 1,
      title:'Task 0',
      status:'Backlog'
  },
  {
      id: 2,
      title:'Task 1',
      status:'Backlog'
  },
  {
      id: 3,
      title:'Task 2',
      status:'Backlog'
  },
  {
      id: 4,
      title:'Task 3',
      status:'Backlog'
  },
  {
      id: 5,
      title:'Task 4',
      status:'ToDo'
  },
  {
      id: 6,
      title:'Task 5',
      status:'ToDo'
  },
  {
      id: 7,
      title:'Task 6',
      status:'ToDo'
  },
  {
      id: 8,
      title:'Task 7',
      status:'Ongoing'
  },
  {
      id: 9,
      title:'Task 8',
      status:'Ongoing'
  },
  {
      id: 10,
      title:'Task 9',
      status:'Done'
  }
]

const Home = () => {
  const [data, setData] = useState(taskData)

  const updateStatus = (id, newStatus) => {
    let allData = data;

    allData = allData.map((data) => {
      if(data.id === id){
        data.status = newStatus;
      }
      return data;
    })

    setData(allData)
  }

  const finalSubmit = (event, inputVal, selected) => {
    event.preventDefault();
    setData([...data,
    {
      id: data.length + 1,
      title: inputVal,
      status:selected
    }])
  }
  return (
    <Container>
      <Row className='justify-content-center'>
        <AddItem finalSubmit={finalSubmit} />
      </Row>
      <Row className='blockSection'>
        <Backlog data={data} updateStatus={updateStatus}/>
        <Todo data={data} updateStatus={updateStatus}/>
        <Ongoing data={data} updateStatus={updateStatus}/>
        <Done data={data} updateStatus={updateStatus}/>
      </Row>
    </Container>
  )
}

export default Home
