import React from "react"
import kontak from '../images/kontak.svg';

export default class About extends React.Component{
    render(){
        return(
            <div>
               <div className="flex items-center justify-between px-10 py-12 font-sans ">
                    <div className="w-1/2">
                        <h1 className="text-6xl font-blod leading-none text-cyan-500 font-bold">
                        Contact Us
                        </h1>
                        <p className="leading-relaxed mt-6 text-gray-600">
                        Anda dapat menghubungi kami memalui kontak dibawah
                        </p>
                        <div className ="leading-relaxed mt-6 text-gray-600">
                        <div className="flex items-center py-2">
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/whatsapp.png" />  +62 853-3493-0488
                        </div>
                        <div className="flex items-center py-2">
                            <img src="https://img.icons8.com/windows/32/000000/instagram-new.png" /> @hisy.indonesia
                        </div>
                        <div className="flex items-center py-2">
                            <img src="https://img.icons8.com/windows/32/000000/email-open.png" /> hisyindonesia@gmail.com
                        </div>
                        <div className="flex items-center py-2">
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/address.png" /> Mojokerto, East Java
                        </div>
                </div>
                </div>
                    <div className="w-1/2">
                        <img src={kontak} className="App-kontak" alt="kontak" />
                    </div>
            </div>
            </div>

        )
    }
}