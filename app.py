from flask import Flask, render_template, url_for, request, redirect
import sqlite3

app = Flask(__name__)

@app.route('/', methods = ['POST', 'GET'])
def index():

    connection = sqlite3.connect('filenames.db')
    cursor = connection.cursor()

    if request.method == 'GET':
        return render_template('index.html')

    else:
        fileToSearchFor = request.form["title"]
        
        movieFound = False
   
        searchResults = cursor.execute("SELECT * FROM files WHERE fileName LIKE ?", ('%'+fileToSearchFor+'%',))

        result = []

        for name in searchResults:
            result += name
            movieFound = True

        if not movieFound:
            result = ["I don't have this movie"]

        return render_template('result.html', titles = result)

if __name__ == '__main__':
    app.run(debug=True)