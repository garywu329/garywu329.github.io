async function randomDog(){
    const url = 'https://dog.ceo/api/breeds/image/random'
    //api call request + getting response
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results);

    const dog = data.results;
    let message = dog.image

}
https://www.youtube.com/watch?v=GZvSYJDk-us