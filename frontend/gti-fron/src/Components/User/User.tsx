import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { IUser } from "./UserMode";
import { addUser } from "./user.service";
import { useNavigate } from "react-router-dom";

const UserSchema = Yup.object().shape({
    emailId: Yup.string().email().required("Required"),
    name: Yup.string().required("Required"),
    gender: Yup.string(),
    state: Yup.string(),
});

const User: React.FC = () => {
    const [image, setImage] = useState(null);
    const initalValues: IUser = {
        name: "",
        emailId: "",
        gender: "Male",
        state: "Active",
    };

    const navigate = useNavigate();

    const handleSubmit = async (values: IUser) => {
        try {
            const formData = new FormData();
            if (image) {
                formData.append("image", image);
            }
            formData.append("userDetails", JSON.stringify(values));
            await addUser(formData);
            navigate("/books");
        } catch (error) {
            alert(error);
        }
    };

    const handleOnFileChange = (ev: {
        target: { files: React.SetStateAction<null>[] };
    }) => {
        setImage(ev.target.files[0]);
    };

    return (
        <Formik
            initialValues={initalValues}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <Field name="name" type="text" placeholder="name" />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                    </div>
                    <div>
                        <Field name="emailId" type="text" placeholder="email" />
                        {errors.emailId && touched.emailId ? (
                            <div>{errors.emailId}</div>
                        ) : null}
                    </div>
                    <div>
                        <label>
                            <Field type="radio" name="gender" value="Male" />
                            Male
                        </label>
                        <label>
                            <Field type="radio" name="gender" value="Female" />
                            Female
                        </label>
                    </div>
                    <div>
                        <Field name="state" as="select">
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </Field>
                    </div>
                    <div>
                        <Field
                            onChange={handleOnFileChange}
                            name="image"
                            type="file"
                        />
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default User;
