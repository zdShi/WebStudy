import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addPersonAction} from '../../redux/actions/preson'
import {nanoid} from 'nanoid'

class Person extends Component {
  addPerson = () => {
    const name = this.name.value
    const age = parseInt(this.age.value)
    const id = nanoid()
    //注意此处传入的key值将会作为取值是所用的key一致, action和reducer中出现了默认数据,请让三者的key保持一致
    this.props.addPersonAction({id, name, age})
    this.name.value = ''
    this.age.value = ''
  }

  render() {
    console.log(this.props)
    const {persons} = this.props
    return (
      <div>
        <input ref={cur => this.name = cur} type="text" placeholder="输入姓名"/>
        <input ref={cur => this.age = cur} type="text" placeholder="输入年龄"/>
        <button onClick={this.addPerson}>添加</button>
        <hr/>
        <ul>
          {
            persons.map(person => {
              return <li key={person.id}>{person.name}---{person.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  /*此时的写法时将所有的redux模块以props形式传入到UI组件中,
  可以给不同的UI组件指定共享的数据*/
  // state => ({state}),
  // state => ({count: state.count, persons: state.persons})
  state => {
    const {persons, count} = state
    return {persons, count}
  },
  {addPersonAction}
)(Person)
