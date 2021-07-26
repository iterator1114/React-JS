class App extends React.Component {
    render() {
        return (
            <div>
                <Hello name='Abhishek' branch='Computer science' cllg='ABES engineering College' />
                <Hello name='Aman' branch='Information technology' cllg='Raj kumar goel engineering College' />
            </div>
        );
    }
}

// Adding our component to HTML
ReactDOM.render(<App />, document.getElementById('root'));