import React from "react"
import arjuno from '../images/arjuno.jpg';
import rinjani from '../images/rinjani.jpg';
import a from '../images/a.jpg';
import banyak from '../images/banyak.jpg';
import k from '../images/k.jpg';
import p from '../images/p.JPG';
export default class Contact extends React.Component{
    render(){
        return(
            <div>
                <div className="font-sans py-8 pt-4">
                    <h1 className="text-5xl font-blod leading-none text-cyan-500 font-bold text-center">
                    About Us
                    </h1>
                    <p className="leading-relaxed mt-6 text-gray-600 text-center">
                <strong> telah membantu 1000+ pendaki untuk mencapai gunung yang mereka inginkan. </strong>
            </p>
        </div>
        
        <div className="columns-3 pl-4 pr-4 pt-4 ">
            <img className="w-full aspect-video p-1 bg-teal-500 border rounded max-w-sm" src={rinjani} />
            <img className="w-full aspect-video p-1 bg-teal-500 border rounded max-w-sm" src= {arjuno} />
            <img className="w-full aspect-video p-1 bg-teal-500 border rounded max-w-sm" src= {a} />
        </div>
            <div className="columns-3 pl-4 pr-4 pt-4 ">
            <img className="w-full aspect-video p-1 bg-teal-500 border rounded max-w-sm" src={banyak} />
            <img className="w-full aspect-video p-1 bg-teal-500 border rounded max-w-sm" src= {k} />
            <img className="w-full aspect-video p-1 bg-teal-500 border rounded max-w-sm" src= {p} />
        </div>
</div>
        )
    }
}
