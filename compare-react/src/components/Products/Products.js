import React, {Component} from 'react';
import axios from 'axios';
import './Products.css';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      errors: []
    }
  }

  componentDidMount() {
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const products = response
          .data
          .slice(0, 10);
        this.setState({products})
      })
      .catch(e => {
        const errors = [];
        errors.push(e);
        this.setState({errors})
      })
  }
  render() {
    return (
      <div className="products">
        <div className="container">
          <div className="section">
            <h1 className="title">test</h1>
            <h2 className="subtitle is-4">test</h2>
            <div className="columns">
              {this
                .state
                .products
                .map(product => {
                  return (
                    <div className="column is-one-third" key={product.id}>
                      <div className="card">
                        <div className="card-content">
                          <p className="title">{product.title}</p>
                          <p className="answer">{product.body}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products