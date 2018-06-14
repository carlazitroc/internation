import React from 'react';
import {
    Card, CardBody, CardHeader, CardTitle, Table, Row, Col
} from 'reactstrap';

import { PanelHeader } from 'components';

class RegularTables extends React.Component{
    constructor() {
        super();
        this.state = {
          test: 'test'
        };
    }
    render(){

        var thead = [
            "#", "Group Name", "Total User", "Status", ""
        ];

        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Group List</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary">
                                            <tr>
                                                {
                                                    thead.map((prop, key) => {
                                                        if(key === thead.length-1)
                                                            return (
                                                                <th  key={key} className="text-right">{prop}</th>
                                                            );
                                                        return (
                                                            <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">1</td>
                                                <td>Hong Kong Internation</td>
                                                <td>1014</td>
                                                <td>Active</td>
                                                <td className="td-actions text-right">
                                                  <button type="button" rel="tooltip" className="btn btn-info btn-sm btn-round btn-icon">
                                                      <i className="now-ui-icons users_single-02"></i>
                                                  </button>
                                                  <button type="button" rel="tooltip" className="btn btn-success btn-sm btn-round btn-icon">
                                                      <i className="now-ui-icons ui-2_settings-90"></i>
                                                  </button>
                                                  <button type="button" rel="tooltip" className="btn btn-danger btn-sm btn-round btn-icon" disabled>
                                                      <i className="now-ui-icons ui-1_simple-remove"></i>
                                                  </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td>Berlin Internation</td>
                                                <td>2010</td>
                                                <td>Active</td>
                                                <td className="td-actions text-right">
                                                  <button type="button" rel="tooltip" className="btn btn-info btn-sm btn-round btn-icon">
                                                      <i className="now-ui-icons users_single-02"></i>
                                                  </button>
                                                  <button type="button" rel="tooltip" className="btn btn-success btn-sm btn-round btn-icon">
                                                      <i className="now-ui-icons ui-2_settings-90"></i>
                                                  </button>
                                                  <button type="button" rel="tooltip" className="btn btn-danger btn-sm btn-round btn-icon" disabled>
                                                      <i className="now-ui-icons ui-1_simple-remove"></i>
                                                  </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">3</td>
                                                <td>Man on Moon</td>
                                                <td>0</td>
                                                <td>Active</td>
                                                <td className="td-actions text-right">
                                                  <button type="button" rel="tooltip" className="btn btn-info btn-sm btn-round btn-icon">
                                                      <i className="now-ui-icons users_single-02"></i>
                                                  </button>
                                                  <button type="button" rel="tooltip" className="btn btn-success btn-sm btn-round btn-icon">
                                                      <i className="now-ui-icons ui-2_settings-90"></i>
                                                  </button>
                                                  <button type="button" rel="tooltip" className="btn btn-danger btn-sm btn-round btn-icon">
                                                      <i className="now-ui-icons ui-1_simple-remove"></i>
                                                  </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default RegularTables;
