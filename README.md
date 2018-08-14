# HOMEWORK: Weather App

![ui](https://media.git.generalassemb.ly/user/6387/files/ac9a086c-9fd8-11e8-9e0d-52091e56436b)

For this homework you'll be using the Open Weather API. You're going to be using react to display data from the API.

1. Fork and clone this repo and use create react app set up a new project.
2. Sign up for a free [Open Weather Map](https://home.openweathermap.org/users/sign_up) account!
3. Once you've signed up, you're given an [API key](https://home.openweathermap.org/api_keys). Copy that API key and keep track of it somewhere!
4. Take a look at the API docs. All APIs are different so you need to study the documentation to see what the endpoints look like and what you will get back. 
5. Open Postman to check out the data you're working with & to verify that your key works. Make a GET request to the following URL in postman, adding your API key to the end.

```
http://api.openweathermap.org/data/2.5/weather?q=10025,us?units=imperial&appid=[PUT YOUR API KEY HERE]
```

## 🚀 Completion looks like:

Your app has multiple components and does the following things:

- Handles the zip code input from the user
- Fetches data from the API when the zip code is submitted
- Parses the information that comes back from the API call
- Renders that information on the page

- **BONUS**: Include a button that converts the temperature from Fahrenheit to Celsius
- **BONUS**: Change the styling of the page based on weather conditions. 
- **BONUS**: Include the sunrise and sunset times (hint: maybe [Moment.js](https://momentjs.com/) will be helpful!) and some information about humidity, atmospheric pressure, etc.
- **BONUS**: Deploy your app on GH-pages (check the Create React App docs).

### To be thinking on

- What components should your app have?
- What components (if any) need state?
- How/when would you change state?
