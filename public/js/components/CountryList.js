class CountryList extends React.Component {
    constructor() {
        super();
        
        this.state = {
            visible: false,
            selectedCountry: '',
            countryListSize: 10,
            countryListOffset: 0
        }

        this.toggle = this.toggle.bind(this);
        this.hide = this.hide.bind(this);
        this.updateOffset = this.updateOffset.bind(this);
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

    updateOffset(value) {
        console.log('updateOffset() fired');
        this.setState({
            countryListOffset: value
        })
    }
    
    render() {
        const popup = (this.state.visible ? <CountryPopup country={this.state.selectedCountry} 
            onCloseEvt={this.hide} /> : null);
        const countryItem = (country) => {
            return <CountryListItem name={country.name} capital={country.capital} 
            alpha2={country.alpha2} key={country.alpha2} onClickEvent={this.toggle} />
        };
        const countryStartIndex = () => {
            return this.state.countryListOffset * this.state.countryListSize;
        };
        const countryEndIndex = () => {
            return countryStartIndex() + this.state.countryListSize;
        };
        return (
            <div>
                {popup}
                <table className="ui celled table">
                    <CountryListHeader />
                    <tbody>
                        { this.props.countries
                            .slice(countryStartIndex(), countryEndIndex())
                            .map(countryItem) }
                    </tbody>
                    <CountryListPagination offsetSize={this.state.countryListSize}
                        countryCount={this.props.countries.length}
                        paginationCallback={this.updateOffset} />
                </table>
            </div>
        )
    }
}