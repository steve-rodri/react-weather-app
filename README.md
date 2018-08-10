# HOMEWORK: Weather App!!!

[original readme](https://git.generalassemb.ly/nyc-wdi-ada/HW_U02_D02_Methods-APIs/tree/master/api).
For this homework you'll be using the Open Weather API. You're going to be using react to display data from the API
1. Sign up for a free [Open Weather Map](https://home.openweathermap.org/users/sign_up) account!
2. Once you've signed up, you're given an [API key](https://home.openweathermap.org/api_keys). Copy that API key and keep track of it somewhere!
3. Open Postman to check out the data you're working with & to verify that your key works. Make a GET requrest to the following URL in postman, adding your API key to the end.

```
http://api.openweathermap.org/data/2.5/weather?q=10025,us?units=imperial&appid=[PUT YOUR API KEY HERE]

## 🚀 Completion looks like:

Your app has multiple components and does the following things:

- Handles the zip code input from the user
- Fetches data from the API when the zip code is submitted
- Parses the information that comes back from the API call
- Renders that information on the page
- **BONUS**: Include the sunrise and sunset times (hint: maybe [Moment.js](https://momentjs.com/) will be helpful!) and some information about humidity, atmospheric pressure, etc.
- **BONUS**: Upload your completed weather app to BitBalloon.

Things to think about:

- Should your app have state?
- How/when would you change state?
- What way will you make the API call?


## 🚀 Your homework submission should include:

- An issue ticket created on the repo `ada-students` [here](https://git.generalassemb.ly/nyc-wdi-ada/ada-students/issues/new)
- A link to your fork of this repository
- Completion, comfort, wins, losses, questions... you know the drill.

