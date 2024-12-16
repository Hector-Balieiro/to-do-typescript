import "../index.css";
import { Link, Outlet } from "react-router-dom";
export const App = () => {
  return (
    <div style={{ width: "100%" }} className="image-back">
      <div className="container-fluid borda d-flex justify-content-between mb-3">
          <Link className="fs-4 text-decoration-none cor" to="/home"><p>Home</p></Link>
          <Link className="fs-4 text-decoration-none cor" to="/lista"><p >Lista</p></Link>
        </div>
        <Outlet/>
    </div>
  )
}


