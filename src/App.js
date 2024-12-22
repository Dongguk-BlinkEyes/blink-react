import { AppRouter } from "./routes/AppRouter";
import "./global.css";
import "./styleguide.css";
import "./App.css"; // App.css 추가

function App() {
    return (
        <div className="app-container">
            <AppRouter /> {/* AppRouter 렌더링 */}
        </div>
    );
}

export default App;
