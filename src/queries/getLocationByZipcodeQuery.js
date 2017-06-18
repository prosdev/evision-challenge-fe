import gql from 'graphql-tag'

export default gql`
    query getLocationData ($zipcode: Int!) {
      getWeather(zipcode: $zipcode) {
        cityName
        temperature
        timezoneInfo {
          timeZoneId
          timeZoneName
        }
        elevation
      }
    }
`;