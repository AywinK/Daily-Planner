# Daily-Planner

## Description
A web application that allows a user to save important events to manage their work schedule. The planner provides the user with hourly timeblocks for standard business hours to enter events. The timeblocks are dynamically colour coded based on the current time. The events are stored locally and persists between page refreshes. The timeblocks can be easily modified and saved with a button press. Created using HTML, CSS, and JavaScript (including the DOM API). <br>
An example of usage can be seen in the demo below. <br>
 ![Quiz Demo](/assets/gifs/demo_gif.gif) 

## Deployment
The app is deployed using GitHub Pages at: https://aywink.github.io/Daily-Planner/

## Usage
### End User
Adding events is as simple as inputting within the colour coded text field within each timeblock. Information entered in each timeblock can only be saved using the save button found within the timeblock. The user is provided feedback with the information saved when the save button is pressed. Saving timeblocks with whitespaces or an empty text field simply clears the data from local storage.

### Development
Files for the daily planner are named appropriately and placed in a logically structured folder layout. The codebase includes comments and appropriately named expressions, so that the code is easy to understand. The JavaScript file for the app is structured in the following order:
- Function run on initial page load
- Global Functions
- Event Listeners

The daily planner is developed using jQuery and moment.js third party APIs.

## Credits
- W3Schools - https://www.w3schools.com/js/default.asp
- MDN Javascript Documentation - https://developer.mozilla.org/en-US/
- Stack Overflow threads - https://stackoverflow.com/
- FreeCodeCamp resources - https://www.freecodecamp.org/news
- JavaScript: The Definitive Guide, 7th Edition by David Flanagan - ISBN: 9781491952023
- jQuery Cheat Sheet - https://htmlcheatsheet.com/jquery/
- Moment.js Documentation - https://momentjs.com/docs/

## License
MIT License

