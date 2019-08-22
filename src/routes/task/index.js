import { h, Component } from "preact";
import { connect } from "unistore/preact";
import FormTask from "../../components/formTask";
import { actions } from "../../store";

const Task = ({ task, deleteTask, updateForm }) => (
  <div>
    <FormTask />
    <div>
      {task.list &&
        task.list.map((item, i) => (
          <div class="card mb-3">
            <div class="card-body">
              <p class="card-text">{item.value}</p>
              <div class="mb-2">
                <small class="text-muted  text-muted text-sm">
                  {item.date}
                </small>
              </div>
              <div>
                <button
                  onClick={() => deleteTask(i)}
                  class="btn btn-sm btn-danger mr-1"
                >
                  DELETE
                </button>
                <button
                  onClick={() => updateForm(i)}
                  class="btn btn-sm btn-success"
                >
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default connect(
  "task",
  actions
)(Task);
