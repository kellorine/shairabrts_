// src/pages/Board.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaSave, FaStar } from "react-icons/fa";
import PositiveList from "../components/PositiveList";
import NegativeList from "../components/NegativeList";
import Footer from "../components/Footer";

function Board() {
  const [positives, setPositives] = useState([]);
  const [negatives, setNegatives] = useState([]);
  const [posText, setPosText] = useState("");
  const [negText, setNegText] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedPositives = JSON.parse(localStorage.getItem("positives")) || [];
    const savedNegatives = JSON.parse(localStorage.getItem("negatives")) || [];
    setPositives(savedPositives);
    setNegatives(savedNegatives);
  }, []);

  const handleSave = () => {
    localStorage.setItem("positives", JSON.stringify(positives));
    localStorage.setItem("negatives", JSON.stringify(negatives));

    setIsSaved(true);
    setIsChanged(false);

    setTimeout(() => setIsSaved(false), 2000); // reset after 2 seconds
  };

  const addPositive = (e) => {
    e.preventDefault();
    if (!posText.trim()) return;
    const newPositives = [...positives, { id: Date.now(), text: posText }];
    setPositives(newPositives);
    setPosText("");
    setIsChanged(true);
  };

  const addNegative = (e) => {
    e.preventDefault();
    if (!negText.trim()) return;
    const newNegatives = [...negatives, { id: Date.now(), text: negText }];
    setNegatives(newNegatives);
    setNegText("");
    setIsChanged(true);
  };

  const removePositive = (id) => {
    const updated = positives.filter((p) => p.id !== id);
    setPositives(updated);
    localStorage.setItem("positives", JSON.stringify(updated));
    setIsChanged(true);
  };

  const removeNegative = (id) => {
    const updated = negatives.filter((n) => n.id !== id);
    setNegatives(updated);
    localStorage.setItem("negatives", JSON.stringify(updated));
    setIsChanged(true);
  };

  return (
    <div className="container my-5 text-center">
      {/* 🏠 Back to Home Button */}
      <div className="back-home-wrapper">
        <Link
          to="/"
          className="btn"
          style={{
            backgroundColor: "#ffb3d9",
            color: "white",
            borderRadius: "20px",
            padding: "6px 16px",
            fontSize: "0.9rem",
            textDecoration: "none",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#ff99cc")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ffb3d9")}
        >
          🏠 Back to Home
        </Link>
      </div>

      <h2 className="title">For My Bibi Shaira 💖</h2>
      <p className="subtitle">A small garden of love and growth 🌷</p>

      <div className="row g-4 mt-4">
        <PositiveList
          positives={positives}
          posText={posText}
          setPosText={setPosText}
          addPositive={addPositive}
          removePositive={removePositive}
        />
        <NegativeList
          negatives={negatives}
          negText={negText}
          setNegText={setNegText}
          addNegative={addNegative}
          removeNegative={removeNegative}
        />
      </div>

      {/* 💾 Cute Magical Save Button */}
      <div style={{ marginTop: "30px" }}>
        <button
          className={`btn save-btn ${isSaved ? "saved" : ""}`}
          disabled={!isChanged && !isSaved}
          onClick={handleSave}
        >
          {isSaved ? (
            <>
              ✨ Saved! 💖
            </>
          ) : (
            <>
              💾 Save Changes
            </>
          )}
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Board;