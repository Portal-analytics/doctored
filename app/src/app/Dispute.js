var React = require('react')
var styles = require('../styles')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

class Dispute extends React.Component {
  constructor () {
    super()
    rowData = [{row: {description: ""}}];
  }

  renderRows () {
    //depending on how the JSON data is relayed to this component, thought an
    //array of rows might be best
    var justDOIT = this.state.rowData.map(function(row){
      return(
        <span>
        <input type="checkbox" />
        {row.description}
        {row.charge}
        {row.code}
        </span>
      )
    })
  }
  onSubmit(){
    var sumSavings = 0;
    
  }
  
  //I have herpes, you might want to
  getChecked(){ 
    //pull state of all checked checkboxes
    
  }


  render () {
    return(
      <div>
      <span>
      <h3> Dispute? </h3>
      <h3> Description </h3>
      <h3> Charge </h3>
      <h3> Code </h3>
      </span>
      <div>
      {this.renderRows()}
      </div>
      <div>
      <button type='button' onClick={this.onSubmit}> Dispute </button>
      </div>



      </div>
    );
  }


}

module.exports = Dispute