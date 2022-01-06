import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createPersonAction} from '../../redux/actions/preson'
import {nanoid} from 'nanoid'

class Person extends Component {
  addPerson = () => {
    const name = this.name.value
    const age = parseInt(this.age.value)
    const id = nanoid()
    //注意此处传入的key值将会作为取值是所用的key一致, action和reducer中出现了默认数据,请让三者的key保持一致
    this.props.createPersonAction({id, name, age})
    this.name.value = ''
    this.age.value = ''
  }

  render() {
    const persons = this.props.state.person
    return (
      <div>
        <input ref={cur => this.name = cur} type="text" placeholder="输入姓名"/>
        <input ref={cur => this.age = cur} type="text" placeholder="输入年龄"/>
        <button onClick={this.addPerson}>添加</button>
        <hr/>
        <ul>
          {
            persons.map(person => {
              console.log(person)
              return <li key={person.id}>{person.name}---{person.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({state}),
  {createPersonAction}
)(Person)
