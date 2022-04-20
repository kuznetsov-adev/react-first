import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import CustomModal from "./components/UI/modal/CustomModal";
import CustomButton from "./components/UI/button/CustomButton";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Kotlin', description: 'backend programming language'},
        {id: 2, title: 'Javascript', description: 'frontend - programming language'},
        {id: 3, title: 'Java', description: 'backend - programming language'}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort.toLowerCase()].localeCompare(b[filter.sort.toLowerCase()]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModal(false)
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <CustomButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Create post
            </CustomButton>
            <CustomModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </CustomModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts about programming language"/>
        </div>
    );
}

export default App;
