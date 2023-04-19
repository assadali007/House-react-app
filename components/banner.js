
import styles from './banner.module.css';

const subtitleStyle = {
    fontSize : "x-large",
    fontStyle : "italic",
    color : "#6610f2"
};

const Banner = (props) => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="GloboLogo.png" alt="logo" className={styles.logo} />
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>
                {props.children}
            </div>
        </header>
    )
}
export default Banner;


