// import React from "react";

class CountryListItem extends React.Component{
    render(){
        const {name, capital, alpha2} = this.props
        return(
            <tr>
                <td>{name}</td>
                <td>{capital}</td>
                <td>{alpha2}</td>
            </tr>
        )
    }
}

// export default CountryListItem;