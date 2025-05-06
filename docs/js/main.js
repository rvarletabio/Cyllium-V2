/* --------- CONFIG: elige endpoint local vs. Render --------- */
const API =
  location.hostname === "127.0.0.1" || location.hostname === "localhost"
    ? "http://127.0.0.1:5000/predict"                 // cuando trabajas en tu PC
    : "https://cyllium-backend.onrender.com/predict"; // cuando la web está online
/* ----------------------------------------------------------- */
