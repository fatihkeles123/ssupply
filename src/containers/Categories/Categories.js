import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import ListItem from '../../components/UI/Lists/ListItem/ListItem';
import List from '../../components/UI/Lists/List';
import InputItem from '../../components/UI/InputLayout/InputItem/InputItem';
import InputLayout from '../../components/UI/InputLayout/InputLayout';
import ButtonLayout from '../../components/UI/InputLayout/ButtonLayout/ButtonLayout';

class Categories extends Component {
    
    state = {
        name: '',
        order: 0,
        mode: 'add',
        index: ''
    }

    componentDidMount(){
        this.props.onListUpdated();
    };
    
    nameChangeHandler = (event) => {
        this.setState({name: event.target.value});
    };

    orderChangeHandler = (event) => {
        this.setState({order: event.target.value});
    };

    modeChangeHandler = (index, mode, name, order) => {
        this.setState({mode: mode, index: index, name: name, order: order});
    };

    addClickHandler = (index = '') => {
        const name = this.state.name;
        const order = this.state.order;
        const mode = this.state.mode;
        if (mode === 'add'){
            this.props.onAdded(name, order);
        }
        if ((mode === 'update') && (index !== '')){
            this.props.onUpdated(index, name, order);
            this.cancelHandler();
        }
        this.setState({name: '', order: 0});
    };

    deleteHandler = (index) => {
        this.props.onDeleted(index);
        this.cancelHandler();
    };

    cancelHandler = () => {
        this.setState({name: '', order: 0, mode: 'add', index: ''});
    };

    render() {
        const trList = this.props.categoryList ? Object.keys(this.props.categoryList) : [];
        const trObject = this.props.categoryList ? this.props.categoryList : [];
        const name = this.state.name;
        const order = this.state.order;
        const index = this.state.index;
        const mode = this.state.mode;
        let buttons = '';
        if (mode === 'update'){
            buttons = (
                <>
                    <button onClick={() => this.addClickHandler(index,name,order)}>Update</button>
                    <button onClick={() => this.deleteHandler(index)}>Delete</button>
                    <button onClick={() => this.cancelHandler()}>Cancel</button>
                </>
            );
        }
        else {
            buttons = <button onClick={() => this.addClickHandler(index,name,order)}>Add</button>;
        }
        let terList = <Spinner />;
        if (this.props.categoryListLoading === false){
            terList = <List>
                {trList.map((item) => <ListItem clicked={() => this.modeChangeHandler(item,'update', trObject[item].name, trObject[item].order)} id={item} key={item}>{trObject[item].name}</ListItem>)}
            </List>;
        }
        
        return (
                <div>
                    <InputLayout baslik="Categories">
                        <InputItem labelText="Name : " pcText="category name" value={name} changed={this.nameChangeHandler} />
                        <InputItem labelText="Order : " value={order} changed={this.orderChangeHandler} />
                        <ButtonLayout>
                            {buttons}
                        </ButtonLayout>
                    </InputLayout>
                    {terList}                
                </div>
            );

    };

}
const mapsStateToProps = state => {
    return {
        categoryList: state.categoryList,
        categoryListLoading: state.categoryListLoading
    }
}

const mapsDispatchToProps = dispatch => {
    const moduleName = 'categories';
    return {
        onAdded: (name, order) => dispatch(actionCreators.categoryListAdd(name, order)),
        onListUpdated: () => dispatch(actionCreators.getCategoryList()),
        onDeleted: (index) => dispatch(actionCreators.listDelete(index, moduleName)),
        onUpdated: (index, name, order) => dispatch(actionCreators.categoryListUpdate(index, name, order, moduleName))
    }
}
export default connect(mapsStateToProps,mapsDispatchToProps)(Categories);