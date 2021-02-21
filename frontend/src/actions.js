import axios from 'axios'

import {
    GET_SAMPLES_REQUEST,
    GET_SAMPLES_SUCCESS,
    GET_SAMPLES_FAIL,

    UPLOAD_REQUEST,
    UPLOAD_LOADING_PERCENTAGE,
    UPLOAD_SUCCESS,
    UPLOAD_FAIL,

    GET_UPLOADS_REQUEST,
    GET_UPLOADS_SUCCESS,
    GET_UPLOADS_FAIL,

    DELETE_IMAGE_REQUEST,
    DELETE_IMAGE_FAIL,
    DELETE_IMAGE_SUCCESS

} from './constants'

export const fetchSamples = () => async (dispatch) => {
    try{
        dispatch({
            type: GET_SAMPLES_REQUEST,
        })
        const {data} = await axios.get('/api/samples')
        dispatch({
            type: GET_SAMPLES_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: GET_SAMPLES_FAIL,
            payload: error.message
        })
    }
}

export const fileUpload = (formData) => async (dispatch) => {

    try{
        dispatch({
            type: UPLOAD_REQUEST,
        })

        const {data} = await axios.post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {
                dispatch({
                    type: UPLOAD_LOADING_PERCENTAGE,
                    payload: parseInt(
                        Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    )
                })
            }
        })

        dispatch({
            type: UPLOAD_SUCCESS,
            payload: data,
        })
    } catch(error) {
        if (error.response.status === 500) {
            dispatch({
                type:UPLOAD_FAIL,
                payload: 'There was a problem with the server'
            })
        } else {
            dispatch({
                type:UPLOAD_FAIL,
                payload: error.response.data.msg
            })
          }
    }
}

export const fetchUploads = () => async (dispatch) => {
    try{
        dispatch({
            type: GET_UPLOADS_REQUEST,
        })
        const {data} = await axios.get('/api/uploads')
        dispatch({
            type: GET_UPLOADS_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type:GET_UPLOADS_FAIL,
            payload: error.message
        })
    }
}

export const deleteImage = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_IMAGE_REQUEST
        })
        console.log(id)
        const {data} = await axios.delete(`/api/uploads/${id}`)
        dispatch({
            type: DELETE_IMAGE_SUCCESS,
            paylaod: data.uploads
        })
    } catch(error) {
        dispatch({
            type:DELETE_IMAGE_FAIL,
            payload: error.response.data.msg
        })
    }
}