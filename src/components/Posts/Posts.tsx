import s from './posts.module.scss';
import PostItem from "./PostItem/PostItem";
import {useAppSelector} from '../../hooks/redux';



const Posts = () => {
    const posts = useAppSelector((state) => state.postReducer.posts);

    return (
        <div className={s.posts}>
            {posts.map((post, index) => {
                return <PostItem isFirst={index === 0} key={post.id} postInfo={post}/>
            })}
        </div>
    );
};

export default Posts;