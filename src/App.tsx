import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import {useEffect, useState} from "react";
import {getAllPosts} from "./services/postsService";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {setPosts} from "./store/reducers/PostsSlice";

function App() {
    const [isAppLoading, setIsAppLoading] = useState(true);
    const dispatch = useAppDispatch();
    const getPosts = async () => {
        try{
            const posts = await getAllPosts();
            if(posts) {
                dispatch(setPosts(posts));
            }
        }catch (e) {
            console.log(e)
        }finally {
            setIsAppLoading(false);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    if(isAppLoading) {
        return <h1>Загрузка...</h1>
    }


    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='post/:id' element={<PostPage/>}/>
        </Routes>
    );
}

export default App;
