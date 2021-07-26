class Hello extends React.Component {
    render() {
        return <h1>Hi! Abhishek here</h1>;
    }
}

// Adding our component to HTML
ReactDOM.render(<Hello />, document.getElementById('root'));