import React, { useState, useEffect } from "react";
import { MDBListGroupItem, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const ListGroupItem = ({ data, updateData, deleteData }) => {
  const [newData, setNewData] = useState(data);
  const checkHandle = () => {
    setNewData({ ...newData, completed: !newData.completed });
    updateData({ ...newData, completed: !newData.completed });
  };
  const [isHovering, setIsHovering] = useState(false);
  const handleOnMouseOver = () => {
    setIsHovering(true);
  };
  const handleOonMouseOut = () => {
    setIsHovering(false);
  };
  const deleteHandle = () => {
    deleteData(newData);
  };
  useEffect(() => {
    localStorage.setItem(newData.id, JSON.stringify(newData));
  }, [newData]);

  return (
    <MDBListGroupItem
      tag="button"
      action
      type="button"
      color={newData.completed ? "success" : ""}
      className="px-3 d-flex justify-content-between align-items-center"
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOonMouseOut}
    >
      <span
        className={
          newData.completed
            ? "text-break text-decoration-line-through"
            : "text-break"
        }
      >
        {newData.content}
      </span>
      <div>
        {!(isHovering && !newData.completed) ? null : (
          <MDBBtn
            tag="a"
            color="none"
            rippleColor="success"
            onClick={checkHandle}
            className="mx-2"
          >
            <MDBIcon icon="check" color="success" size="md" />
          </MDBBtn>
        )}
        {isHovering && (
          <MDBBtn
            tag="a"
            color="none"
            rippleColor="danger"
            onClick={deleteHandle}
            className="mx-2"
          >
            <MDBIcon icon="times" color="danger" />
          </MDBBtn>
        )}
      </div>
    </MDBListGroupItem>
  );
};

export default ListGroupItem;
