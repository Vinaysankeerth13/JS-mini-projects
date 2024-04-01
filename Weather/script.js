const apikey = "0e19ea201bbb6f9b577d4dc753f46f9c"; 
// Declaring a const variable "api key" and assigning it the key that was given to us by the "OpenWeatherMap website"


    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
    // This is the api URL from "OpenWeatherMap" from which we are getting the data.

    const searchBox = document.querySelector(".search input"); 
   // This line of code selects the <input> element inside an element with the class name "search" using the querySelector method and assigns it to the constant variable searchBox.
   // Here's what each part of the code does:
   // document: This represents the entire HTML document.
   // .querySelector(".search input"): This method is used to select elements in the document using a CSS selector. In this case, it selects an <input> element that is a descendant of an element with the class name "search".
   // .search input: This CSS selector targets an <input> element that is a descendant of an element with the class name "search".
   // After executing this line of code, the searchBox constant will reference the selected <input> element, allowing you to manipulate or access its properties and attributes using JavaScript.
   
   const searchBtn = document.querySelector(".search button");
   // This line of code selects the <button> element inside an element with the class name "search" using the querySelector method and assigns it to the constant variable searchBtn.
   // All the other parts apply same as above line.


    const weatherIcon = document.querySelector(".weather-icon");
    // This line of code selects an element with the class name "weather-icon" using the querySelector method and assigns it to the constant variable weatherIcon.
    // All the other parts apply same as above line.

    async function checkWeather(city){ //This is the declaration of an asynchronous function named checkWeather that takes a parameter city. 
        // Async functions in JavaScript enable you to write asynchronous code in a synchronous manner using the async keyword.
        // Inside the function body, you would typically perform asynchronous operations, such as making HTTP requests to fetch data from an API, interacting with a database, or any other operation that involves waiting for a result without blocking the execution of other code.
        
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        // This line of code performs an asynchronous HTTP request to fetch weather data from an external API using the `fetch` function in JavaScript. Here's a breakdown of what each part of the code means:
        // 1. `const response`: This declares a constant variable named `response`. The `response` variable will hold the response returned by the `fetch` function once the HTTP request is completed.
        // 2. `await fetch(...)`: The `await` keyword is used to pause the execution of the code until the `fetch` function completes its task and returns a promise. The `fetch` function is a built-in JavaScript function that is used to make HTTP requests. It takes a URL as an argument and returns a promise that resolves to the response of the HTTP request.
        // 3. `apiurl + city + '&appid=${apikey}'`: This is the URL used for the HTTP request. It is constructed by concatenating the `apiurl` (which contains the base URL of the API) with the `city` parameter (which represents the name of the city for which weather data is being requested) and the `apikey` parameter (which represents the API key required for authentication).
        // 4. `${apikey}`: This is a placeholder used to insert the value of the `apikey` variable into the URL string. The `${}` syntax is called template literals or template strings, and it allows you to embed expressions (variables) into string literals.
        // In summary, this line of code asynchronously fetches weather data from an external API using the provided API URL, city name, and API key, and stores the response in the `response` variable.

        if(response.status == 404)
        {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        // This line of code is a conditional statement that checks if the HTTP response status is equal to 404, which indicates that the requested resource was not found on the server.
        // Here's a breakdown of what each part of the code does:
        // 1. `response.status == 404`: This checks if the `status` property of the `response` object is equal to 404. The `status` property represents the HTTP status code of the response.
        // 2. `{}`: This curly braces block is the body of the `if` statement. It contains the code that should be executed if the condition (`response.status == 404`) is true.
        // Inside the curly braces block:
        // 3. `document.querySelector(".error").style.display = "block";`: This line of code selects the HTML element with the class `.error` using the `querySelector` method and sets its CSS `display` property to `"block"`. This will make the `.error` element visible on the webpage. Typically, `.error` class elements are used to display error messages or UI elements related to errors.
        // 4. `document.querySelector(".weather").style.display = "none";`: Similarly, this line of code selects the HTML element with the class `.weather` and sets its CSS `display` property to `"none"`. This will hide the `.weather` element on the webpage. Typically, `.weather` class elements are used to display weather-related information or UI elements.
        // In summary, this code block is responsible for showing an error message (by displaying an element with the `.error` class) and hiding the weather information (by hiding an element with the `.weather` class) when the HTTP response status indicates that the requested resource was not found (status code 404).
        
        else
        {
        var data = await response.json();
        // This line of code converts the response from the API, which is in JSON format, into a JavaScript object. Here's what each part of the code does:
        // 1. `response.json()`: This is a method used on the `response` object returned by the `fetch` function. The `json()` method reads the response stream to completion and parses the response body as JSON. It returns a promise that resolves to a JavaScript object representing the JSON data.
        // 2. `await`: The `await` keyword is used to pause the execution of the code until the promise returned by `response.json()` is resolved. It allows asynchronous code to be written in a synchronous style, making it easier to work with promises and asynchronous functions.
        // 3. `var data = ...`: Once the promise returned by `response.json()` is resolved, the `await` keyword causes the execution to wait until the promise is fulfilled. Once fulfilled, the JSON data returned by the API is assigned to the variable `data`.
        // In summary, this line of code asynchronously fetches the JSON data from the response object returned by the API request and assigns it to the variable `data`. The `data` variable now contains the parsed JSON object that can be used to access the weather information obtained from the API.
        
        document.querySelector(".city").innerHTML = data.name;
        // This line of code updates the content of an HTML element with the class `city` with the name of the city obtained from the API response (`data.name`). Here's what each part of the code does:
        // 1. `document.querySelector(".city")`: This selects the first HTML element in the document that has the class `city`. The `querySelector` method returns a reference to the selected element.
        // 2. `.innerHTML`: This property allows you to get or set the HTML content inside an element. When used on the selected element, it represents the markup of the element's content, including any HTML tags.
        // 3. `= data.name`: This assigns the value of `data.name`, which is the name of the city obtained from the API response, to the `innerHTML` property of the selected element. This effectively updates the content of the element with the city name.
        // In summary, this line of code dynamically updates the content of the HTML element with the class `city` to display the name of the city obtained from the API response.
        
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        // This line of code updates the content of an HTML element with the class temp with the temperature obtained from the API response (data.main.temp).
        // This line of code dynamically updates the content of the HTML element with the class temp to display the temperature obtained from the API response, rounded to the nearest integer, along with the Celsius symbol.
        
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        // This line of code dynamically updates the content of the HTML element with the class humidity to display the humidity percentage obtained from the API response.
        
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
        // This line of code dynamically updates the content of the HTML element with the class wind to display the wind speed obtained from the API response with the appropriate unit.

        if(data.weather[0].main == "Cloud")
        {
           weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear")
        {
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain")
        {
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle")
        {
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Mist")
        {
            weatherIcon.src = "images/mist.png";
        }
        // This code dynamically updates the src attribute of the weatherIcon element based on the weather condition obtained from the API response, allowing the appropriate weather image to be displayed on the webpage.

        document.querySelector(".weather").style.display = "block"; 
        // This line of code sets the CSS display property of an element with the class .weather to "block".
        // Setting the display property to "block" makes the element a block-level element, causing it to be displayed as a block and occupy the entire width of its parent container.

        document.querySelector(".error").style.display = "none";
        // This line of code sets the CSS display property of an element with the class .error to "none".
        // Setting the display property to "none" hides the element from the page. The element will not be rendered, and it won't take up any space in the layout.
        }
    }
    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
        // This line of code adds an event listener to the searchBtn element that listens for a "click" event. When the button is clicked, it executes the arrow function provided:
        // Here's what it does:
        // searchBtn.addEventListener("click", ...: This sets up an event listener on the searchBtn element for the "click" event.
        // () => { ... }: This defines an arrow function (also known as a lambda function in JavaScript) that serves as the event handler for the click event.
        // checkWeather(searchBox.value): Inside the arrow function, it calls the checkWeather function with the value of the searchBox input field as its argument. This value represents the city name entered by the user in the search input box.
    })