import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const AddedProducts = () => {
    const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState("");
  const handleChange = (e) => {
    setCategoryId(e.target.value);
    console.log(e.target.value);
  };
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.img.value;
    const originalPrice = form.originalPrice.value;
    const resalePrice = form.resalePrice.value;
    const usedYears = form.yearsOfUse.value;
    const location = form.location.value;
    const condition = form.group1.value;
    const status = form.status.value;
    if (categoryId === "") {
      alert("Please chose a category!");
      return;
    }

    const product = {
      category_id: categoryId,
      name,
      img_url: image,
      condition,
      time: new Date(),
      seller_email: user.email,
      seller_name: user.displayName,
      location: location,
      resale_price: resalePrice,
      original_price: originalPrice,
      years_of_use: usedYears,
      status,
    };
    console.log(product);
    fetch("http://localhost:5000/allbooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
        //   navigate(`/dashboard/myproudct/${user?.email}`);
          // toast("Product Added Successfully");
          alert("added");
          e.target.reset();
        }
      });
  };
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
    return (
        <Container>
      {/* <ToastContainer /> */}
      <h1 className="fw-bold text-black text-center py-4">Add New Product</h1>
      <Row>
        <Col md={10} lg={7} className="mx-auto my-3">
          <Form onSubmit={handleAddProduct}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-black">Product Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Product Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-black"> Original Price:</Form.Label>
              <Form.Control
                type="text"
                name="originalPrice"
                placeholder="Original Price"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-black"> Resale Price:</Form.Label>
              <Form.Control
                type="text"
                name="resalePrice"
                placeholder="Resale Price"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-black">Image Url:</Form.Label>
              <Form.Control
                type="text"
                name="img"
                placeholder="Enter Image Url:"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-black">Years of Use:</Form.Label>
              <Form.Control
                type="text"
                name="yearsOfUse"
                placeholder="Years of Use"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-black">Location:</Form.Label>
              <Form.Control
                type="text"
                name="location"
                placeholder="location"
                required
              />
            </Form.Group>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                Condition:<br></br>
                <Form.Check
                  inline
                  label="excellent"
                  name="group1"
                  value="excellent"
                  type={type}
                  id={`inline-${type}-1`}
                  required
                />
                <Form.Check
                  inline
                  label="good"
                  name="group1"
                  value="good"
                  type={type}
                  id={`inline-${type}-2`}
                  required
                />
                <Form.Check
                  inline
                  label="fair"
                  name="group1"
                  value="fair"
                  type={type}
                  id={`inline-${type}-3`}
                  required
                />
              </div>
            ))}
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                Status:<br></br>
                <Form.Check
                  type={type}
                  name="status"
                  value="available"
                  id={`inline-${type}-4`}
                  label="In Stock"
                  required
                />
                <Form.Check
                  type={type}
                  name="status"
                  value="sold"
                  id={`inline-${type}-5`}
                  label="Stock Out"
                  required
                />
              </div>
            ))}

            <label>Choose Category: </label>
            <br></br>
            <select onChange={handleChange} required>
              <option value="Select an Option" selected disabled hidden>
                Select an Option
              </option>
              {data.map((d) => (
                <option key={d._id} value={d._id}>
                  {d.name}
                </option>
              ))}
            </select>
            <br></br>
            <Button className="my-3" variant="primary" type="submit">
              submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    );
};

export default AddedProducts;