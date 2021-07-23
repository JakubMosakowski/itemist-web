import React from 'react';
import axios from 'axios';
import Item from './Item';
import { SpinnerDotted } from 'spinners-react';


export default class List extends React.Component {
  state = {
    persons: [],
    isLoading: false
  }

  componentDidMount() {
    this.load()
  }

  toggleProgress(inProgress) {
    this.setState({ isLoading: inProgress });
  }

  load() {
    this.toggleProgress(true)
    axios
      .get(`https://api.jsonbin.io/b/60fb261a99892a4ae9a8f136`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      }).finally(this.toggleProgress(false))
  }

  render() {

    const listItems = this.state.persons.map((data) =>
      <Item key={data.id.toString()} value={data} />
    );

    return (
      <ul>
        <SpinnerDotted enabled={this.state.isLoading} />
        {listItems}
      </ul>
    );
  }
}

