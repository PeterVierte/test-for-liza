import {$axios} from "../http";
import {PostType} from "../types/PostType";

type PostsResponse = {
    data: PostType[]
}

type OnePostResponse = {
    data: PostType
}
export const getAllPosts = async () => {
    try {
        const response: PostsResponse = await $axios.get('/posts');
        const editedPosts: PostType[] = response.data.map((post) => {
            const likes = Math.round(Math.random() * 51);
            const dislikes = Math.round(Math.random() * 51);

            return {
                ...post,
                likes,
                dislikes,
                activeAction: null
            }
        })
        return editedPosts;
    }catch (e) {
        console.log(e)
    }
}

export const getOnePost = async (id: number) => {
    try {
        const response: OnePostResponse = await $axios.get(`/posts/${id}`);
        return response.data;
    }catch (e) {
        console.log(e)
    }
}