import React from 'react'

const Carousel = () => {
    return (
    <><div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
                <img src="https://disk.mediaindonesia.com/files/news/2022/12/30/WhatsApp%20Image%202022-12-22%20at%2017.07.10%20(1).jpg" className="w-full" />
            </div>
            <div id="item2" className="carousel-item w-full">
                <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-full">
                <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-full">
                <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
            </div>
        </div><div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div></>
    )
}

export default Carousel