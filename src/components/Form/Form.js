import React, { Component } from 'react';

class Form extends Component {
  state = {
    form: {
      milesRan: [],
      longestRun: null,
    },
    recentMiles: null,
  };

  clickAddNewRun = (event) => {
    console.log('Adding new run');
    event.preventDefault();

    this.setState({
      recentMiles: this.state.form.milesRan,
    });
  };

  changeMilesRan = (event) => {
    console.log('element', event.target);
    console.log('Change milesRan: ', event.target.value);
    this.setState({
      form: {
        ...this.state.form,
        milesRan: event.target.value,
      },
    });
  };
  updateLongestRun = () => {
    if (this.state.recentMiles > this.state.form.milesRan) {
      this.setState({
        form: {
          ...this.state.form,
          longestRun: this.state.form.recentMiles,
        },
      });
    } else {
      this.setState({
        ...this.state.form.longestRun,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.clickAddNewRun}>
        <input
          type="text"
          placeholder="Miles Ran"
          onChange={(event) => this.changeMilesRan(event, 'milesRan')}
          required
        />
        <button>Add New Run</button>

        <p>Recent Run: {this.state.recentMiles}</p>
        <p>Longest Run: {this.state.form.longestRun}</p>
      </form>
    );
  }
}

export default Form;
