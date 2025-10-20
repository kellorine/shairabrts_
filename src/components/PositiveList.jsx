// src/components/PositiveList.jsx
import { FaTrash } from "react-icons/fa";

export default function PositiveList({
  positives,
  posText,
  setPosText,
  addPositive,
  removePositive,
}) {
  return (
    <div className="col-md-6">
      <div className="card sweet-card">
        <div className="card-body">
          <h4 className="section-title text-pink">Things I Love About You 💕</h4>

          <form onSubmit={addPositive} className="d-flex gap-2 mt-3 mb-3">
            <input
              className="form-control"
              placeholder="Write something lovely..."
              value={posText}
              onChange={(e) => setPosText(e.target.value)}
            />
            <button className="btn btn-pink" type="submit">
              Add
            </button>
          </form>

          <ul className="list-group list-unstyled">
            {positives.length === 0 && (
              <li className="text-muted small">No notes yet 💗</li>
            )}
            {positives.map((p) => (
              <li key={p.id} className="list-item fade-in">
                🌸 {p.text}
                <button
                  className="btn btn-sm btn-outline-danger ms-2"
                  onClick={() => removePositive(p.id)}
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
