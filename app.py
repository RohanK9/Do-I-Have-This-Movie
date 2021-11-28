from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
from search import searchTable

app = Flask(__name__ , static_folder='client/build', static_url_path='')
cors = CORS(app)

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/search/<query>')
@cross_origin()
def search(query):
    return jsonify(searchTable(query))

if __name__ == '__main__':
    app.run(debug=True)