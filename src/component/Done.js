import React from 'react'
import { Col } from 'react-bootstrap'
import { IconContext } from "react-icons";
import { FaEdit, FaRegTimesCircle, FaRegCaretSquareRight, FaRegCaretSquareLeft } from 'react-icons/fa';

const Done = ({data, updateStatus}) => {
  return (
    <>
    <Col md={3}>
      <div className='inputAreas'>
        <div className='headerTitle text-center'>
          <h4>Done</h4>
        </div>
        <div className='innerSec'>
        <ul>
            {
              data.map((item, i) => {
                return item.status === "Done"
                    ? <li key={i}>{item.title}
                      <span className='icon-group'>
                        <IconContext.Provider value={{ color: "blue"}}>
                          <button onClick={() => {updateStatus(item.id, 'Ongoing')}}>
                            <FaRegCaretSquareLeft />
                          </button>
                          <button disabled>
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

export default Done
