import React from 'react';
const TableComponent = ({
    tableBody,
    tableHeader,
    label,
    renderListAgain
}) => {
    const renderBody = (tableBody) => {
        return tableBody.map((item, index) => {
            if (Array.isArray(item)) {
                return <td key={index} onClick={() => renderListAgain(tableHeader[index], item)}
                >{"CLICK ME"}</td>
            }
            return <td key={index}>{item}</td>
        });
    }

    return (<div>
        <label>{`${label} : `}</label>
        <table className='table table-border'>
            <thead className='table-header'>
                <tr className='table table-border'>{renderBody(tableHeader)}</tr>
            </thead>
            <tbody>
                <tr className='table-border'>
                    {renderBody(tableBody)}
                </tr>
            </tbody>
        </table>
    </div>
    );
}

export default TableComponent;