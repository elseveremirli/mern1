import React from "react";

function AddBook({ book,handleChange,addBook }) {
  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary">
        <form style={{ padding: "20px 20px 10px 20px" }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
            Book Name
            </label>
            <input
              type="text" value={book.bookName} onChange={handleChange}
              name="bookName"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Book Name
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
            Author
            </label>
            <input
              type="text" value={book.author} onChange={handleChange}
              name="author"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Author
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
            Quantity{" "}
            </label>
            <input
              type="number" value={book.quantity} onChange={handleChange}
              name="quantity"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Quantity{" "}
            </div>
          </div>
          <div className="form-floating mb-3">
          <select name="department" value={book.department} onChange={handleChange} className="form-select" aria-label="Default select example">
            <option >Departmens</option>
            <option value="History & Salam">History & Salam</option>
            <option value="Religious">Religious</option>
            <option value="Music">Music</option>
            <option value="Study & Teaching">Study & Teaching</option>
          </select>
          <label htmlFor="floatingSelect">Select Book Departmens</label>
          </div>
            <div className="form-floating mb-3">
                <textarea name="comments"  value={book.comments} onChange={handleChange} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Comments</label>
            </div>
            <button type="button" onClick={addBook} className="btn btn-primary">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
