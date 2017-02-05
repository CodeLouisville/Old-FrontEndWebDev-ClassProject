# FrontEndWebDev-ClassProject
Classroom activity for front-end web dev class

#Week 1 Challenge

1. Update index.html to include _/css/styles.css_
2. Update index.html to include _/css/fonts.css_
3. In index.html locate the header section.  Recreate the content and layout of the header section.
    a. Look at style.css and look for the grid system section.  Make the .span_1_of_2 class have a width of 48.2%.
    b. Find the Nav selector in style.css and give it a top margin of 4em.
4. Update to include _"louies-logo.svg"_ with the _"alt"_ tag of "Louie's Pizza logo and tagline" and with a class of _"nav-logo"_
5. Update to include an unordred list of links inside the _"nav"_ tag to: 
    a. Welcome
    b. History
    c. Menu
    d. Contact
5. The Header or Top section of your page should now match the site according to the site.pdf file included in this project.

#Week 2 Challenge

This week we will complete the "Welcome to Louie's" and "Contact Louie" sections of this site.  As a reference,
refer to the site.pdf file included in this repo to see what the target style should look like.  

##Complete the Welcome Section

1. Find the Welcome section of the site in index.html.
2. Add a subheading (h2) with the text "WELCOME TO LOUIE'S"
3. Add the following paragraph after the subheading:```
    Enjoy the old-school ambiance, original wooden booths sentimentally etched by our loyal customers, the black and white art deco floors worn by time, turn of the century tin ceilings and faded murals tell tale of a bygone era. Sit back, relax, enjoy the smell of simmering tomatoes and hot pizza, feel the warmth and camaraderie, hear the laughter and conversation of happy diners and you feel like you are home again, somewhere familliar, comfortable, affordable, family centered and “ORIGINAL”. ```
4. Use the grid system classes `col` and `span_{columns}_of_2` to make the content take up the full width.  
5. Notice that the content doesn't line up with the existing content.  The header has a `div` with the class `wrap` which limits the width of the content.  Let's apply this to our welcome section.
6. Finally, make just the name "Louie's" in the subheading the color `#871719` (dark red).  Hint:  You can use `span` elements inside the `h2` element to apply special stying to specific text.

##Complete the Newsletter Section

1. Find the Email section of the site in index.html.
2. Similar to the welcome section, add a wrapper div with the class `wrap`.
3. Add a subheading of "Join Louie's List today, and get a free slice!".
4. Add a form with a lable of "Email", an email input, and a "Join Now" submit button.
5. Add a paragraph with the class "small-txt" below the input/button.  Style this paragraph so that it has a font-size of 80%;
6. Style the label, input, and button according to the image in site.pdf.  See hints below.

###Hints:
Height of input and button is 40px;

Input border is: 1px solid #c0af8e;
Input border radius is 3px;

font for button is 'Roboto Slab' and is 80% of the base font size.  The font weight is 700.
Background color of button is #871719;
##Fix Clearing Issues with Floats

The col class assings a `property: value` of `float: left` to the elements it's applied to.
In order to give our containing `wrap` element height, we must clear these floats.
Our grid system has a `section` class and a `group` class that can clear our floats.
Wrap the col elements in a new div with these two classes to fix our floating issue.  

#Week 3 Challenge

Time for a history lesson!  Let's complete the History Section of the site.

1.) Find the history section in index.html.
2.) As before, use our grid system classes (wrap, section, group, col_ span_{x}_of_2) to create two columns.  
3.) On the left column: 
    a.) add a subheading of "Louie's History".
    b.) add the following paragraphs:
    ```Louie’s was founded in 1929 by Italian immigrant Louie Bianchi. Louie’s was Originally established on Main Street, in the Heart of Louisville. After losing his lease on Main Street, Louie Bianchi dismantled his original coal fired brick oven and moved it to 271 Clay Street where he continued to run and grow his business and refine his pizza recipe to perfection.```
    ```Bianchi ran his business until 1954 when he sold the pizzeria to the Romano Brothers. Augustine Romano bought the business from his brothers and he continued to own and operate Louie’s pizzeria until he passed away in 1984, passing his legacy on.```
4.) On the right column add the `louie-photo.png` image.  
5.) For the background of this section, set the background to be `louies-bg-making-red.jpg`.
6.) Set the color of the text of this section to #FFF.

Hint: Check out this great tutorial on how to get images to fill the background of an element:  
https://css-tricks.com/perfect-full-page-background-image/

#Week 4 Challenge

Our restaurant's menu is stored in a database on a server.  We need to retrieve the menu data and present it on the website.  

1.) Include necessary javacsript files in your index.html file.  
    a) Include jQuery in your index.html file from `https://code.jquery.com/jquery-1.12.4.min.js`.  
    b) Include the `app.js` file located in the `js` folder to the index.html file.
2.) `App.js` includes a function named `buildTable` which takes an object that looks like the following
    ```{
      "name": "Salads",
      "items": [
        {
          "name": "Louie's Chef Salad",
          "price": 7.5
        },
        {
          "name": "Caesar Salad",
          "price": 9
        },
        {
          "name": "Garden Salad",
          "price": 6.25
        },
        {
          "name": "Side Salad",
          "price": 3.5
        }
      ]
    }```
    and returns an html `<table>` with the the data properly formatted for our website.  
3.) Use jQuery's Ajax method to retrieve the restaurant's menu from https://cdn.rawgit.com/Bumbolio/567f8ed0ac99703fbbe24a64638fcc81/raw/9a0930b07e6b746a76e058ac956e5528aedcfacf/menu.json
4.) Find the Food cateogry inside the menu data and use `jQuery` to `append` it to the exisiting `div` with the id `foodcontainer`.  
    a) Use `dot notation` to access the `Food` array inside the data from our json file.  
    b) Use either a `forEach` or a `for` loop to feed every `Food` object to the `buildTable` function.
    c) Use `jQuery's` `append` method to append the html table returned by `buildTabled` to the `#foodcontainer` div.

##Bonus
1.) You may notice that the tables aren't formatted very well.  This is because we need to put a set of two tables in a `section group` div to clear floats between each row of tables.
    a) Use `jQuery` and modulo operator to create a `<div class="section group">` for each pair of two tables in the `Food` section of our json data.  
    b) Append these new `section group` divs to the `#foodcontainer` div instead of appending the tables directly.  



