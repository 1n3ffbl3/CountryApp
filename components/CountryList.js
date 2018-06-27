// import React from "react";
// import CountryListHeader from "./CountryListHeader";
// import CountryListItem from "./CountryListItem";

class CountryList extends React.Component {
    render() {
        const countryItem = (country) => {
            return <CountryListItem name={country.name} capital={country.capital} 
            alpha2={country.alpha2} key={country.alpha2} />
        };
        return (
            <table>
                <CountryListHeader />
                <tbody>
                    { this.props.countries.map(countryItem) }
                </tbody>
            </table>
        )
    }
}