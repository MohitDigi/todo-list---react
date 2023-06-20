import { Button, Form, Input } from "antd";
import React from "react";
import Navbar from "./Navbar";


const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const DetailForm = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <>
    <Navbar/>
      <div className="container my-5">
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
          <MyFormItemGroup prefix={["user"]}>
            <MyFormItemGroup prefix={["name"]}>
              <MyFormItem name="Title" label="Title">
                <Input />
              </MyFormItem>
              <MyFormItem name="Description" label="Description">
                <Input />
              </MyFormItem>
            </MyFormItemGroup>

            <div class="dropdown my-3">
              <button
                class="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Status
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Pending
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    In Process
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Complete
                  </a>
                </li>
              </ul>
            </div>
          </MyFormItemGroup>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default DetailForm;
