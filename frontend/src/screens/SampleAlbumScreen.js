import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import ImageItem from '../components/ImageItem'
import Loader from '../components/Loader'
import Message from '../components/Message'


import {fetchSamples} from '../actions'
import { Row, Col } from 'react-bootstrap'

const SampleAlbumScreen = () => {

    const dispatch = useDispatch()
    const samplesInfo = useSelector(state => state.samples)
    const {samples,loading,error} = samplesInfo

    useEffect(() => {
        dispatch(fetchSamples())
    }, [dispatch])

    //create an imagePath array for ImageViewer
    const imageArray = []
    samples.map(el => imageArray.push(el.img))

    let content
    if (loading) {
        content=<Loader />
    } else if (error) {
        content=<Message variant="danger">{error}</Message>
    } else {   
        content = samples.map(el => (
            <Col key={el.id} sm={12} md={6} lg={4} xl={3}>    
                <ImageItem el={el} imageArray={imageArray} />
            </Col>
        ))                  
    }   


    return (
        <div className="px-5">
            <h3 className="my-4">Album Page</h3>
            <Row className="align-items-center" data-toggle="modal" data-target="#exampleModal">
            {content}
            </Row>
        </div>
    )

}

export default SampleAlbumScreen
