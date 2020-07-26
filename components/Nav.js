import classnames from 'classnames'
// import Link from 'next/link'


const Link = props => (
  <li className={ classnames(props.className, { active: props.activeFrameId === props.frameId})}>
    <a href={`${ props.frameId }`} data-frameid={props.frameId} >
      { props.children }
    </a>
  </li>
)

class Nav extends React.Component {
  render() {
    switch (this.props.activeFrameId) {
      case 'home':
        return (
            <nav>
              9<br/>
              Million<br/>
              Reasons<br/>
            </nav>
        )
        break;
      default:
        return (
          <nav>
            <a href="/" data-frameid="home">
              9MR
            </a>
            <br/>
            <br/>
            <ul>
              <Link frameId="volunteer" {...this.props }>
                Volunteer
              </Link>
              <Link frameId="donate" {...this.props }>
                Donate
              </Link>
              <Link frameId="share" {...this.props }>
                Share
              </Link>
              <li className="blank"/>
              <Link frameId="food" {...this.props }>
                Get Food
              </Link>
              <li className="blank"/>
              <Link frameId="about" {...this.props }>
                About
              </Link>
              <li className="blank"/>
              <Link frameId="contact" {...this.props } className="align-bottom">
                Contact
              </Link>
            </ul>
          </nav>
        )
        break;
    }
  }
}

export default Nav;
