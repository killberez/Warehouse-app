import { BrowserRouter as Router, Link } from "react-router-dom";

function mainPage() {
  return (
    <div>
      <div>
        <button>
          <Link to="/worker">Worker</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to="/customer">Customer</Link>
        </button>
      </div>
    </div>
  );
}

export default mainPage;
