class Friend extends React.Component {
    render() {
        const { name, skills } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {skills.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}