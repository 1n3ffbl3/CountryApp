// import React from "react";
// import AppHeader from "./AppHeader";
class App extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.onClickHandler}>Click</button>
                <AppHeader />
                <main>
                    <CountryList />
                </main>
            </div>
        )
    }
    onClickHandler(){
        alert("You have just pushed the button!");
    }
}

//export default App;
