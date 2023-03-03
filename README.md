# guessfamous
This is a guessing game: You will guess the person with his photo.

#### Start with this link first:  "https://code.jquery.com/jquery-3.5.1.min.js"  to an external site.


## main.js
That file is called main.js. You will find a array of object as a data base (15 objects with the source of the picture and the name of the celebrity)
 ChangePic() is a function that will choose randomly a picture from the array and link the name with the correct picture.
  $('.btn').click(function()): it will check if the input is relatedto the correct guess or not 
  if it's true : the score will increment by 10 and will pass to another picture randomly
  Unless you will have an alert that tells you to try again.


#### index.html:
the home page you will find when openning the server 
You will find the rules and the welcoming word 
To start the game you should click on button  with a class="bb" 

 

#### file.html:
Here where you find the game 
img id="picture": this image is related to the function chagepic() and it will be chosen randomly
input id="inp": the player will put his guess in the input box
button class="btn": this is the button which is related to the main function : if you click on it , it will check the function directly 
 

#### style.css:
Style the body with a gif background 
Styling the text and the border

 
