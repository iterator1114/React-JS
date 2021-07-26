class Hello extends React.Component {
    render() {
        const { name, branch, cllg } = this.props;
        const colors = { fontSize: '20px', color: 'blue', backgroundColor: 'aqua' };
        return (
            <div>
                <h1 className='main-heading'>{cllg}</h1>
                <div className='bg'>
                    <h2 className='heading'>{name}</h2>
                    <p style={colors}>
                        {branch}
                    </p>
                </div>
            </div>
        )
    }
}