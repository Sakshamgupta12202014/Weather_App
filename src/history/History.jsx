import React from "react";

function History({ history_list }) {
  return (
    <div className="history-container">
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
