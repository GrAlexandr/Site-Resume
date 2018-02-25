import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SendForm from '../../../actions/actions'
import Contacts from './contacts'

const mapStateToProps = (state, props) => {
	return {
		...props
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({ SendForm }, dispatch)
	}
};

export default connect(mapStateToProps,	mapDispatchToProps)(Contacts)