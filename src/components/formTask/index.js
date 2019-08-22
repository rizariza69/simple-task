import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { actions } from "../../store";

class FormTask extends Component {
  state = {
    value: "",
    date: ""
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.value.length <= 0) return alert("Gak boleh gan");

    if (!this.props.task.isUpdate) {
      this.props.addTask(this.state);
    } else {
      this.props.updateTask({
        id: this.props.task.selectedIndex,
        data: this.state
      });
    }
    this.setState({ value: "", date: "" });
  };

  onChangeValue = even => {
    const { value } = even.target;
    this.setState({ value: value });
  };

  onChangeDate = even => {
    const { value } = even.target;
    this.setState({ date: value });
  };

  render() {
    return (
      <div class="py-4">
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="task">Your Task</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.onChangeValue}
              placeholder="Insert Your Task"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="date">Date</label>
            <input
              class="form-control"
              type="date"
              value={this.state.date}
              onChange={this.onChangeDate}
              placeholder="date"
            />
          </div>

          <button
            type="submit"
            class={`btn btn-block ${
              this.props.task.isUpdate ? `btn-success` : `btn-primary`
            }`}
          >
            {this.props.task.isUpdate ? `Update Task` : "Add Task"}
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  "task",
  actions
)(FormTask);
