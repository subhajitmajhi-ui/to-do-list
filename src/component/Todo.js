import React from 'react'
import { Col } from 'react-bootstrap'
import { IconContext } from "react-icons";
import { FaEdit, FaRegTimesCircle, FaRegCaretSquareRight, FaRegCaretSquareLeft } from 'react-icons/fa';

const Todo = ({data, updateStatus}) => {
  return (
    <Col md={3}>
      <div className='inputAreas'>
        <div className='headerTitle text-center'>
          <h4>To-Do</h4>
        </div>
        <div className='innerSec'>
        <ul>
           {
            data.map((item,i)=>{
                return item.status === "ToDo" 
                ? <li key={i}>{item.title} 
                <span className='icon-group'>
                  <IconContext.Provider value={{ color: "blue"}}>
                    <button>
                      <FaRegCaretSquareLeft onClick={() => {updateStatus(item.id, 'Backlog')}} />
                    </button>
                    <button>
                      <FaRegCaretSquareRight onClick={() => {updateStatus(item.id, 'Ongoing')}} />
                    </button>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ color: "green"}}>
                    <button>
                      <FaEdit />
                    </button>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: "red"}}>
                    <button>
                      <FaRegTimesCircle />
                    </button>
                </IconContext.Provider>
              </span>
              </li>
                :null
            })
           }
        </ul>
        </div>
      </div>
    </Col>
  )
}

export default Todo
