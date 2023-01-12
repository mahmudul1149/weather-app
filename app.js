const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
  const inputbtn = document.getElementById("input-btn").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputbtn}&appid=4450c049dc640f47383e2b1a34a897df`
  )
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      const cityName = data.name;
      const tem = data.main.temp;
      const temp = tem - 273.15;
      const description = data.weather[0].description;

      document.getElementById("city").innerText = cityName;
      document.getElementById("temp").innerText = temp.toFixed(0) + "℃";
      document.getElementById("des").innerText = description;
    });
  document.getElementById("input-btn").value = "";
});
