// import React from "react";

class CountryListItem extends React.Component{
    constructor() {
        super();
    }

    render(){
        const {name, capital, alpha2} = this.props
        return(
            <tr onClick={() => this.props.onClickEvent({name})}>
                <td>{name}</td>
                <td>{capital}</td>
                <td>{alpha2}</td>
            </tr>
        )
    }
}

// export default CountryListItem;