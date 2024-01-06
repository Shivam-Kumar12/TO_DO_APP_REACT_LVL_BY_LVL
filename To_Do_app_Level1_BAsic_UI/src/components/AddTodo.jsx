function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row custom-row">
        <div className="col-6">
          <input type="text" placeholder="Enter ToDo  Item" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2 ">
          <button type="button" className="btn btn-success custom-btn">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
