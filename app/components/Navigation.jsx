var React = require('react');
var {Link, IndexLink} = require('react-router')

var Navigation = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-link">Counter</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">ME <a scr="http://www.yandex.ru">Link</a></li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Navigation;
