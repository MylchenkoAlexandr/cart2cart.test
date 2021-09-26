import React from "react";
import classnames from "classnames";
import {map, get} from "lodash";
import { Row, Col } from 'antd';

function bootstrap ( headers, data, config ) {
    let _headers = (
        <Row className="grid-headers">
            { map( headers, (key)=> (
                <Col span={ get( config, `${key}.span`, 0 ) } data-cell-header={ key }>{ key }</Col>
            ) ) }
        </Row>
    )

    let _dataset = [] ;
    for( let y = 0 ; y < data.length ; y++ ) {
        const _columns = [] ;
        const _cell = data[y];
        for( let x = 0 ; x < headers.length ; x++ ) {
            const key = headers[x];
            const props = _cell[key];
            const Renderer = get(config, `${key}.Renderer`, null);
            if( Renderer ) _columns.push(
                <Col span={ get( config, `${key}.span`, 0 ) } data-cell={ key }>
                    <Renderer { ... props}/>
                </Col>
            )
        }

        _dataset.push(<Row className="grid-dataset">{ _columns }</Row>)
    }

    return (
        <div className="grid-data">
            { _headers }
            { _dataset }
        </div>
    )
}

export default function Grid({ headers=[], data=[], className="", config }) {
    /* debug */ console.log( "Grid([ headers, data, config ])", { headers, data, config } );

    const items = bootstrap( headers, data, config ) ;
    return ( <div className={classnames( "Grid", className )}>{items}</div> )
}
