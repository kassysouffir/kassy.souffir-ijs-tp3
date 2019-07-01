import React from "react";
import { Layout, Switch } from "antd";
import { connect } from 'react-redux';
import MessageList from '../components/MessageList';
import InputMessage from "../components/InputMessage";
import { add } from '../actions/messages';
import isLogged from '../components/isLoggedIn';

const MessageLayout = props => (
  <Layout style={{ height: "calc(100%)" }}>
    <Layout.Content style={{ padding: "0 50px", height: "calc(80%)"}}>
      <Layout
        style={{
          padding: "24px 0",
          background: "#fff",
          height: "calc(100%)"
        }}
      >
        <Layout.Content style={{ padding: "0 24px", height: "calc(80%)"}}>
          <MessageList {...props} />
        </Layout.Content>
      </Layout>
    </Layout.Content>
    <Layout.Footer
      style={{
        padding: "0 50px",
        textAlign: "center",
        height: "calc(20%)"
      }}
    >
      <InputMessage onSubmit={t => props.dispatch(add(t, props.authentication.userName ))} />
    </Layout.Footer>
  </Layout>
);

const mapStateToProps = state => {
  return { messages: state.messages,
  authentication: state.authentication,
  theme: state.theme };
};

export default isLogged(connect(mapStateToProps)(MessageLayout));
