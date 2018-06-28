class CountryPopup extends React.Component {

    constructor() {
        super();
        this.state = {
            country: null
        }
    }

    render() {
        const countryName = this.props.country.name;
        const countryDetails = country => {
            return 
                <div>
                    <p>{country.name}</p>
                    <p>{country.capital}</p>
                    <p>{country.alpha2}</p>
                    <p>{country.alpha3}</p>
                    <p>{country.population}</p>
                    <p>{country.region}</p>
                </div>
        }

        return (
            <div className="ui active modal" style={{top: 0 + '%'}}>
                <div className="header">
                    County {countryName} additional info
                    <span className="close">&times;</span>
                </div>
                <div className="content">
                    <div className="ui form">
                        <div className="inline field">
                            <label>Country Name:</label>
                            <input type="text" disabled="disabled" value={this.state.country ? this.state.country.name : 'Loading...' }/>
                        </div>
                        <div className="inline field">
                            <label>Capital city:</label>
                            <input type="text" disabled="disabled" value={this.state.country ? this.state.country.capital : 'Loading...' }/>
                        </div>
                        <div className="inline field">
                            <label>Alpha2 Code:</label>
                            <input type="text" disabled="disabled" value={this.state.country ? this.state.country.alpha2 : 'Loading...' }/>
                        </div>
                        <div className="inline field">
                            <label>Alpha3 Code:</label>
                            <input type="text" disabled="disabled" value={this.state.country ? this.state.country.alpha3 : 'Loading...' }/>
                        </div>
                        <div className="inline field">
                            <label>Population:</label>
                            <input type="text" disabled="disabled" value={this.state.country ? this.state.country.population : 'Loading...' }/>
                        </div>
                        <div className="inline field">
                            <label>Region:</label>
                            <input type="text" disabled="disabled" value={this.state.country ? this.state.country.region : 'Loading...' }/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        console.log("Popup Mount fired");
        fetch(`https://restcountries.eu/rest/v2/name/${this.props.country.name}?fullText=true`)
        .then(response => {
            return response.json()
        })
        .then(countryArray => {
            this.setState({
                country: {
                    name:       countryArray[0].name,
                    capital:    countryArray[0].capital,
                    alpha2:     countryArray[0].alpha2Code,
                    alpha3:     countryArray[0].alpha3Code,
                    population: countryArray[0].population,
                    region:     countryArray[0].region
                }
            });
            console.log(this.state.country);
        })
        .catch(error => console.log(error));
    }
}