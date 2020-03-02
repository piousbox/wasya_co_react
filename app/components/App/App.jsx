import React     from 'react'
import {
  Router, Route, hashHistory, browserHistory,
} from 'react-router'
import { connect } from 'react-redux'

import { CONST } from '../../constants'

import Account    from './Account'
import { BlogIndex, BlogItem, CaseStudies } from '../Blog'
import Contact from './ContactUs2'
import Home       from './Home'
import Industries from './Industries'
import { FixedNav, UnfixedNav, Navigation } from '../Navigation'
import OurProcess from './OurProcess'
import Products   from './Products'
import Promo1     from './Promo1'
import OurStack   from '../Stack/Stack'
import OurWork    from './OurWork'
// import { BizServices, TechServices } from '../Services'
import AppRouter from './AppRouter'
import { Career, Careers, DesignerCareer } from '../Careers'
import { AbstractPage, TermsPage, WasyaCoPage } from '../Pages'

const routes = [
  { path: AppRouter.rootPath,
    component: Navigation,
    indexRoute: { component: Home },
    childRoutes: [
      { path: '/products',     component: Products },
      { path: AppRouter.ourStackPath,    component: OurStack },
    ],
  },
  { path: AppRouter.contactPath,
    component: Navigation,
    indexRoute: { component: Contact },
    fixed: 'unfixed',
  },
  { path: AppRouter.servicesPath,
    component: FixedNav,
    indexRoute: { component: Home },
    childRoutes: [
      // { path: AppRouter.bizServicesPath,  component: BizServices },
      // { path: AppRouter.techServicesPath, component: TechServices },
      { path: '/account',               component: Account },
    ],
  },
  { path: AppRouter.ourProcessPath,
    component: Navigation,
    fixed: 'unfixed',
    indexRoute: { component: OurProcess },
  },
  { path: AppRouter.ourWorkPath,
    component: Navigation,
    fixed: 'unfixed',
    indexRoute: { component: OurWork },
  },
  { path: AppRouter.careersPath,
    component: Navigation,
    indexRoute: { component: Careers },
    childRoutes: [
      { path: AppRouter.designerCareersPath, component: DesignerCareer },
      { path: AppRouter.careerPath, component: Career },
    ],
  },
  { path: AppRouter.pagesPath,
    component: Navigation,
    fixed: 'unfixed',
    indexRoute: { component: AbstractPage },
    childRoutes: [
      { path: AppRouter.blogPath,        component: BlogIndex },
      { path: AppRouter.blogItemPath,    component: BlogItem },
      { path: AppRouter.caseStudiesPath, component: CaseStudies },
      { path: AppRouter.ourWorkPath,     component: OurWork },
      { path: AppRouter.promo1Path,      component: Promo1 },      
      { path: AppRouter.termsPath,       component: TermsPage },
      { path: AppRouter.wasyaCoPath,     component: WasyaCoPage },
      { path: AppRouter.industriesPath,  component: Industries },
    ],
  },
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.collapseNav = this.collapseNav.bind(this)
  }

  collapseNav () {
    this.props.dispatch({ type: CONST.navCollapse, val: true })
  }

  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => { window.scrollTo(0, 0); this.collapseNav(); }} />
    );
  }
}

App.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps)(App)

