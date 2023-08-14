import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { IBook } from "./BookMode";
import { addBook } from "./book.service";
import { IUser } from "../User/UserMode";
import { getAllUsers } from "../User/user.service";

const BookSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    author: Yup.string().required("Required"),
    publicationYear: Yup.string(),
});

const Book: React.FC = () => {
    const initalValues: IBook = {
        title: "",
        author: "",
        publicationYear: "",
    };

    const navigate = useNavigate();

    const [users, setUsers] = useState<IUser[]>();

    useEffect(() => {
        const callGetUsers = async () => {
            const response = await getAllUsers();
            setUsers(response.data);
        };
        callGetUsers();
    }, []);

    const handleSubmit = async (values: IBook) => {
        try {
            await addBook(values);
            navigate("/books");
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Formik
            initialValues={initalValues}
            validationSchema={BookSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <Field name="title" type="text" placeholder="title" />
                        {errors.title && touched.title ? (
                            <div>{errors.title}</div>
                        ) : null}
                    </div>
                    <div>
                        <div>
                            <Field name="author" as="select">
                                <option value="">Select User</option>
                                {users && users.length > 0
                                    ? users.map((user) => (
                                          <option value={user.name}>
                                              {user.name}
                                          </option>
                                      ))
                                    : []}
                            </Field>
                        </div>
                        {errors.author && touched.author ? (
                            <div>{errors.author}</div>
                        ) : null}
                    </div>
                    <div>
                        <Field
                            name="publicationYear"
                            type="year"
                            placeholder="Publication Year"
                        />
                    </div>
                    <div>
                        <button type="submit">Add Book</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Book;
