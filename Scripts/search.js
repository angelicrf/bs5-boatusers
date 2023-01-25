const clickSearch = () => {
    let getSearch = document.getElementById("thisSearch")

    getSearch.value.trim().length != 0 ? (setSearchValue(getSearch.value), getSearch.value = "") : alert("search value is empty!")
}
const setSearchValue = (thisValue) => {

    let getSearchValue = document.getElementById("searchValue")

    getSearchValue.innerHTML = "searchvalue: " + thisValue
}
const emailInfo = () => {

    console.log('btn clicked')
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json())
        .then(console.log)
        .catch(err => console.log(err))

    let thisBody = JSON.stringify({
        "Messages": [
            {
                "From": {
                    "Email": "angelicrf@gmail.com",
                    "Name": "ClientName"
                },
                "To": [
                    {
                        "Email": "angelicrf@gmail.com",
                        "Name": "BoatUsers"
                    }
                ],
                "Subject": "My first BoatUsers Email!",
                "TextPart": "Greetings from BoatUsers!",
                "HTMLPart": "<h3>Dear Client,</h3><br />Your Email will be sent asap!"
            }
        ]
    })
    fetch("https://api.mailjet.com/v3.1/send", {
        method: 'POST',
        body: thisBody,
        credentials: 'include',
        header: new Headers({
            "Access-Control-Allow-Origin": "https://angelicrf.github.io/bs5-boatusers",
            "Accept": "application/json, text/plain, */*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "text/html",
            "Authorization": "Basic " + btoa('6cd68fea322c1e176923b684b4aa43d8:abf29ab2bd05fac2c4af40387302c130')
        }),
        redirect: 'follow',
        //auth: { username: '6cd68fea322c1e176923b684b4aa43d8', password: 'abf29ab2bd05fac2c4af40387302c130' },
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}