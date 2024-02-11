import os
from multiprocessing.managers import BaseManager
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from werkzeug.utils import secure_filename
import logging
import sys

PORT=8000
app = Flask(__name__)
CORS(app)

# manager = BaseManager(('', 5602), b'password')
# manager.register('query_index')
# manager.register('insert_into_index')
# manager.register('get_documents_list')
# manager.connect()

def query_model(query_text):
    pass


@app.route('/query', methods=['GET'])
def query_index():
    query_text = request.args.get("text", None)
    response = query_model(query_text)
    response_text = str(response)

    return response_text, 200

@app.route('/uploadFile', methods=['POST'])
def upload_file():
    print('working', file=sys.stdout)
    if 'file' not in request.files:
        return "Please send a POST request with a file", 400
    filepath = None
    # try:
    uploaded_file = request.files["file"]
    filename = secure_filename(uploaded_file.filename)
    filepath = os.path.join('C:\\Users\\shank\\Desktop\\red\\documents', os.path.basename(filename))
    print(filepath, file=sys.stdout)
    uploaded_file.save(filepath)

        # if request.form.get("filename_as_doc_id", None) is not None:
        #     manager.insert_into_index(filepath, doc_id=filename)
        # else:
        #     manager.insert_into_index(filepath)
    # except Exception as e:
    #     # cleanup temp file
    #     if filepath is not None and os.path.exists(filepath):
    #         os.remove(filepath)
    #     return "Error: {}".format(str(e)), 500

    # # cleanup temp file
    # if filepath is not None and os.path.exists(filepath):
    #     os.remove(filepath)

    return "File inserted!", 200

@app.route("/")
def home():
    return "Hello, World! Welcome to the llama_index docker image!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT, debug=True)
