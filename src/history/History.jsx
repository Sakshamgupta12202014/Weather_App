import React from "react";
import "./History.css"

function History({ history_list, app_mode }) {
  return (
    <div 
      className={
        app_mode === "light"
          ? "history_container_light"
          : "history_container_dark"
      }
    >
      <h3>Search History</h3>
      {history_list.length === 0 ? (
        <p className="empty_history">No search history available.</p>
      ) : (
        history_list.map((element, index) => (
          <div key={index} className="history_item">
            {element}
          </div>
        ))
      )}
    </div>
  );
}

export default History;
