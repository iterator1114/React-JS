class App extends React.Component {
    render() {
        return (
            <div>
                <Hello from='Abhishek' to="Ali" />
                <Hello from='Ram' to='Shyam' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));