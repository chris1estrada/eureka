// Call to get the latitude and longitude.
// Author: Chris Ancheta

/*
  To use this function in another component,
  copy and paste the following code:

  const [coords, setCoords] = useState({
    //Null Island
    lat: 0,
    long: 0
  })

  useEffect(() => {
    getLocation.then((results) => {
      setCoords({ lat: results.lat, long: results.long })
    })
    console.log(coords.lat + "____" + coords.long);
  }, [])
*/

const getLocation = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        resolve({ lat: latitude, long: longitude })
      }
    )
  }
})
export default getLocation