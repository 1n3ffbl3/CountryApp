class AppEuCountries extends BaseApp {
    constructor() {
        super();
    }

    componentDidMount(){
        fetch("https://restcountries.eu/rest/v2/regionalbloc/eu")
        .then(response => {
            return response.json()
        })
        .then(json => this.handleApiResponse(json))
        .catch(error => console.log(error));
    }
    
}