import 'babel-polyfill'
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Counter} from '../components/Counter'
import {DataTable} from '../components/Table'
import {getDataAction} from '../actions/actions'

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 50,
    },
};

class App extends Component {
    static propTypes = {
        refreshData: PropTypes.func.isRequired,
    };

    render() {
        const {refreshData, tableData} = this.props;
        return (
            <div style={styles.container}>
                <Counter refreshData={refreshData}/>

                <DataTable tableData={tableData}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tableData: state.tableData
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        refreshData: () => {
            dispatch(getDataAction())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);