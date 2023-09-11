const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title ="Edit Page">
                <form>
                    Name: <input type='text' name='name' defaultValue={this.props.fruit.name}/><br/>
                    Color: <input type='text' name='color' defaultValue={this.props.fruit.color}/><br/>
                    Is Ready to Eat:
                        {this.props.fruit.readyToEat ? <input type='checkbox' name="readyToEat" defaultChecked /> : <input type='checkbox' name='readyToEat'/>}
                    url: < input type='text' name='img' defaultValue={this.props.fruit.img} />
                    <input type='submit' value='Submit Changes' />
                </form>
            </DefaultLayout>

        )
    }
}

module.exports = Edit;