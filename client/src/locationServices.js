/** 
 * Call to get the latitude and longitude.
 * @author Chris Ancheta
*/

/*
  To use this function in another component,
  copy and paste the following code:

  const [coords, setCoords] = useState({
    lat: false,
    long: false
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