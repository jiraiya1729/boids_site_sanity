// import { blog } from "./blog";
// import { project } from "./project";
// import  categories  from './categories';

// import customImage from './components/customImage';
// // import richText from './components/richText';
// import customCode from './components/customCode';
// import normalText from './components/normalText';
// // import codeInput from "@sanity/code-input";

// new edited
/* eslint-disable */


// import document schemas
import blog from './documents/blog';
import category from './documents/category';
import author from './documents/author';
import project from './documents/project';
// import featured from './document/featured';

// import object
import richText from './objects/richText';
import normalText from './objects/normalText';
import customImage from './objects/customImage';
import customCode from './objects/customCode';

export const schemaTypes = [
    // // documents
    // categories,
    // blog,
    // project,

    // // objects
    // customImage,
    // customCode,
    // normalText,

    // new
    // document schemas
    blog,
    category,
    author,
    project,
    // featured,

    // object schemas
    normalText,
    richText,
    customImage,
    customCode,

]
