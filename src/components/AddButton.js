import { Button } from "@material-ui/core";

import Add from '../assets/Add.svg';

const AddButton = ({ text, color, onClick }) => {
  return (
    <Button>
      <img src={Add} alt="React Logo" />
    </Button>
  );
};


export default AddButton;
