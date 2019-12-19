import React, { Component } from 'react';
import axios from 'axios';


class List extends Component {
  state = {
    jobs: []
  }
  componentDidMount() {
    axios
    .get("https://jobs.github.com/positions.json")
    .then(res => {
      const jobs = res.data;
      console.log(jobs);

    })
    .catch(e => {
      console.log(e)
      
    });
  }
  render() {
    
    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>Jobs List</h1>
        {this.state.jobs.map((jobs) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{jobs.title}</h5>
            </div>
          </div>

        ))}
        </div>
       </div>
    );
  }
}

export default List;