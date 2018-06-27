// import React from "react";
// import CountryListHeader from "./CountryListHeader";
// import CountryListItem from "./CountryListItem";

class CountryList extends React.Component {
    render() {
        return (
            <table>
                <CountryListHeader />
                <tbody>
                    {
                        this.props.countries.map(country =>
                            <CountryListItem name={country.name} capital={country.capital} alpha2={country.alpha2} key={country.alpha2} />)
                    }
                </tbody>
            </table>
        )
    }
}


