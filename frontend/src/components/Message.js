import React,{useState} from 'react'
import {Alert} from 'react-bootstrap'

const Message = ({children,variant}) => {
    const [show, setShow] = useState(true)

    if (show) {
        return (
          <Alert variant={variant} onClose={() => setShow(false)} dismissible>
            {children}
          </Alert>
        );
    }
    return null
}


export default Message