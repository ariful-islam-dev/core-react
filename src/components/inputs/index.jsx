import React, { Component } from 'react';

class Inputs extends Component {

    state = {
        name: '',
        country: '',
        bio: '',
        birthDay: '',
        gender: '',
        agree: false,
        skills: []
    }

    handleChange = (event) => {
        // console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handeCheckbox = event => {
        this.setState({
            agree: event.target.checked
        })
    }
    handleSkillChange = event => {
        if (event.target.checked) {
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        } else {
            const skills = this.state.skills.filter(skill => skill !== event.target.value)
            this.setState({
                skills
            })
        }
    }
    render() {
        const { name, country, bio, birthDay, agree, skills } = this.state;
        return (
            <div>
                <input onChange={this.handleChange} value={name} className="form-control my-2" type="text" name="name" placeholder="Provide Your Fullname" />
                <select onChange={this.handleChange} value={country} name="country" className="form-control my-2">
                    <option>Select Your Country</option>
                    <option value="Bangladesh" >Bnagladesh</option>
                    <option value="India">India</option>
                    <option value="Shrilanka">Shrilanka</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="China">China</option>
                </select>
                <textarea onChange={this.handleChange} value={bio} className="form-control my-2" name="bio" cols="30" rows="10" placeholder="Tell Me About Yourself"></textarea>
                <input onChange={this.handleChange} value={birthDay} className="form-control my-2" type="date" name="birthDay" />
                <div >
                    <input className="" type="radio" name="gender" value="Male" onChange={this.handleChange} /> Male
                    <input className="mx-2" type="radio" name="gender" value="Female" onChange={this.handleChange} />Female
                    <input className="mx-2" type="radio" name="gender" value="Other" onChange={this.handleChange} />Other
                </div>
                <div>
                    Skills: <br />
                    <input type="checkbox" name="skills" value="java" checked={skills.includes("java")} onChange={this.handleSkillChange} /> Java
                    <input type="checkbox" name="skills" value="javascript" checked={skills.includes("javascript")} onChange={this.handleSkillChange} /> JavaScript
                    <input type="checkbox" name="skills" value="python" checked={skills.includes("python")} onChange={this.handleSkillChange} /> Python
                    <input type="checkbox" name="skills" value="php" checked={skills.includes("php")} onChange={this.handleSkillChange} /> PHP
                    <input type="checkbox" name="skills" value="react" checked={skills.includes("react")} onChange={this.handleSkillChange} /> React
                </div>
                <div>
                    <input type="checkbox" name="agree" onChange={this.handeCheckbox} checked={agree} /> I agrre to your terms and condition
                </div>
                <button onClick={() => console.log(this.state)}>
                    Show  Data
                </button>
            </div>
        )
    }
}

export default Inputs;
// 8.3 Done
