import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const { onBuy } = this.props;
    return (
      <div>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">나라 이름</h4>
              </div>
              <div className="modal-body">
                <p>땅 종류</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={onBuy} data-dismiss="modal">구매하기</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">닫기</button>
              </div>
            </div>
            
          </div>
        </div>
        <button type="button" data-toggle="modal" data-target="#myModal">건물 사기</button>
      </div>
    );
  }
}

export default Modal;