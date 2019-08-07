import React from 'react'

const Deleted = () => {
    return (
        <div className="modal show" id="myModal" style="display: block; padding-right: 15px;">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal Title</h5>
              <button className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos omnis
              architecto, quod, obcaecati dolorum debitis dolore porro qui, iusto quo accusantium voluptates pariatur illo.
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>    )
}

export default Deleted