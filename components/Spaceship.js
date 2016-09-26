const React = require('react');

class Spaceship extends React.Component {
  render(){
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h3>{this.props.speed}</h3>
        <h3>{this.props.hasRockets ? 'Yes' : 'No'}</h3>
        <h3>{this.props.colors.join(', ')}</h3>
      </div>
    )
  }
}


Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
};

module.exports = Spaceship;
