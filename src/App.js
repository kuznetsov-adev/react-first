import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Kotlin', description: 'backend programming language'},
        {id: 2, title: 'Javascript', description: 'frontend - programming language'},
        {id: 3, title: 'Java', description: 'backend - programming language'}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    // const [selectedSort, setSelectedSort] = useState('')
    // const [searchQuery, setSearchQuery] = useState('')

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
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>

            {sortedAndSearchedPosts.length
                ?
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список Javascript постов'}/>
                :
                <h1 style={{textAlign: 'center'}}> Posts not found </h1>
            }

        </div>
    );
}

export default App;
