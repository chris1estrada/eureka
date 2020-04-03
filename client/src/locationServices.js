// Call to get the latitude and longitude.
// Author: Chris Ancheta

/*
  To use this function in another component,
  copy and paste the following code:

  const [state, setState] = useState({
    //Null Island
    lat: 0,
    long: 0
  })

  useEffect(() => {
    getLocation.then((result) => {
      setState({ lat: result.lat, long: result.long })
    })
    console.log(state.lat + "____" + state.long);
  }, [])
*/

const getLocation = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log(latitude, longitude)
        resolve({ lat: latitude, long: longitude })
      }
    )
  }
})
export default getLocation