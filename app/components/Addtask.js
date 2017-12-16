import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { AddNewTask } from '../actions/PageActions'



class Addtask extends Component
{
    addTrack() {
        let text = document.getElementById("taskName");
        if (text.value.trim()) {
            this.props.onAddTrack(this.trackInput.value);
            this.trackInput.value = '';
        } else {
            alert("empty task name");
        }
    }

    render(){
        return (
            <div>
                <input style={style.form} type="text" ref={(input) => { this.trackInput = input }} id={"taskName"} />
                <button onClick={this.addTrack.bind(this)}>Add tak</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    page: state.page
});

const mapDispatchToProps = dispatch => ({
    onAddTrack: bindActionCreators(AddNewTask, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Addtask);

var style = {
  form: {
    marginLeft: 50,
    marginRight: 10,
  }
};

