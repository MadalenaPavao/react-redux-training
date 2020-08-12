import React, { Component } from "react";
import "./Connexion.css";
import { connect } from "react-redux";
import * as ActionType from "../../store/action";

class Connexion extends Component {
  state = {
    pseudo: "",
    goToChat: false,
  };

  handleOnChange = (event) => {
    this.setState({ pseudo: event.target.value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); // Cancel page reload
    //this.setState({goToChat : true})
    this.props.onLogin();
  };

  render() {
    return (
      <div className="connexionBox">
        <form className="connexion" onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.pseudo}
            onChange={this.handleOnChange}
            placeholder="Pseudo"
            required
          />
          <button type="submit">GO</button>
        </form>
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    onLogin: () => dispatch({ type: ActionType.LOGIN, value: true }),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(Connexion);
