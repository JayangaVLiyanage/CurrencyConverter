
// api url
const api_url = "https://api-coding-challenge.neofinancial.com/currency-conversion?seed=22183";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
}
// Calling that async function
getapi(api_url);
  
