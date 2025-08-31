export default function Mainpart(props) {
    return (
        <main className="main-content">
            <div className={`content-section ${props.int % 2 === 0 ? 'even' : 'odd'}`}>
                {props.int % 2 === 0 ? (
                    <div className="content-flex">
                        <img
                            src={props.pic}
                            alt=""
                            className="content-image content-image-left"
                        />
                        <div className="text-content">
                            <div className="content-wrapper">
                                <span className="section-number">{props.int.toString().padStart(2, '0')}</span>
                                <h4 className="section-subtitle">{props.t1}</h4>
                                <h2 className="section-title">{props.t2}</h2>
                                <p className="section-text">{props.t3}</p>
                                <h4 className="read-more">read more →</h4>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="content-flex">
                        <div className="text-content">
                            <div className="content-wrapper">
                                <span className="section-number">{props.int.toString().padStart(2, '0')}</span>
                                <h4 className="section-subtitle">{props.t1}</h4>
                                <h2 className="section-title">{props.t2}</h2>
                                <p className="section-text">{props.t3}</p>
                                <h4 className="read-more">read more →</h4>
                            </div>
                        </div>
                        <img
                            src={props.pic}
                            alt=""
                            className="content-image content-image-right"
                        />
                    </div>
                )}
            </div>
        </main>
    )
}
