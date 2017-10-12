const MyFirstComponent = function() {
  return React.createElement('div', null, React.createElement('h1', null, 'My First component'));
};
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
