export default function Mainpart(props) {
    return (
        <main className="main-content">
            <div className={`content-section ${props.int % 2 === 0 ? 'even' : 'odd'}`}>
                <div className="section-container">
                    <div className={`image-container ${props.int % 2 === 1 ? 'image-right' : 'image-left'}`}>
                        <img
                            src={props.pic}
                            alt=""
                            className="content-image"
                        />
                    </div>
                    
                    <div className={`text-container ${props.int % 2 === 1 ? 'text-left' : 'text-right'}`}>
                        <div className="content-wrapper">
                            <span className="section-number">{props.int.toString().padStart(2, '0')}</span>
                            <div className="text-content-inner">
                                <h4 className="section-subtitle">{props.t1}</h4>
                                <h2 className="section-title">{props.t2}</h2>
                                <p className="section-text">{props.t3}</p>
                                <h4 className="read-more">read more →</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
