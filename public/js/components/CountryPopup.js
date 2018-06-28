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
        //myModal modal-content
        return (
            <div className="ui active modal">
                <div className="header">
                    County {countryName} additional info
                    <span className="close">&times;</span>
                </div>
                <div className="content">
                    <p>{this.state.country ? this.state.country.name : '' }</p>
                    <p>{this.state.country ? this.state.country.capital : ''}</p>
                    <p>{this.state.country ? this.state.country.alpha2 : ''}</p>
                    <p>{this.state.country ? this.state.country.alpha3 : ''}</p>
                    <p>{this.state.country ? this.state.country.population : ''}</p>
                    <p>{this.state.country ? this.state.country.region : ''}</p>
                    {/* { this.state.country ? countryDetails(this.state.country) : null } */}
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
        });
    }
}