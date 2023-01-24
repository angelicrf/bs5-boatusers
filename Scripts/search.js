const clickSearch = () => {
    let getSearch = document.getElementById("thisSearch")

    getSearch.value.trim().length != 0 ? (setSearchValue(getSearch.value), getSearch.value = "") : alert("search value is empty!")
}


const setSearchValue = (thisValue) => {

    let getSearchValue = document.getElementById("searchValue")

    getSearchValue.innerHTML = "searchvalue: " + thisValue
}