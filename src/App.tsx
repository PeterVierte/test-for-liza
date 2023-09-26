import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='post/:id' element={<PostPage/>}/>
        </Routes>
    );
}

export default App;
