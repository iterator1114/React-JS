class App extends React.Component {
    render() {
        return (
            <div>
                <Friend name='Rohan' skills={['Dancing', 'Reading', 'Singing']} />
                <Friend name='Abhishek' skills={['Programming', 'Writing', 'Tourism']} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));