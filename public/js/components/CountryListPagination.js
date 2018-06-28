class CountryListPagination extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {offsetSize, countryCount, paginationCallback} = this.props;
        let pages = []
        if (countryCount > 0) {
            let totalPages = parseInt(countryCount / offsetSize) + 1;
            for (let it = 0; it < totalPages; ++it) {
                pages.push(it);
            }
        }
        return (
            <tfoot>
                <tr>
                    <th colSpan="3">
                        <div className="ui right floated pagination menu">
                            <a className="icon item">
                            <i className="left chevron icon"></i>
                            </a>
                            {
                                pages.map(n => {
                                    return <a className="item" key={n} onClick={() => paginationCallback(n)}>{n + 1}</a> 
                                })
                            }
                            {/* <a className="item" onClick={() => this.setState({countryListOffset: 0})}>1</a>
                            <a className="item" onClick={() => this.setState({countryListOffset: 1})}>2</a>
                            <a className="item" onClick={() => this.setState({countryListOffset: 2})}>3</a>
                            <a className="item" onClick={() => this.setState({countryListOffset: 3})}>4</a> */}
                            <a className="icon item">
                            <i className="right chevron icon"></i>
                            </a>
                        </div>
                    </th>
                </tr>
            </tfoot>
        )   
    }
}