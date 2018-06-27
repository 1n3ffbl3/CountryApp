class BaseApp extends React.Component {
    state = {
        debug: false,
        countriesArray:[]
    };

    handleApiResponse(responseJson) {
        let temporaryCountries = [];
        responseJson.map(country => temporaryCountries.push({
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