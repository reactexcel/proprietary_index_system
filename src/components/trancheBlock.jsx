import React, { Component } from "react";

const TrancheBlock = ({ item, action, handleAction }) => {
  return (
    <div className="col-md-12 text-md-left text-lg-left text-center mt-4">
      <div className="card card-block card-tranche">
        <div className="card-body row">
          <div className="col-md-6 tranche-title">{item.name}</div>
          <div className="col-md-4 offset-md-2">
            <button
              className="btn btn-outline-primary"
              onClick={() => handleAction(item)}
            >
              {action}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrancheBlock;
