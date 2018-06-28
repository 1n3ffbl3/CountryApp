// import React from "react";
// import AppHeader from "./AppHeader";
/*export*/ class AppAllCountries extends BaseApp {
    constructor() {
        super();
    }

    componentDidMount(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => {
            return response.json()
        })
        .then(json => this.handleApiResponse(json));
    }
    
}

//export default App;