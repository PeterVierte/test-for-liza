export type PostType = {
    id: number,
    title: string,
    body: string,
    likes?: number,
    dislikes?: number,
    activeAction?: string | null;
}