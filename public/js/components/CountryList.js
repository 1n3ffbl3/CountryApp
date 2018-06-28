class CountryList extends React.Component {
    constructor() {
        super();
        
        this.state = {
            visible: false,
            selectedCountry: ''
        }

        this.toggle = this.toggle.bind(this);
        this.hide = this.hide.bind(this);
    }
    
    toggle(value) {
        console.log("toggle() fired with value: ", value);
        this.setState({
            visible: !this.state.visible,
            selectedCountry: value
        })
    }

    hide() {
        console.log('hide() fired');
        this.setState({
            visible: false
        })
    }
    
    render() {
        const popup = (this.state.visible ? <CountryPopup country={this.state.selectedCountry} 
            onCloseEvt={this.hide} /> : null);
        const countryItem = (country) => {
            return <CountryListItem name={country.name} capital={country.capital} 
            alpha2={country.alpha2} key={country.alpha2} onClickEvent={this.toggle} />
        };
        return (
            <div>
                {popup}
                <table className="ui celled table">
                    <CountryListHeader />
                    <tbody>
                        { this.props.countries.map(countryItem) }
                    </tbody>
                </table>
            </div>
        )
    }
}