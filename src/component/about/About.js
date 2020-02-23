import React, { Component } from 'react';
import leaderElvis from './001.jpg';
import leaderLeo from './002.jpg';
import leaderWu from './003.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="margin-top-20">
            <div className="card-wrapper col-6">
              <div className="card-circle-block">
                <div className="card-circle">
                  <img className="card-circle-img" src={leaderElvis} alt='leader' />
                </div>
              </div>
              <div className="card-main mobile-card-main">
                <div className="card-title">林大鈞 Elvis Lin</div>
                <p>造型氣球製作、氣球佈置規劃、活動流程建議</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="margin-top-20">
            <div className="card-wrapper col-6">
              <div className="card-circle-block">
                <div className="card-circle">
                  <img className="card-circle-img" src={leaderLeo} alt='leader' />
                </div>
              </div>
              <div className="card-main mobile-card-main">
                <div className="card-title">林琨翔 Leo Lin</div>
                <p>舞台秀、造型氣球製作、氣球佈置規劃、活動流程建議</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="margin-top-20">
            <div className="card-wrapper col-6">
              <div className="card-circle-block">
                <div className="card-circle">
                  <img className="card-circle-img" src={leaderWu} alt='leader' />
                </div>
              </div>
              <div className="card-main mobile-card-main">
                <div className="card-title">吳振宇 Yo Wu</div>
                <p>舞台秀、造型氣球製作、氣球佈置規劃、活動流程建議</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
