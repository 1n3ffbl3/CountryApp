// import React from "react";
// import CountryListHeader from "./CountryListHeader";
// import CountryListItem from "./CountryListItem";

class CountryList extends React.Component {
    constructor() {
        super();
        
        this.state = {
            visible: false,
            selectedCountry: ''
        }

        this.toggle = this.toggle.bind(this);
    }
    
    toggle(value) {
        console.log("toggle() fired with value: ", value);
        this.setState({
            visible: !this.state.visible,
            selectedCountry: value
        })
    }
    
    render() {
        const popup = (this.state.visible ? <CountryPopup country={this.state.selectedCountry} /> : null);
        const countryItem = (country) => {
            return <CountryListItem name={country.name} capital={country.capital} 
            alpha2={country.alpha2} key={country.alpha2} onClickEvent={this.toggle} />
        };
        return (
            <div>
                {popup}
                <table>
                    <CountryListHeader />
                    <tbody>
                        { this.props.countries.map(countryItem) }
                    </tbody>
                </table>
            </div>
        )
    }
}