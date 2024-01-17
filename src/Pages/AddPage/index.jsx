import React, { useEffect, useState } from 'react'
import "./style.scss"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';

function AddPage() {
  // const navigate=useNavigate();
  const [fetchAdd, setFetchAdd] = useState([])

  useEffect(() => {
    getFetch()
  }, [])

 async  function getFetch() {
    await fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setFetchAdd(data))
  }
   async function handleAdd(val) {
    await fetch("http://localhost:4000/", {
      method: "POST",
      body: JSON.stringify(val),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(x=>{ getFetch()})
  }
  function handleDelete(id) {
    console.log(id);
    fetch("http://localhost:4000/" + id, {
      method: "DELETE",
    }).then((res) => getFetch())

  }
  return (
    <div>
      <Helmet>
        <title>AddPage</title>
      </Helmet>


      <Formik
        initialValues={{ image: '', name: '', description: '' }}
        validationSchema={Yup.object({
          image: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          description: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleAdd(values)
            setSubmitting(false);
          }, 400);
        }}
      >

        <Form>
          <label htmlFor="image"> image</label>
          <Field name="image" type="text" />

          <label htmlFor="name"> Name</label>
          <Field name="name" type="text" />

          <label htmlFor="description">description </label>
          <Field name="description" type="text" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody >
            {fetchAdd.map((x) => (
              <tr key={x._id}>
                <td className='img'> <img src={x.image} alt="" /></td>
                <td>{x.name}</td>
                <td>{x.description} <span><i className="fa-solid fa-trash" onClick={() => handleDelete(x._id)}></i></span></td>
              </tr>
            ))}
          </tbody>

        </table>



      </div>

    </div>
  )
}

export default AddPage