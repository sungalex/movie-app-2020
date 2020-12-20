import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        } else {
            console.log(location);
        }
    }
    render() {
        const {location} = this.props;
        if (location.state) {
            return (
                <div>
                    <h1>{location.state.title}</h1>
                    <h3>{location.state.url}</h3>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;