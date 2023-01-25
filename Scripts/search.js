const clickSearch = () => {
    let getSearch = document.getElementById("thisSearch")

    getSearch.value.trim().length != 0 ? (setSearchValue(getSearch.value), getSearch.value = "") : alert("search value is empty!")
}
const setSearchValue = (thisValue) => {

    let getSearchValue = document.getElementById("searchValue")

    getSearchValue.innerHTML = "searchvalue: " + thisValue
}
const emailInfo = async () => {

    console.log('btn clicked')
    // two inputs and get value in a form

    try {
        //change url after deploy
        const response = await fetch('http://localhost:3000/api/user/angy', {
            method: "POST",
            body: JSON.stringify({
                "emailBody": "emailTextBody",
                "emailSubject": "emailSubject"
            }),
            headers: {
                "Content-Type": "application/json"
            }

        })
        if (response.ok) {
            return response.json().then(val => console.log(val))
        }

    } catch (error) {

    }
}