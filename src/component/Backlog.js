import React from 'react'
import { Col } from 'react-bootstrap'
import { IconContext } from "react-icons";
import { FaEdit, FaRegTimesCircle, FaRegCaretSquareRight, FaRegCaretSquareLeft } from 'react-icons/fa';

const Backlog = ({data, updateStatus}) => {
  return (
    <>
    <Col md={3}>
      <div className='inputAreas'>
        <div className='headerTitle text-center'>
          <h4>Backlog</h4>
        </div>
        <div className='innerSec'>
        <ul>
            {
                data.map((item, i) => {
                  return item.status === "Backlog"
                     ? <li key={i}>{item.title}
                        <span className='icon-group'>
                          <IconContext.Provider value={{ color: "blue"}}>
                            <button disabled>
                              <FaRegCaretSquareLeft />
                            </button>
                            <button onClick={() => {updateStatus(item.id, 'ToDo')}}>
                              <FaRegCaretSquareRight />
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
                     
                     : null
                })
            }
        </ul>
        </div>
      </div>
    </Col>
    </>
  )
}

export default Backlog
