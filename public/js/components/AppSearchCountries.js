class AppSearchCountries extends BaseApp {
    constructor(props) {
        super(props);
        this.state = {
            textSearch:''
        };
    }
    
    render(){
        return(
            <div>
                <AppHeader />
                <div className="ui form">
                    <div className="inline field">
                        <label>Country:</label>
                        <input value={this.state.textSearch} onChange={evt => this.updateInputValue(evt)} 
                            placeholder="Type country name..."/>
                        <button className="ui button"
                            style={{'marginLeft': 20 + 'px'}} 
                            onClick={this.fetchCountries.bind(this)}>Click</button>
                    </div>
                </div>
                <main>
                    {
                        this.state.countriesArray ? 
                        <CountryList countries={this.state.countriesArray} /> : ''
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