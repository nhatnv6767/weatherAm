const main = () => {
    const address = document.getElementById("txtAddress").value
    // dung superagent call api cua google, lay toa do cua dia chi nguoi dung
    superagent.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`)
        .end((err, res) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(res)
            const {lat, lng} = res.body.results[0].geometry.location

            //dùng superagent call api của darksky, lấy thời tiết của địa chỉ người dùng nhập
            superagent
                .get(
                    `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7bbecca28cbc31d7c6739e70baa64e46/${lat},${lng}`
                )
                .end((err, res) => {
                    if (err) {
                        console.log(err)
                        return;
                    }
                    const {summary, temperature} = res.body.currently;
                    document.getElementById("summaryText").innerText = summary;
                    document.getElementById("temperatureText").innerText = temperature;

                })

        });

}