
import { connect } from 'react-redux'

import Counter from '../components/counter'
import { handleadd, handledecrement, handleasync } from '../redux/actions'
export default connect(
  state => ({ count: state }),
  { handleadd, handledecrement, handleasync }
)(Counter);