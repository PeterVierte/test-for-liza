import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {PostType} from "../../types/PostType";


type PostsState = {
    posts: PostType[]
}

const initialState: PostsState = {
    posts: []
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<PostType[]>) => {
            state.posts = action.payload
        },
        addLikeOrDislike: (state, action: PayloadAction<{id: number, actionType: string}>) => {
            state.posts = state.posts.map(post => {
                if(post.id === action.payload.id) {
                    if(action.payload.actionType === post.activeAction) {
                        const currentAction = post.activeAction;
                        let likes, dislikes;
                        if(currentAction === 'like') {
                            likes = post.likes! - 1;
                            dislikes = post.dislikes!;
                        }else {
                            likes = post.likes!;
                            dislikes = post.dislikes! - 1;
                        }
                        return {...post, activeAction: null, likes, dislikes}
                    }else if(action.payload.actionType === 'like') {
                        return {...post, activeAction: action.payload.actionType, likes: post.likes! + 1}
                    }else {
                        return {...post, activeAction: action.payload.actionType, dislikes: post.dislikes! + 1}
                    }
                }

                return post
            })
        }
    },
})

export const { setPosts, addLikeOrDislike } = postsSlice.actions;
export default postsSlice.reducer;