import React, { Fragment } from 'react';

function withLoader({ Component, Loader }) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loading: true,
      }

      this.load = this.load.bind(this);
      this.show = this.show.bind(this);
    }

    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps() {}
    shouldComponentUpdate() { return true }
    componentWIllUpdate() {}
    componentDidUpdate() {}
    componentWillUnmount() {}
    componentDidCatch() {}

    load() {
      this.setState({ loading: true });
    }

    show() {
      this.setState({ loading: false });
    }

    render() {
      const {
        load,
        show,
      } = this;

      const { loading } = this.state;
      return (
        <Fragment>
          <Component load={load} show={show} { ...this.props } />
          { 
            loading &&
            <Loader />
          }
        </Fragment>
      )
    }
  }
}

export default withLoader;