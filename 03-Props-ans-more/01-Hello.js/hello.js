class Hello extends React.Component {
    render() {
        console.log(this.props)
        return <h1>Hi! {this.props.from} to {this.props.to} </h1>;
    }
}

