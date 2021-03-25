import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Card,Dropdown} from 'react-bootstrap'
import ImageViewer from 'react-simple-image-viewer'
import {deleteImage} from '../actions'

const ImageItem = ({el,imageArray, excerpt}) => {
    const index = imageArray.indexOf(el.img)

    const dispatch = useDispatch()
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = () => {
        setIsViewerOpen(true);
    }

    const closeImageViewer = () => {
        setIsViewerOpen(false);
    };

    const onClickHandler = () => {
        dispatch(deleteImage(el.id))
    }

    return (
        <div className="card border-secondary mb-4" >
            {excerpt && (
                <Dropdown className="d-flex justify-content-end">
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        <i className="fas fa-bars"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={onClickHandler}>Delete</Dropdown.Item>                   
                    </Dropdown.Menu>
                </Dropdown>
            )}

            <div className="card-body">                   
                <h5>
                    {el.description}
                </h5>
            </div>               
            <Card.Img onClick={ openImageViewer } variant="bottom" src={el.img} className="img-fluid" />

            {isViewerOpen && (
            <ImageViewer
                src={ imageArray }
                currentIndex={ index }
                onClose={ closeImageViewer }
                backgroundStyle={{
                    backgroundColor: "rgba(0,0,0,0.9)"
                }}
            />
            )}
        </div>
    )
}

export default ImageItem
