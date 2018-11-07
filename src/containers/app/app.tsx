import { connect } from 'react-redux';
import App from '../../components/app/app';
import * as actions from '../../actions/action';

// 映射Redux state到组件的属性  
export function mapStateToProps(state: any) {
    return {
        text: state.text
    }
}

// 映射Redux actions到组件的属性  
export function mapDispatchToProps(dispatch: any) {
    return {
        onChangeText: () => dispatch(actions.changeTextAction),
        onButtonClick: () => dispatch(actions.buttonClickAction),
    }
}

export function mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
    return { ...ownProps, ...stateProps, ...dispatchProps };
}

// connect component
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);