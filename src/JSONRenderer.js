import React from 'react';
import moment from 'moment';
import { startCase } from 'lodash';
import INPUT from './Input.json';
import TableComponent from './table/TableComponent';

class JSONRenderer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: INPUT
        }
    }

    renderDate = (label, value) => {
        let val = moment(value).format('YYYY-MM-DD');
        return <div key={label}>
            <label htmlFor={val}>{`${label} : `}</label>
            <input type="date" id={val} defaultValue={val} />
        </div>
    }

    renderPrimitive = (label, val) => {
        return <div key={label}>
            <label htmlFor={val}>{`${label} : `}</label>
            <input type="text" id={val} defaultValue={val} />
        </div>
    }

    renderList = (label, data) => {
        const { headers, body } = this.getTableData(data)
        return <TableComponent
            label={label}
            tableHeader={headers}
            tableBody={body}
            renderListAgain={this.addElement}
            key={label}
        />
    }

    addElement = (label, data) => {
        this.setState((prevState) => {
            return {
                input: {
                    ...prevState.input,
                    [label]: data
                }
            }
        })
    }

    getTableData = (data) => {
        let self = this;
        let headers = [];
        let body = [];
        data.forEach(function (rowData) {
            Object.entries(rowData).map(([label, value]) => {
                headers.push(startCase(label));
                body.push(value)
            });
        });
        return { headers, body };
    }

    render() {
        return (
            <div>
                {
                    Object.entries(this.state.input).map(([label, value]) => {
                        label = startCase(label)
                        if (Array.isArray(value)) {
                            return this.renderList(label, value);
                        }
                        else if (moment(value, "MM/DD/YYYY", true).isValid()) {
                            return this.renderDate(label, value);
                        }
                        else {
                            return this.renderPrimitive(label, value);
                        }
                    })
                }
            </div >
        );
    }
}
export default JSONRenderer;