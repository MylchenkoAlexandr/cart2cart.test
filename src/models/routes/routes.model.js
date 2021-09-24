import * as Pages from "../constants/pages";
import PagesModel from "./pages.model";

const factory = ( id, title="", children=null, leaf = false ) => {
    const Component = PagesModel[ id ] ;
    return { id, title, children, Component, leaf }
}

const all = [
    factory( Pages.SIGN ),
    factory( Pages.WIZARD ),
    factory( Pages.MY_MIGRATIONS )
];


export default all ;
