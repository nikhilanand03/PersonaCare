const insertDocument = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename_as_doc_id', 'true');
  
    const response = await fetch('http://localhost:8000/uploadFile', {
      mode: 'cors',
      method: 'POST',
      body: formData,
    });
  
    const responseText = response.text();
    return responseText;
  };
  
  export default insertDocument;