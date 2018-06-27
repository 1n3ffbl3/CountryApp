// import React from "react";
// import AppHeader from "./AppHeader";
/*export*/ class App extends React.Component {
    state = {
        debug: false,
        countriesArray:[]
    };
    componentDidMount(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => {
            return response.json()
        })
        .then(json => {
            let temporaryCountries = [];
            json.map(country => temporaryCountries.push({
                name: country.name,
                capital: country.capital,
                alpha2: country.alpha2Code
            }));
            if (this.state.debug) {
                console.log(temporaryCountries);
            }
            this.setState({countriesArray: temporaryCountries});
            if (this.state.debug) {
                console.log(this.state.countriesArray);
            }
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.onClickHandler}>Click</button>
                <AppHeader />
                <main>
                    {
                        this.state.countriesArray ? 
                        <CountryList countries={this.state.countriesArray} /> : 'Loading...'
                    }
                </main>
            </div>
        )
    }
    onClickHandler(){
        alert("You have just pushed the button!");
    }
}

//export default App;
