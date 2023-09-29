import React, {useEffect, useState} from 'react';
import s from './onePost.module.scss';
import {Link} from "react-router-dom";
import arrowIcon from '../../assets/img/arrow-left.svg';
import like from "../../assets/img/like.svg";
import dislike from "../../assets/img/dislike.svg";
import postImage from "../../assets/img/image.jpg";
import {useParams} from "react-router-dom";
import {getOnePost} from "../../services/postsService";
import {useAppSelector} from "../../hooks/redux";
import {PostType} from "../../types/PostType";


const OnePost = () => {
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    const posts = useAppSelector((state) => state.postReducer.posts)

    const getPost = async () => {
        try{
            const post = await getOnePost(+id);
            const currenPostFromStore = posts.filter(item => item.id === +id)[0];

            setPost({...post, likes: currenPostFromStore.likes, dislikes: currenPostFromStore.dislikes, activeAction: currenPostFromStore.activeAction})

        }catch (e) {
            console.log(e)
        }finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {
        getPost()
    }, [])
    return (
        <div className={s.root}>
            <div className="container">
                <div className={s.linkBlock}>
                    <Link to='/' className={s.link}>
                        <img src={arrowIcon} alt="arrow"/>
                        <div>Вернуться к статьям</div>
                    </Link>
                    <div className={s.likeBtns}>
                        <div className={post.activeAction === 'like' ? s.likeBtn : ''}>
                            <img src={like} alt="like"/>
                            <span>{post.likes}</span>
                        </div>
                        <div className={post.activeAction === 'dislike' ? s.dislikeBtn : ''}>
                            <img src={dislike} alt="like"/>
                            <span>{post.dislikes}</span>
                        </div>
                    </div>
                </div>
                <div className={s.post}>
                    <h1>{post.title}</h1>
                    <div className={s.postWrapper}>
                        <img src={postImage} alt="image"/>
                        <div>{post.body}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnePost;