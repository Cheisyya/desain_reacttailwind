import React from "react"
import home from '../images/home.svg';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="flex items-center justify-between px-8 py-18 font-sans ">
                    <div className="w-1/3">
                        <h1 className="text-6xl font-blod leading-none text-cyan-500 font-bold">
                            Hiking Easy
                        </h1>
                        <p className="leading-relaxed mt-6 text-gray-600">
                        Selama pendami banyak kegiatan yang dibatasi, termasuk mendaki. 
                        Dengan <strong> Hiking Easy </strong> kami membantu pendakian anda dengan mudah.
                        Apakah anda berniat untuk mendaki dalam waktu dekat?
                        </p>
                        <a href="#" className="border-2 border-cyan-500 text-gray-700 rounded-full py-1 px-8 inline-block mt-8">
                        Pendaftaran </a>
                    </div>
                        <div className="w-1/2 py-10">
                            <img src={home} className="App-home" alt="home" />
                        </div>
                    </div>
            </div>
        )
    }
}
