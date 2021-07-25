function getNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

class Picker extends React.Component {
    render() {
        const num = getNumber();
        let msg;
        if (num === 7) {
            msg = (
                <div>
                    <h1>Congrats You Win!</h1>
                    <img src='https://images.unsplash.com/photo-1627230123262-27ccd4a6038b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80' />
                </div>
            )
        } else {
            msg = <h1>You lose!</h1>
        }
        return (
            <div>
                <h1>Your number is: {num}</h1>
                {/* <p>{num === 7 ? 'Congrats!' : 'Unlucky'}</p> */}
                {msg}
            </div>
        )
    }
}

