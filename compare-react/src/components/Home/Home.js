import React, {Component} from 'react'
import './Home.css'
class Home extends Component {

  render() {

    let heading = 'Digital Innovation Master';
    let subheading = 'However it was a lion. Gluten. Not just my sorrow, carrots easy to put passenger' +
        's. For, not to the supreme ends of. The refinancing. Clinical it is now. Volleyb' +
        'all court football macro developer need Vulputate';

    return (
      <div className="home">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{heading}</h1>
              <div className="is-two-thirds column is-paddingless">
                <h2 className="subtile is-4">{subheading}</h2>
              </div>
              <a href="" className="button is-primary" id="learn">Read More</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns pd is-desktop">
              <div className="column is-1 has-text-centered">
                <i className="fa fa-bolt is-primary"></i>
              </div>
              <div className="column is-one-third-desktop">
                <p className="title">
                  <strong>We provider quality product services to grow your bussiness with low cost</strong>
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
                    suscipit purus.
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="columns pd">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">“We are growing as fast with poomugam product services.
                    Quality at its first place.”</p>
                  <p className="subtitle">- Gary Simon</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">“We are growing as fast with poomugam product services.
                    Quality at its first place.”</p>
                  <p className="subtitle">- Gary Simon</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">“We are growing as fast with poomugam product services.
                    Quality at its first place.”</p>
                  <p className="subtitle">- Gary Simon</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home