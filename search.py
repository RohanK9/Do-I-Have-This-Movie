import sqlite3

connection = sqlite3.connect('filenames.db', check_same_thread=False)
cursor = connection.cursor()

def searchTable(fileToSearchFor):

    movieFound = False

    searchResults = cursor.execute("SELECT * FROM files WHERE fileName LIKE ?", ('%'+fileToSearchFor+'%',))

    result = []

    for name in searchResults:
        result += name
        movieFound = True

    if not movieFound:
        result = ["I don't have this movie"]

    return result