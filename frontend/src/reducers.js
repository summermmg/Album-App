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

export const samplesReducer = (state={samples:[]}, action) => {
    switch (action.type) {
        case GET_SAMPLES_REQUEST:
            return {
                loading: true,
                samples: [],
            }
        case GET_SAMPLES_SUCCESS:
            return {
                loading: false,
                samples: action.payload,
            }
        case GET_SAMPLES_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state     
    }
}

export const uploadReducer = (state = { uploadedFile: '' }, action) => {
    switch (action.type) {
        case UPLOAD_REQUEST:
            return {
                loading: true,
                uploadedFile: '',
                loadedPercentage: 0,
            }

        case UPLOAD_LOADING_PERCENTAGE:
            return {
                loading: true,
                uploadedFile: '',
                loadedPercentage: action.payload,
            }    
        
        case UPLOAD_SUCCESS:
            const { fileName, filePath } = action.payload
            return {
                loading: false,
                uploadedFile: { fileName, filePath },
                loadedPercentage: 100,
            }
        case UPLOAD_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state     
    }
}

export const uploadsReducer = (state={uploads:[]}, action) => {
    switch (action.type) {
        case GET_UPLOADS_REQUEST:
            return {
                loading: true,
                uploads: [],
            }
        case GET_UPLOADS_SUCCESS:
            return {
                loading: false,
                uploads: action.payload,
            }
        case GET_UPLOADS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state     
    }
}

export const deleteImageReducer = (state={message:''},action) => {
    switch (action.type) {
        case DELETE_IMAGE_REQUEST:
            return {
                loading: true,
                message: '',
            }
        case DELETE_IMAGE_SUCCESS:
            return {
                loading: false,
                message: 'Image deleted!',
            }
        case DELETE_IMAGE_FAIL:
            return {
                loading: false,
                error: action.payload
            }      
        default:
            return state      
    }
}

