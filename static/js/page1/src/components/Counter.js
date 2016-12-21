import React, {Component, PropTypes} from 'react'
import {Button} from 'antd'

export class Counter extends Component {
    static propTypes = {
        refreshData: PropTypes.func.isRequired,
    };

    render() {
        const {refreshData} = this.props;
        return (
            <div>
                <Button type="default" onClick={ e => refreshData()}>GET DATA</Button>
            </div>
        )
    }
}
