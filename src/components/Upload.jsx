import { ChangeEvent, useState } from 'react';
import { CircleLoader } from 'react-spinners';
import insertDocument from '../apis/insertDocument';
import './component_styles.scss'

// interface HTMLInputEvent extends ChangeEvent {
//     target: HTMLInputElement & EventTarget;
// }

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState('');
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    const changeHandler = (event) => {
        if (event.target && event.target.files) {
            setSelectedFile(event.target.files[0]);
            setIsFilePicked(true);
        }
    };
  
    const handleSubmission = () => {
      if (selectedFile) {
        setIsLoading(true);
        insertDocument(selectedFile).then(() => {
          setSelectedFile(undefined);
          setIsFilePicked(false);
          setIsLoading(false);
        });
      }
    };

    return (
        <div className='uploader'>
            <div className="EHRLabel">
                Please Upload your EHRs Below!
            </div>
            <input
                className='uploader__input'
                type='file'
                name='file-input'
                id='file-input'
                accept='.pdf,.txt,.json,.md'
                onChange={changeHandler}
            />

            {isFilePicked && selectedFile ? (
                <div className='uploader__details'>
                    <div className='uploader__details'>
                        <p>{selectedFile.name}</p>
                    </div>
                </div>
            ) : (
                <div className='uploader__details'>
                    <p>Please select a file</p>
                </div>
            )}

            {isFilePicked && !isLoading && (
                <button className='uploader__btn' onClick={handleSubmission}>
                    Submit
                </button>
            )}
      {isLoading && <CircleLoader color='#00f596' className='uploader__loader' />}
    </div>
    )
}

export default Upload
