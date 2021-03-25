import React, {Fragment, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fileUpload} from '../actions'
import Message from '../components/Message'
import ProgressBar from '../components/ProgressBar'

const FileUploadScreen = () => {

    const uploadedInfo = useSelector(state => state.upload)
    const {uploadedFile,loading, loadedPercentage, error} = uploadedInfo

    const [file, setFile] = useState(null)
    const [filename, setFilename] = useState('Choose File');
    const [textarea, setTextarea] = useState('')
    
    const dispatch = useDispatch()

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (file === null) {
            dispatch(fileUpload(new FormData()))
        }

        const formData = new FormData()
        //the 'file' is correspond to server req.files.file so we can get the formData format in server
        if (textarea !== '') {
            formData.append('description',textarea)
        }
        formData.append('file', file)

        dispatch(fileUpload(formData))

        setTextarea('')
        setFilename('Choose File')
        setFile(null)
    }


    return (
        <Fragment>
            <div className="jumbotron text-center mx-auto mt-5" style={{width: "40%"}}>
                <form onSubmit={onSubmit} className="mb-3">
                    <div className="form-group">
                        <div className='custom-file mb-4' >
                            <input
                                type='file'
                                className='custom-file-input'
                                id='customFile'
                                onChange={onChange}
                            />
                            <label className='custom-file-label' htmlFor='customFile'>
                                {filename}
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="exampleTextarea">Image Description</label>
                        <textarea value={textarea} onChange={(e) => {setTextarea(e.target.value)}} className="form-control" id="image-textarea" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <input
                            type='submit'
                            value='Upload'
                            className='btn btn-primary mt-4'
                        />
                    </div>
                </form>

                {loadedPercentage ? <ProgressBar loadedPercentage = {loadedPercentage} /> : null} 
                
                {error ? <Message variant="warning">{error}</Message> : null}

                {/* {loading && loadedPercentage ? <h1>{loadedPercentage}</h1> : null} */}

                {uploadedFile ? (
                    <div className='row mt-5'>
                        <div className='col-md-6 m-auto'>
                            <Message variant="success">Image uploaded</Message>
                            <h3 className='text-center'>{uploadedFile.fileName}</h3>
                            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                        </div>
                    </div>
                ) : null}
            </div>
        </Fragment>
    )
   
}

export default FileUploadScreen
