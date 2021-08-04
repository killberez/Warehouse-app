import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <Link to="/worker">
        <button
          onClick={() => {
            localStorage.setItem(
              "token",
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTYyNzg5NjU1MX0._B5x0Ut_ovgoEJPI2MatD0GfagNM6G8zzZEVjXZRmIY"
            );
          }}
        >
          Worker
        </button>
      </Link>
      <Link to="/customer">
        <button
          onClick={() => {
            localStorage.setItem(
              "token",
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTYyNzk5ODQwOX0.WP0dT5t2JwCX33HkJyQjAkDGDEgSZy3Ww4w-yw_ynok"
            );
          }}
        >
          Customer
        </button>
      </Link>
    </div>
  );
}
