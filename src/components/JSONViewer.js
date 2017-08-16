import React, {Component} from "react";
import axios from "axios";

class JSONViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: null
    };
  }

  componentWillMount() {
    var self = this;

    axios.get("http://ec2-18-220-143-227.us-east-2.compute.amazonaws.com/api/quiz_data")
         .then(function(pinData) {
           console.log("JSON State Set");
           self.setState({
             json: pinData.data[0].field_json_data[0].value
           });
           console.log(self.state.json);
         })
         .catch(function(error) {console.log("Sorry");console.error(error);});
  }

  render() {
    return(
      <pre><code>{this.state.json}</code></pre>
      // <pre><code>{this.state.json}</code></pre>
    );
  }
}

export default JSONViewer;
