import React, { useState, useCallback, useEffect } from "react";
import {
  MDBIcon,
  MDBInputGroup,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import ListGroupItem from "./ListGroupItem";
import TextInput from "./TextInput";
import Dropdown from "./Dropdown";

const ListGroup = () => {
  const ex = Object.keys(localStorage).map((key) =>
    JSON.parse(localStorage.getItem(key))
  );
  console.log(ex);
  const [examples, setExamples] = useState(ex);
  const [tmp, setTmp] = useState(examples);
  const [filterType, setFilterType] = useState("All");
  const [searchText, setSearchText] = useState("");

  const getInput = useCallback(
    (input) => {
      let newData = {
        id: (Math.random() + 1).toString(36).substring(2),
        content: input,
        completed: false,
        deleted: false,
      };
      setExamples([newData, ...examples]);
      console.log(input);
      localStorage.setItem(newData.id, JSON.stringify(newData));
      setFilterType("All");
    },
    [examples]
  );

  const updateData = useCallback(
    (data) => {
      setExamples(examples.map((ex) => (ex.id === data.id ? data : ex)));
    },
    [examples]
  );

  const deleteData = useCallback(
    (data) => {
      setExamples(examples.filter((ex) => ex !== data));
      localStorage.removeItem(data.id);
    },
    [examples]
  );

  const getFilter = useCallback(
    (filter) => {
      setFilterType(filter);
      switch (filter) {
        case "Completed":
          setTmp(examples.filter((ex) => ex.completed === true));
          break;
        case "In progress":
          setTmp(examples.filter((ex) => ex.completed !== true));
          break;
        default:
          setTmp(examples);
          setFilterType("All");
          break;
      }
    },
    [examples]
  );

  const searchHandle = () => {
    setTmp(
      examples.filter((ex) =>
        new RegExp("^.*" + searchText + ".*$", "im").test(ex.content)
      )
    );
  };

  useEffect(() => {
    setTmp(examples);
    getFilter(filterType);
  }, [examples, filterType, getFilter]);

  return (
    <MDBListGroup className="" light>
      <TextInput getInput={getInput} />
      {tmp.map((e) => (
        <ListGroupItem
          data={e}
          key={e.id}
          updateData={updateData}
          deleteData={deleteData}
        />
      ))}
      <MDBListGroupItem
        noBorders
        className="d-flex position-sticky bottom-0"
        style={{ zIndex: 3 }}
      >
        <MDBInputGroup
          textBefore={[
            <Dropdown getFilter={getFilter} />,
            <MDBIcon fas icon="search" />,
          ]}
        >
          <input
            type="text"
            className="form-control"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? searchHandle() : null)}
          />
        </MDBInputGroup>
      </MDBListGroupItem>
    </MDBListGroup>
  );
};

export default ListGroup;
