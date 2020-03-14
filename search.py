import sqlite3
# import populate_database

connection = sqlite3.connect('filenames.db')
cursor = connection.cursor()

def searchTable(fileToSearchFor):

   movieFound = False
   
   searchResults = cursor.execute("SELECT * FROM files WHERE fileName LIKE ?", ('%'+fileToSearchFor+'%',))

   result = ""

   for name in searchResults:
      result = name[0]
      movieFound = True

   if not movieFound:
      result = "File does not exist"

   print(result)

searchTable()