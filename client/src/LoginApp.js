import { Route } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    return (
        <div>
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </div>
    );
}

export default App;