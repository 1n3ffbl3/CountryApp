// import React from "react";
// import AppHeader from "./AppHeader";
/*export*/ class AppSearchCountries extends BaseApp {
    constructor(props) {
        super(props);
        this.state = {
            textSearch:''
        };
    }
    
    render(){
        return(
            <div>
                <input value={this.state.textSearch} onChange={evt => this.updateInputValue(evt)} />
                <button onClick={this.fetchCountries.bind(this)}>Click</button>
                <main>
                    {
                        this.state.countriesArray ? 
                        <CountryList countries={this.state.countriesArray} /> : 'Loading...'
                    }
                </main>
            </div> 
        );
    }

    updateInputValue(event) {
        this.setState({
            textSearch: event.target.value
        });
    }

    fetchCountries(){
        // console.log(this.state.textSearch);
        // console.log("fetchCountries() invoked.");
        fetch(`https://restcountries.eu/rest/v2/name/${this.state.textSearch}`)
        .then(response => response.json())
        .then(json => this.handleApiResponse(json))
        .catch(error => console.log(error));
    }
    
}

//export default App;