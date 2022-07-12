import {randomUUID} from 'crypto';
const posts = new Map();

export const save = ({text}) => {
    const post = { id:randomUUID(), text, postedDate: new Date()};
    posts.set(post.id, post);
    return post;
};

export const get = (id) => {
    const post = post.get(id);

    if(!post) {
        throw new Error(`Not found for the ID ${id}`);
    }
    return post;
};

export const getAll = () => {
    return [...posts.values()];
}

export const update = (id, {text}) => {
    if(!posts.has(id)){
        throw new Error(`Not found for the ID ${id}`);
    }
    const post = {id, text, postedDate: new Date()};
    posts.set(post.id, post);
};

export const deletePOst = (id) => {
    if(!posts.has(id)){
        throw new Error(`Not found for the ID ${id}`);
    }
    posts.delete(id);
};

