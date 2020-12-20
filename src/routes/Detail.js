import React from "react";
import "./About.css";

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
                <div className="about__container">
                    <span><h3>{location.state.title}</h3></span>
                    <span>{location.state.url}</span>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;