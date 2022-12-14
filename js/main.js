const main = () => {
    const address = document.getElementById("txtAddress").value
    // dung superagent call api cua google, lay toa do cua dia chi nguoi dung
    superagent.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`)
        .end((err, res) => {
            const {lat, lng} = res.body.results[0].geometry.location
            console.log(lat, lng)
        });

}