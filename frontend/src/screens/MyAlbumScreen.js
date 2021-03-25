import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import ImageItem from '../components/ImageItem'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Link} from 'react-router-dom'

import {fetchUploads} from '../actions'
import { Row, Col } from 'react-bootstrap'

const MyAlbumScreen = () => {

    const dispatch = useDispatch()
    const uploadsInfo = useSelector(state => state.uploads)
    const {uploads,loading,error} = uploadsInfo

    const imageDeleted = useSelector(state => state.deleteImage)
    const {message} = imageDeleted

    useEffect(() => {
            dispatch(fetchUploads())
        }
    , [dispatch,message])

    const imageArray = []
    uploads.map(el => imageArray.push(el.img))

    let content
    if (loading) {
        content=<Loader />
    } else if (error) {
        content=<Message variant="danger">{error}</Message>
    } else {
        content = uploads.map(el => 
            (        
                <Col key={el.id} sm={12} md={6} lg={4} xl={3}>    
                <ImageItem el={el} imageArray={imageArray} excerpt />
                </Col>
            ) 
        )
    }

    return (
        <div className="section">
            <div className="container">
                <h2 className="my-5">My Album</h2>
                {uploads.length===0 && (
                    <Message variant="info">There is no image in this album. <Link to="/fileupload">Upload one.</Link></Message>
                )}
                <Row className="align-items-center">
                    {content}
                </Row>
            </div>
        </div>
    )
}

export default MyAlbumScreen