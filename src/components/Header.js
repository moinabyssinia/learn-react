import PropTypes from 'prop-types' // use impt as a shortfuct to import props
import Button from './Button';

const Header = ({ title }) => { // destructured the props object
    
    const onClick = () => {
        console.log('click');
    }

    return (
        <header className = 'header'>
            {/* used double brackets to use inline styles */}
            <h1>{ title }</h1>
            <Button color = 'green' text = "Add" onClick = { onClick }/>

        </header>
    )
}


/* make a default prop as a function */
Header.defaultProps = {
    title : "MoinAbyssinia",
  }


/* setting the prop type */
Header.propTypes = {
    title: PropTypes.string.isRequired,
}


/* alternative styling 
   pass this in a single curly style above in the style
   style = {headingStyle}
*/
// const headingStyle = {
//     color: 'red', backgroundColor: 'cyan'
// }

export default Header
