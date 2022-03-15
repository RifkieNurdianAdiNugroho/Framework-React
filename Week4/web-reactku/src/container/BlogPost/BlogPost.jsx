import React, {Component} from "react";
import './BlogPost.css';


class BlogPost extends Component{
    render() {
        return(
            <div ClassName="psot-artikel">
                <h2>Daftar Artikel</h2>
                <div Classname="artikel">
                    <img src="http://placeimg.com/80/80/tech" alt= "Gambar Thumbnnail Artikel"/>
                </div>
                <div Classname="konten-artikel">
                    <div Classname="judul-artikel"> Judul Artikel</div>
                    <p Classname="isi-artikel">Isi Artikel</p>
                </div>
            </div>
        )
    }
}

export default BlogPost;