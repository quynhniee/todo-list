import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
} from "mdb-react-ui-kit";
import React from "react";

const Dropdown = ({ getFilter }) => {
  const filterHandle = (e) => {
    getFilter(e.target.innerText);
    console.log(e.target);
  };
  return (
    <MDBDropdown>
      <MDBDropdownToggle color="none" tag="a">
        <MDBIcon icon="filter" />
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link onClick={filterHandle}>
          All
        </MDBDropdownItem>
        <MDBDropdownItem link onClick={filterHandle}>
          Completed
        </MDBDropdownItem>
        <MDBDropdownItem link onClick={filterHandle}>
          In progress
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Dropdown;
