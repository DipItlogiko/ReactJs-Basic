import React from 'react'

import Column from './Column'

function Table() {
    return (
        <div>
            <table>
                <tr>
                    <Column name={"dip"} address={"faridpur"}/>
                    <Column name={"puja"} address={"shatkhira"}  />
                    <Column name={"ashish"} address={"Dhaka"} />
                    <Column name={"ankush"} address={"India"} />
                </tr>
            </table>
        </div>
    )
}

export default Table
