import React, { useState } from 'react'
import { Col, Form, Button } from 'react-bootstrap'

const AddItem = ({finalSubmit}) => {

  const [inputVal, setInputVal] = useState('');
  const [selected, setSelected] = useState("Backlog");


  const dataSubmit = (e) => {
    setInputVal(e.target.value);
  }
  const dataSubmitSelect = (e) => {
    setSelected(e.target.value);
  }

  const newSubmit = (event) => {
    console.log('event', inputVal);
    finalSubmit(event, inputVal, selected)
    setInputVal(' ');
  }

  return (
    <>
        <Col md={3}>
            <div className="inputAreas">
                <Form className='text-center' onSubmit={newSubmit}>
                    <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Task Name" onChange={dataSubmit} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="statusSelect">Select a Status</Form.Label>
                      <Form.Select id="statusSelect" onChange={dataSubmitSelect}>
                        <option>Please Select a Status</option>
                        <option value="Backlog">Backlog</option>
                        <option value="ToDo">To-Do</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Done">Done</option>
                      </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                </Form>
            </div>
        </Col>
    </>
  )
}

export default AddItem
