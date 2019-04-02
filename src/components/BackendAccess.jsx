import React from "react";

export default function BackendAccess({ history }) {
  return (
    <div className="row">
      <div className="col-md-6 mt-4">
        <div className="card card-block card-note">
          <div
            className="card-body text-center cursor-pointer"
            onClick={() =>
              history.push({ pathname: "/templatelist", state: "new" })
            }
          >
            <div>Back-End New Notes</div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mt-4">
        <div
          className="card card-block card-note"
          onClick={() =>
            history.push({ pathname: "/templatelist", state: "view" })
          }
        >
          <div className="card-body text-center">
            <div>Back-End View Notes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
