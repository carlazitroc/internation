import React from 'react';
import {
    Card, CardBody, CardHeader, CardTitle, Table, Row, Col
} from 'reactstrap';

import { PanelHeader } from 'components';

class UserPage extends React.Component{
    render(){

        var thead = [
            "Name", "Country", "City", "Group"
        ];
        var tbody = [
            { className:"table-success", data: [ "Dakota Rice" , "Niger" , "Oud-Turnhout" , "$36,738" ] },
            { className:"", data: [ "Minerva Hooper" , "Curaçao" , "Sinaai-Waas" , "$23,789" ] },
            { className:"table-info", data: [ "Sage Rodriguez" , "Netherlands" , "Baileux" , "$56,142" ] },
            { className:"", data: [ "Philip Chaney" , "Korea, South" , "Overland Park" , "$38,735" ] },
            { className:"table-danger", data: [ "Doris Greene" , "Malawi" , "Feldkirchen in Kärnten" , "$63,542" ] },
            { className:"", data: [ "Mason Porter" , "Chile" , "Gloucester" , "$78,615" ] },
            { className:"table-warning", data: [ "Jon Porter" , "Portugal" , "Gloucester" , "$98,615" ] }
        ];

        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>User List</CardTitle>
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
                                            {
                                                tbody.map((prop,key) => {
                                                    return (
                                                        <tr key={key}>
                                                            {
                                                                prop.data.map((prop,key)=> {
                                                                    if(key === thead.length-1)
                                                                        return (
                                                                            <td  key={key} className="text-right">{prop}</td>
                                                                        );
                                                                    return (
                                                                        <td  key={key}>{prop}</td>
                                                                    );
                                                                })
                                                            }
                                                        </tr>
                                                    )
                                                })
                                            }
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

export default UserPage;
