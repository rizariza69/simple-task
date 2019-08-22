import createStore from "unistore";

const store = createStore({
  task: {
    list: [],
    isUpdate: false,
    selectedIndex: null
  }
});

export const actions = store => ({
  addTask(state, payload) {
    return {
      ...state,
      task: {
        ...state.task,
        list: state.task.list.concat(payload)
      }
    };
  },
  deleteTask(state, id) {
    return {
      ...state,
      task: {
        ...state.task,
        list: state.task.list.filter((_, i) => {
          return id != i;
        })
      }
    };
  },
  updateTask(state, payload) {
    return {
      ...state,
      task: {
        ...state.task,
        isUpdate: false,
        list: state.task.list.map((_, i) => {
          if (payload.id === i) {
            return payload.data;
          }
          return _;
        })
      }
    };
  },
  updateForm(state, id) {
    return {
      ...state,
      task: {
        ...state.task,
        isUpdate: true,
        selectedIndex: id
      }
    };
  }
});

export default store;
