import React from 'react'
import ReactDOM from 'react-dom'

class MyPeople extends React.Component {
    render() {
        return (
            <div>
                <h1>Look at these cool people</h1>
                <ul>
                    {this.props.users.map(user =>
                    <li key={user.id}>
                        <a href={`/user/${user.id}/`}>
                            {user.username}
                        </a>
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <MyPeople {...window.props} />,
    window.react_mount,
)