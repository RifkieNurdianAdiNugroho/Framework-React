import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/Blogpost/Post";

class BlogPost extends Component{
    // render() {
    //     return(
    //         <div className="post-Artikel">
    //             <h2>Blog Artikel</h2>
    //             <div className="artikel">
    //                 <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel"/>
    //             </div>
    //             <div className="konten-artikel">
    //                 <div className="judul-artikel">Judul Artikel</div>
    //                 <p className="isi-Artikel">Isi Artikel</p>
    //             </div>
    //         </div>
            
    //     )
    // }

    state = {
        listArtikel:[]
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI =>{
            this.setState({
                listArtikel:jsonHasilAmbilDariAPI
            })
        })
    }

    render() {
        return (
            // <div class="post-artikel">
            //     <h2>Daftar Artikel</h2>
            //     <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/>
            // </div>
            
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel =>{
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;