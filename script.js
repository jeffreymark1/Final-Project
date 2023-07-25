//alert("This is a test!");

//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3893&api_key=DEMO_KEY

//api key: uP1kGstKW8sebh1pmvJUpGBbatgGN0XfVxv57ex9

const sol = 3897;
const apiKey = "uP1kGstKW8sebh1pmvJUpGBbatgGN0XfVxv57ex9";
const button = document.querySelector("#clickButton");


button.addEventListener('click', async () => {
    let response = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3897&api_key=uP1kGstKW8sebh1pmvJUpGBbatgGN0XfVxv57ex9")
    //console.log(response)
    //const photos = response.data.photos;
    //const marsPhotoObj = photos[0]
    //const marsImage = marsPhotoObj.img_src
    //console.log(marsImage);
    const marsPic = response.data.photos[0].img_src; 
    console.log(marsPic);
    document.getElementById("showPic").src=`${marsPic}`;
})