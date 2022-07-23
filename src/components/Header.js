import PropTypes from "prop-types";
import AddButton from './AddButton'

const Header = (props) => {
    const onClick = () => {
        console.log('click')
    }
  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <AddButton  onClick={onClick} color='green' text='Add List!'/>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
