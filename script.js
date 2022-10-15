var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
.bindPopup('London')
.openPopup();
$('.ip-address').text('35.189.90.146')
$('.location').text('London')
$('.timezone').text('UTC -01:00')
$('.isp').text('Google User Content')




$(function () {
       $(".search-button").click(function(){
            let ip = $("#search-bar").val()
            console.log(ip)
            if(ip === '' || !(/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/).test(ip)) ip='8.8.8.8';
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_HvPCrn19IKAVN7jMsAtvNvEFgh8C0&ipAddress=${ip}`)
            .then((response) =>  response.json())
            .then((data) =>{
                console.log(data);
                L.marker([data.location.lat, data.location.lng]).addTo(map);
                map.flyTo([data.location.lat, data.location.lng],13);
                

                $('.ip-address').text(data.ip)
                $('.location').text(data.location.city + ' : ' + data.location.region+'-'+data.location.country)
                $('.timezone').text('UTC '+ data.location.timezone)
                $('.isp').text(data.isp)
            })
            });
});
