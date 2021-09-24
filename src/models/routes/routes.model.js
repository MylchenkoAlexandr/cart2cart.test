import * as Pages from "../constants/pages";
import PagesModel from "./pages.model";

const factory = ( id, title="", children=null, leaf = false ) => {
    const Component = PagesModel[ id ] ;
    return { id, title, children, Component, leaf }
}
export default [
    factory( Pages.SIGN ),
    factory( Pages.WIZARD ),
    factory( Pages.MY_MIGRATIONS )
];
