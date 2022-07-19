
import Head from 'next/head'
import { PostCard, Categories, PostWidgets } from '../components';
import { getPosts } from '../servises';
import {FeaturedPosts} from '../sections';

import Image from 'next/image'


export default function Home ({ posts } ){                 {/*improvised*/}
  return (
    <div className="container px-10 mx-auto mb-8 ">
      <Head>
        <title>Souf Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
         <div className="col-span-1 lg:col-span-8">
           {posts.map((post) => <PostCard post={post.node} key={post.title}/>)}  {/* it calls the title from PostCard */}
          
         </div>
         <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
             <PostWidgets/>
             <Categories/>
            </div>
         </div>


      </div>
     
      
    </div>
  )
}
export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}