import "./Banner.css"

const Banner = () => {
    return (
        <section className='banner'>
            <div className="banner-container">
                <h1>Suscribe for more updates and Offers</h1>
                <div className="suscribe">
                    <input type="text" placeholder="Your email address" />
                    <button>Suscribe</button>
                </div>
            </div>
        </section>
    )
}

export default Banner
