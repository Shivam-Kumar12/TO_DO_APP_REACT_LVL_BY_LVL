function TodoItem1(){
let todoname='buyMilk'
let todoDate='4/10/2023'

    return    <div className="container ">
    <div className="row custom-row">
    <div className="col-6">{todoname}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col">
      <button type="button" className=" btn-danger btn custom-btn">
        Delete
      </button>
    </div>
  </div>
</div> 
}
export default  TodoItem1