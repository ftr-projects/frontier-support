import React from 'react';
import HeaderBar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import MainNav from './components/mainnav/MainNav';
import OutageSec from './components/sections/Outage';
import QuickChecksSec from './components/sections/QuickChecks';
import BeepingSoundSec from './components/sections/BeepingSound';
import GetInTouchSec from './components/sections/GetInTouch';
import IsHelpfulSec from './components/sections/IsHelpful';
import Footer from './components/footer/Footer';


class App extends React.Component {

  state = {
    services : [
      {
        title: 'Internet',
        id: 'internet'
      },
      {
        title: 'TV',
        id: 'tv'
      }
    ],
    tabs : [
      {
        title: 'Is ther an outage in my area?',
        id: 'outage'
      },
      {
        title: 'Quick Checks',
        id: 'checks'
      },
      {
        title: 'I hear a beeping sound',
        id: 'beeping'
      },
      {
        title: 'To get in touch right now',
        id: 'touch'
      }
    ]
  }

  render() {
    return (
      <main className="support-main">
        <HeaderBar />
        <Hero />
        <MainNav tabs={this.state.tabs} services={this.state.services} />
        <OutageSec sec={this.state.tabs[0]}  />
        <QuickChecksSec sec={this.state.tabs[1]}  />
        <BeepingSoundSec sec={this.state.tabs[2]}  />
        <GetInTouchSec sec={this.state.tabs[3]}  />
        <IsHelpfulSec />
        <Footer />
      </main>
    );
  }

}

export default App;
