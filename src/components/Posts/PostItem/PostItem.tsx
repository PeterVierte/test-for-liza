import s from './postItem.module.scss';
import {PostType} from "../../../types/PostType";
import image from '../../../assets/img/image.jpg';
import like from '../../../assets/img/like.svg';
import dislike from '../../../assets/img/dislike.svg';
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/redux";
import {addLikeOrDislike} from "../../../store/reducers/PostsSlice";;

type PostItemProps = {
    postInfo: PostType,
    isFirst: boolean
}
const PostItem = ({postInfo, isFirst}: PostItemProps) => {
    const dispatch = useAppDispatch();

    const onClickBtn = (id: number, action: string) => {
        dispatch(addLikeOrDislike({id, actionType: action}))
    }
    return (
        <>
            {isFirst ? (
                <div className={s.firstItem}>
                    <img src={image} alt="image"/>
                    <div className={s.info}>
                        <div className={s.title}>
                            <h1>{postInfo.title}</h1>
                            <div className={s.likeBtns}>
                                <div>
                                    <img src={like} alt="like"/>
                                    <span>{postInfo.likes}</span>
                                </div>
                                <div>
                                    <img src={dislike} alt="like"/>
                                    <span>{postInfo.dislikes}</span>
                                </div>
                            </div>
                        </div>
                        <div className={s.text}>{postInfo.body}</div>
                        <div className={s.btnWrapper}>
                            <Link to={`post/${postInfo.id}`} className='link'>
                                <button className={s.btn}>Читать далее</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={s.item}>
                    <img src={image} alt="image"/>
                    <div className={s.itemInfo}>
                        <div className={s.itemTitle}>
                            <h1>{postInfo.title}</h1>
                        </div>
                        <div className={s.itemBottom}>
                            <div className={s.likeBtns}>
                                <div onClick={() => onClickBtn(postInfo.id, 'like')}>
                                    <img className={postInfo.activeAction === 'like' ? s.likeBtn: ''} src={like} alt="like"/>
                                    <span>{postInfo.likes}</span>
                                </div>
                                <div onClick={() => onClickBtn(postInfo.id, 'dislike')}>
                                    <img className={postInfo.activeAction === 'dislike' ? s.dislikeBtn: ''} src={dislike} alt="like"/>
                                    <span>{postInfo.dislikes}</span>
                                </div>
                            </div>
                            <Link to={`post/${postInfo.id}`} className='link'>
                                <button className={s.btn}>Читать далее</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PostItem;