import React, { useState } from 'react';
import { Input } from "antd";

const Search = Input.Search;

class InputMessage extends React.Component {
  constructor() {
      super();

      this.state = {
          value: ''
      };
  }

  render = () => (
      <Search
          placeholder="input message"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onSearch={value => {
              this.props.onSubmit(value);
              this.setState({ value: '' });
          }}
          enterButton="Send"
          allowClear
      />
  );
}
export default InputMessage;
