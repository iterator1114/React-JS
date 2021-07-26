class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Picker />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));