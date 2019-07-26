import React from 'react';
import ReactDOM from 'react-dom';
import { HydraAdmin, hydraClient, fetchHydra as baseFetchHydra  } from '@api-platform/admin';
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';
import { ProductOrders, Posts, Pages } from './productOrder'
import {replaceResources} from "@api-platform/admin/src/docsUtils";
import authProvider from './authProvider';
import { Route, Redirect } from 'react-router-dom';


const fetchHeaders = {'Authorization': `Bearer ${localStorage.getItem('token')}`};
const fetchHydra = (url, options = {}) => baseFetchHydra(url, {
    ...options,
    headers: new Headers(fetchHeaders),
});
const dataProvider = api => hydraClient(api, fetchHydra);
const apiDocumentationParser = entrypoint =>
    parseHydraDocumentation(entrypoint, {
        headers: new Headers(fetchHeaders),
        }).then(({ api }) => {
        replaceResources(api.resources, [ProductOrders, Posts, Pages]);
        return { api };
    }).then(
        ({ api }) => ({ api }),
        result => {
            const { api, status } = result;
            if (status === 401) {
                return Promise.resolve({
                    api,
                    status,
                    customRoutes: [
                        <Route path="/" render={() => <Redirect to="/login" />} />,
                    ],
                });
            }
            return Promise.resolve(result);
        }
    );

const entrypoint = document.getElementById('api-entrypoint').innerText;

ReactDOM.render(<HydraAdmin apiDocumentationParser={apiDocumentationParser} dataProvider={dataProvider} authProvider={authProvider} entrypoint={entrypoint}/>, document.getElementById('api-platform-admin'));
