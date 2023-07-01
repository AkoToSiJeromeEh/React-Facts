import '../style/Main-Content-Style.css';
import '../style/general.css';
import PropTypes from 'prop-types';
function MainContent (props) {

    return(
        <main className= {props.isDark ? 'Main-container darken'  : 'Main-container'}>
            <div className="Main-Contents">
                <div className='Contents-1'>
                    <h2>
                        Fun Facts about React
                    </h2>
                </div>
                <div className='Contents-2'>
                    <ul>
                        <li><i className="fa-solid fa-circle fa-xs"></i> Was first released in 2013</li>
                        <li><i className="fa-solid fa-circle fa-xs"></i> Was originally created by Jordan Walke</li>
                        <li><i className="fa-solid fa-circle fa-xs"></i> Has well over 100k stars on Github</li>
                        <li><i className="fa-solid fa-circle fa-xs"></i> Is Maintained by Facebook</li>
                        <li> <i className="fa-solid fa-circle fa-xs"></i> Powers thousands of enterprise apps , including mobile apps</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}
export default MainContent;
MainContent.propTypes = {
    isDark: PropTypes.bool,
  };