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

    let getSubject = document.getElementById('emailSubject')
    let getEmailBody = document.getElementById('emailBody')

    if (getSubject.value != null && getEmailBody.value != null) {
        try {
            //change url after deploy
            const response = await fetch('https://bu5-boatuser-server-kjqm.vercel.app/api/user/angy', {
                method: "POST",
                body: JSON.stringify({
                    "emailBody": `${getEmailBody.value}`,
                    "emailSubject": `${getSubject.value}`
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
    } else {
        alert("Input is Empty!")
    }
}