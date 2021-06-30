import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = (e) =>{
        console.log('Clicked', e)
    }
    return (
        <div>
            <header className = 'header'>
                <h1>{title}</h1>
                <Button color = 'green' text = 'Add' onClick = {onClick}/>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

//CSS styling

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }
export default Header
