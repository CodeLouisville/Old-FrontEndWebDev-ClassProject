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
5. Use the grid system classes `col` and `span_{columns}_of_2` to make the content take up the full width.  
6. Notice that the content doesn't line up with the existing content.  The header has a `div` with the class `wrap` which limits the width of the content.  Let's apply this to our welcome section.
7. Finally, make just the name "Louie's" in the subheading the color `#871719` (dark red).  Hint:  You can use `span` elements inside the `h2` element to apply special stying to specific text.

##Complete the Newsletter Section

1. Find the Newsletter section of the site in index.html.
2. Similar to the welcome section, add a wrapper div with the class `wrap`