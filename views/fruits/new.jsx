const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Fruit Page</h1>
        

        <form action="/fruits" method="POST">
          Name: <input type="text"  name="name" /> <br />
          Color: <input type="text" name="color" /> <br />
          Is Ready To Eat: <input type="checkbox" name="readyToEat" /> <br />
          Image URL: <input type="text" name="img" />
          <input type="submit" value="Create Fruit" />
        </form>
        <nav>
          <a href="/fruits">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New