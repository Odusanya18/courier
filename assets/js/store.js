import parseHydraDocumentation from "@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation";
import {ImageField, ImageInput} from "ra-ui-materialui";
import React from "react";

const orderApiDocumentationParser = entrypoint => parseHydraDocumentation(entrypoint)
    .then( ({ api }) => {
        const products = api.resources.find(({ name }) => 'products' === name);
        if (products){
            const image = products.fields.find(({ name }) => 'image' === name);

            image.input = props => (
                <ImageInput {...props} source="image" />
            );
            image.denormalizeData = value => ({
                src: value
            });
            image.field = props => (
                <ImageField {...props} source={`${image.name}.src`} />
            );
            image.input = props => (
                <ImageInput accept="image/*" {...props} key={image.name} multiple={false} source={image.name}>
                    <ImageField source="src"/>
                </ImageInput>
            );
            image.normalizeData = value => {
                if (value && value.rawFile instanceof File) {
                    const body = new FormData();
                    body.append('file', value.rawFile);

                    return fetch(`${entrypoint}/images/upload`, { body, method: 'POST' })
                        .then(response => response.json());
                }
                return value.src;
            };
        }

        return { api };
    })
;


