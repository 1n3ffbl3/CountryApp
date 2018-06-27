// import React from "react";
// import CountryListHeader from "./CountryListHeader";
// import CountryListItem from "./CountryListItem";

class CountryList extends React.Component {
    render() {
        let countries = [{
            name: "Poland",
            capital: "Warsaw",
            alpha2: "PL"
        },
        {
            name: "France",
            capital: "Paris",
            alpha2: "FR"
        }];
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(response => console.log(response));

        return (
            <table>
                <CountryListHeader />
                <tbody>
                    {
                        countries.map(c =>
                            <CountryListItem name={c.name} capital={c.capital} alpha2={c.alpha2} key={c.alpha2} />)
                    }
                </tbody>
            </table>
        )
    }
}


