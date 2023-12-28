import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux' /////akhane amader react-redux package ar moddhe theke useSelector Hook take import korechi amader main.jsx ar moddhe theke jei Store take amra golobally set kore diyechi oi Store ar value take access korar jonno and useDispatch hook ta use korechi amader kono action ke dispatch korar jonno

import { fetchPosts } from './postSlice'  ////akhane amader fetchPosts action take import korchi 

function PostsView() {
    const { posts, isLoading, error } = useSelector((state) => state.posts) ////akhane amra useSelector hook ta use kore amader main.jsx ar moddhe theke jei store take globla eeee set kore diyechi oi store ar value take ami akhane access korechi amader state ar moddhe Store ar value gulo ashbe and oi value gulo ar moddhe theke ami posts key ar moddhe theke amader state guloke distructuring kore ber kore niye ashechi { posts, isLoading, error }
    const dispatch = useDispatch() ///useDispatch() hook take dispatch variable ar moddhe rekhe diyechi

    useEffect(() => {
        dispatch(fetchPosts())  ///akhane amader  fetchPosts action ta dispatch hobe
    }, []) //// akhane amra useEffect hook take use korechi and useEffect hook ar moddhe ai fetchPosts action ke dispatch korechi and jokhon amader ai component ar return ta prothom bar render hobe tokhon eee shudhu amader useEffect() hook ta akbar eee call hobe tar pore amader ai component ar return ta jotobar eee render hok ne keno amader useEffect hook ta rr call hobe na karon ami amader useEffect hook ar moddhe anonimous function ar pore dependency add kore diyechi [] tai amader ai useEffect() hook ta akbar ee call hobe jokhon amader ai component ar return ta prothom bar render hobe shudhu tokhon eee amader useEffect hook ta call hobe 1 bar eee

    return (
        <div>
            {isLoading && <h3>Loading...</h3>}  {/* jodi amader isLoading state ar value ta true hoy tahole amader "&&" and operator ar porer pashe jabe and aita print korbe <h3>Loading...</h3>  */}
            {error && <h3>{error}</h3>}

            {posts &&  //// jodi amader posts state ar moddhe kono data thake taholei  amader "&&" and operator ar porer pashe jabe and amder mapping ar kaj korbe...jadi posts state ar moddhe kono data na thake mane posts state ta jodi Empty hoy tahole amader "&&" and operator ar porer pashe jabe na and amader mapping ar kaj oo korbe na
                posts.map((post) => {
                    return (
                        <section className='s'  key={post.id}>  {/* amader protita post ke unique korar jonno amra key ar moddhe post.id diye unique kore diyechi amader protita post ke */}
                            <article className='a'>
                                <h5>{post.title}</h5>
                                <p>{post.body}</p>
                            </article>
                        </section>
                    )
                })}
        </div>
    )
}

export default PostsView
