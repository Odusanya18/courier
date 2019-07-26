import React from 'react';
import {ArrayInput, Create, ImageField, ImageInput, SimpleForm, SimpleFormIterator, TextInput, LongTextInput, Edit, DisabledInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';


import { makeStyles } from '@material-ui/styles';

const addStyles = makeStyles({
    width: {
        width: '100%'
    },
    h5 : {
        fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        width: '100%'
    }
});

const entrypoint = document.getElementById('api-entrypoint').innerText;

let currentIndex = 0;

const upload = (value, previousValue, allValues) => {
    if (value && value.rawFile instanceof File) {
        const body = new FormData();
        body.append('file', value.rawFile);

        const resp = fetch(`${entrypoint}/media_objects`, { body, method: 'POST' })
            .then(response => response.json());

        return resp.then(data => {allValues.products[currentIndex].image = data.id; currentIndex++; return data.id});
    }

    return value.src;
};

const PostTitle = ({ record }) => {
    return <span>{record ? `"${record.title}"` : ''}</span>;
};

const PostCreate = props => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="title" validation={{ required: true }} />
                <LongTextInput source="description" validation={{ required: true }} />
                <RichTextInput source="content" validation={{ required: true }} />
            </SimpleForm>
        </Create>
    )
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="title" validation={{ required: true }} />
            <LongTextInput source="description" validation={{ required: true }} />
            <RichTextInput source="content" validation={{ required: true }} />
        </SimpleForm>
    </Edit>
);

const ProductOrderCreate = props => {
    const classes = addStyles(props);

    return (
        <Create {...props}>
            <SimpleForm>
                <h5 className={classes.h5}>Welcome to our new order form , please read instructions very well before proceeding
                    –	This form is meant for you to copy and paste link from 1688, taobao, tmall etc with full description for us to work your quotation
                    –	Please kindly drop link you know your capacity can pay, don’t drop too many link and later later ask us to adjust because we are working with time..
                    –	We want to reduce the rate of unserious clients, submitting multiple forms, etc.so you are to pay a sum of N3,000 commitment fee before submitting your form, without this payment we will not attend to your form NOTE: THIS MONEY IS REFUNDABLE WHEN YOU PROCEED AND PAY YOUR ORDER you will substrate it when you are to pay for your order and IT NOT REFUNDABLE WHEN YOU FAIL TO PROCEED AND PAY FOR YOUR ORDER.. (click here for payment details)</h5>
                <h5 className={classes.h5}>The bank account name you pay us from must be same as your fullname, third party transfer , paga, sms code transfer not accepted, direct bank payment and mobile transfer only</h5>

                <div>
                    <div className="column" >
                        <TextInput className={classes.width} source="fullname" label="Full Name" />
                        <TextInput className={classes.width} source="phoneNumber" label="Phone Number" />
                    </div>
                    <div className="column">
                        <TextInput className={classes.width} source="email" label="Email" />
                    </div>
                    <div className="column">
                        <TextInput className={classes.width} source="additionalNote" label="Additional Notes" />
                    </div>
                    <div className="column">
                        <ArrayInput source="products">
                            <SimpleFormIterator>
                                <TextInput source="name" />
                                <TextInput source="link" />
                                <ImageInput accept="image/*" multiple={false} source="image" normalize={upload}>
                                    <ImageField source="src"/>
                                </ImageInput>
                            </SimpleFormIterator>
                        </ArrayInput>
                    </div>
                </div>
            </SimpleForm>
        </Create>
    );
};

const ProductOrderEdit = props => {
    const classes = addStyles(props);

    return (
        <Edit {...props}>
            <SimpleForm>
                <h5 className={classes.h5}>Welcome to our new order form , please read instructions very well before proceeding
                    –	This form is meant for you to copy and paste link from 1688, taobao, tmall etc with full description for us to work your quotation
                    –	Please kindly drop link you know your capacity can pay, don’t drop too many link and later later ask us to adjust because we are working with time..
                    –	We want to reduce the rate of unserious clients, submitting multiple forms, etc.so you are to pay a sum of N3,000 commitment fee before submitting your form, without this payment we will not attend to your form NOTE: THIS MONEY IS REFUNDABLE WHEN YOU PROCEED AND PAY YOUR ORDER you will substrate it when you are to pay for your order and IT NOT REFUNDABLE WHEN YOU FAIL TO PROCEED AND PAY FOR YOUR ORDER.. (click here for payment details)</h5>
                <h5 className={classes.h5}>The bank account name you pay us from must be same as your fullname, third party transfer , paga, sms code transfer not accepted, direct bank payment and mobile transfer only</h5>

                <div>
                    <div className="column" >
                        <TextInput className={classes.width} source="fullname" label="Full Name" />
                        <TextInput className={classes.width} source="phoneNumber" label="Phone Number" />
                    </div>
                    <div className="column">
                        <TextInput className={classes.width} source="email" label="Email" />
                    </div>
                    <div className="column">
                        <TextInput className={classes.width} source="additionalNote" label="Additional Notes" />
                    </div>
                    <div className="column">
                        <ArrayInput source="products">
                            <SimpleFormIterator>
                                <TextInput source="name" />
                                <TextInput source="link" />
                                <ImageInput accept="image/*" multiple={false} source="image" normalize={upload}>
                                    <ImageField source="src"/>
                                </ImageInput>
                            </SimpleFormIterator>
                        </ArrayInput>
                    </div>
                </div>
            </SimpleForm>
        </Edit>
    );
};

export const ProductOrders = {
    name: 'product_orders',
    create: ProductOrderCreate,
    edit: ProductOrderEdit
};

export const Posts = {
    name: 'posts',
    create: PostCreate,
    edit: PostEdit
};

export const Pages = {
    name: 'pages',
    create: PostCreate,
    edit: PostEdit
};