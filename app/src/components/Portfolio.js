import React, {useState} from "react";
import projects from "../data/projects";
import filters from "../data/filters";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    // this.filters = filters;
    this.state = {filter: filters[0]};
    this.projects = this.convertProgects(projects);
    this.click = this.click.bind(this);
     
  }

  convertProgects(projects) {
    return projects.map(project => <img className="project-img" src={project.img}></img>)
  }

  click(e) {
    const currentFilter = e.target.textContent;
    console.log(currentFilter)
    this.setState(() => {
      return {filter: currentFilter};
    })
    this.projects = currentFilter === 'All' ? this.convertProgects(projects) : projects.filter
                    (project => project.category === currentFilter).map
                    (project => <img className="project-img" src={project.img}></img>);
  }

  render() {
    return (
      <div className="wrapper">
        <Toolbar 
          filters={filters} 
          activeFilter={this.state.filter} 
          onSelectFilter={this.click}/>
        <ProjectList projects={this.projects}/>
      </div>
    )
  }
} 