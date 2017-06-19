# About this project
The challenge: 

`Create an HTML page which allows input of the ZIP­code, and writes the required output message to the page once it is retrieved.
`

`At the location $CITY_NAME, the temperature is $TEMPERATURE, the timezone is $TIMEZONE, and the elevation is $ELEVATION`
### Getting started
Clone the project, and install dependencies by running:

`yarn install`

First, you must create a `config` folder inside `src`. Inside the `config` folder, create a `config.js` file containing the following:
```javascript
const config = {
    GOOGLEMAP_API : YOUR_API_KEY_GOES_HERE
};

export default config;
```

To start project, simply run: 
```code
yarn start
```

### Dependencies
Requires: 

&#9745; [evisions-challenge-service](https://github.com/prosdev/evisions-challenge-service)

### Result:
![alt text](https://s3-us-west-2.amazonaws.com/prosdevlab/images/evision-challenge-fe-1.png "evision-challenge-fe")

### Example
See sample application at: 

http://evision-challenge-fe.s3-website-us-east-1.amazonaws.com/