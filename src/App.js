import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import CustomSelect from "./components/UI/select/CustomSelect";
import CustomInput from "./components/UI/input/CustomInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'A_Javascript', description: 'F_Javascript - programming language'},
        {id: 2, title: 'B_Javascript 2', description: 'E_Javascript - programming language'},
        {id: 3, title: 'C_Javascript 3', description: 'D_Javascript - programming language'}
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts])

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    function sortPosts(sort) {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <CustomInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search..."
            />
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <CustomSelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Sorting by"
                    options={[
                        {value: 'title', name: 'By name'},
                        {value: 'description', name: 'By description'}
                    ]}
                />
            </div>

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
