import React, { Component } from 'react';
import './profile.style.css';

import Bio from './Bio'

import Skills from "./Skills";
import Links from './Links'

class Index extends Component {

    me={
        name:"Md. Ariful Islam",
        title: 'FullStack Javascript  Developer, ReactJS Developer and NodeJS Developer',
        skillA: 'Java',
        skillB:'Javascript',
        skillC: 'Python'
    }

    render() {
        // console.log('Profile- ', this.props);
        return (
            <div className="Container">
                <Bio name={this.me.name} title={this.me.title}/>
                <Skills 
                skillA={this.me.skillA}
                skillB={this.me.skillB}
                skillC={this.me.skillC}
                />
                <Links/>
            </div>
        )
    }
}

export default Index;
