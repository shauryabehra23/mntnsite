export default function Footer() {
    return(
        <div className='footer-grid'>
            <div className='footer-section' style={{gridArea: 'a'}}>
                <h2 className='footer-logo'>MNTN</h2>
                <p className='footer-text'>Get out there & discover your next slope, mountain & destination!</p>
                <p className='footer-copyright'>Copyright 2023 MNTN, Inc. Terms & Privacy</p>
            </div>
            <div className='footer-section' style={{gridArea: 'b'}}></div>
            <div className='footer-section' style={{gridArea: 'c'}}>
                <h3 className='footer-heading'>More on The Blog</h3>
                <p className='footer-link'>About MNTN</p>
                <p className='footer-link'>Contributors and Writers</p>
                <p className='footer-link'>Write For Us</p>
                <p className='footer-link'>Contact Us</p>
                <p className='footer-link'>Privacy Policy</p>
            </div>
            <div className='footer-section' style={{gridArea: 'd'}}>
                <h3 className='footer-heading'>More on MNTN</h3>
                <p className='footer-link'>The Team</p>
                <p className='footer-link'>Jobs</p>
                <p className='footer-link'>Press</p>
            </div>
        </div>
    );
}
