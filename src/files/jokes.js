export const getJokes = async () => {
    let response = await fetch('https://api.chucknorris.io/jokes/random');
    console.log('Response: ', response);
    console.log('Status: ', response.status);
    console.log('OK?', response.ok);
    // We return the JSON 
    return response.json()
}