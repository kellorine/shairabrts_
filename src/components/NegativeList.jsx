// src/components/NegativeList.jsx
import { FaTrash } from "react-icons/fa";

export default function NegativeList({
  negatives,
  negText,
  setNegText,
  addNegative,
  removeNegative,
}) {
  return (
    <div className="col-md-6">
      <div className="card sweet-card">
        <div className="card-body">
          <h4 className="section-title text-purple">
            Things We Can Improve 🌷
          </h4>

          <form onSubmit={addNegative} className="d-flex gap-2 mt-3 mb-3">
            <input
              className="form-control"
              placeholder="Write something to improve..."
              value={negText}
              onChange={(e) => setNegText(e.target.value)}
            />
            <button className="btn btn-purple" type="submit">
              Add
            </button>
          </form>

          <ul className="list-group list-unstyled">
            {negatives.length === 0 && (
              <li className="text-muted small">Nothing here yet 🌸</li>
            )}
            {negatives.map((n) => (
              <li key={n.id} className="list-item fade-in">
                🌼 {n.text}
                <button
                  className="btn btn-sm btn-outline-danger ms-2"
                  onClick={() => removeNegative(n.id)}
                >
                  <FaTrash size={13} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
