-----------------APPLICATION TITLE--------------------------------

Title: Poopetrator

----------------APPLICATION DESCRIPTION---------------------------

Description: This app gives the user the ability to document stray dog poop in their area.  
If the user finds a stray (unocompanied) poop, they can open the app, and upload desciptors to an API.
The users upload is rendered and can be viewed by them or others, via the API.
If the stray poop is no longer in the area that it is said to be, then the user can delete the post.
The application will have a map function, which shows the user the posts via pins on a map.  

This application uses the following tools:
  1. React Programming Language
  2. React Router
  3. Has six rendering components
  4. The file structure is organized in the components file.
  5. Axios is used as a get method for an API
  6. Airtable is used for the API.
  7. This is deployed via Netify

This application has the following components:
  1.  A HOME page which includes:
      a. the title
      b. a button to see a POSTS (plops) of poopetrator posts
      c. a NEWPOST button (new plops) to send you to a post component/ list of poopetrators
      d. a button FEELING CHEEKY to see a random photo of a poopetrator post
      e. a button to see a MAPIT which has poopetrator emoji pins
    
  2. A NEWPLOP page which includes:
      a. A “Back to Home” button
      b. Title
      c. A poopetrator (responsible party) if known: 
      d. Date: (or pulls from the api: date/time stamp)
      e. Time: (or pulls from the api: date/time stamp)
      f. Location: geolocation or describe where you are at.
      g. Color: dropdown 
      h. Size: dropdown
      i. Consistency: dropdown
      j. pic upload
      k. upload button

  3. A PLOPS page which includes:
      a. A “Back to Home” button
      b. A running list of posts which includes everything in step 2.
      c. A link which pulls up the photo.
      d. A button to delete, which reads “The Poop Fairy Stole It”

  4. A PHOTO page which includes:
      a. A “Back to List” Link
      b. A “Back to Home” Link
      c. a photo of a selected poop
      d. A delete button to remove the photo/post
            i. This auto sends you back to the List page
  
  5. A FEELING CHEEKY page which includes:
      a. A “Back to Home” link
      b. A photo of a random poo

  6. A MAPIT page which includes:
      a. A “Back to Home” button
      b. A map
      c. emoji pins on that map
      d. clickable links on the emojis to the photo

----------------------API INFORMATION------------------------------

API LINK: "https://airtable.com/appAT4ne9vTP46u1M/tblrqVAJPFQfTY2wT/viwxIGa1bNCITkChK?blocks=bipPRkTFY4Sye1H5O"

-------------------------WIREFRAME---------------------------------

LINK: "https://whimsical.com/poopetrator-NXU33zWqsAxb6zUpWA78NB"

-----------------MVP (MINIMUM VIABLE PRODUCT)----------------------
  
  1. Uses six React Components
  2. Uses React with Router/Link functionality
  3. Uses Axios to get data.
  4. Uses Airtable as a custom API
  5. Is styled in CSS, CSS-in-JS, Flexbox and media query for Desktop & Mobile
  6. Deployed via Netlify

--------------------------TIMELINE---------------------------------

                  | PRIORITY  | ESTIMATED | ACTUAL  |
                  |           |    TIME   |  TIME   |
-----------------------------------------------------
WIREFRAME & PLAN  |   HIGH    |    4HR    |   6HR   |
PSEUDO CODE       |   HIGH    |    1HR    |   1HR   |  
SET UP REACT      |   ----    |   ----    |  ----   |
^COMPONENTS       |   HIGH    |    4HR    |         |
BUILDING API      |   HIGH    |    4HR    |         |
FETCH API & CODE  |   HIGH    |    4HR    |         |
PICTURE UPLOAD    |  MEDIUM   |   10HR    |         |
MAPPING           |  MEDIUM   |   10HR    |         |       
STYLING           |  MEDIUM   |   10HR    |         |
=====================================================



------------------------OTHER LINKS--------------------------------

GITHUB LINK: "https://github.com/darclay/poopetrator"
