import React from "react";

export default class Toolbar extends React.Component{

  render() {
    const {filters, activeFilter, onSelectFilter} = this.props;

    const currFilters = filters.map((filter) => {
      let isActive = '';

      if (filter === activeFilter) {
        isActive = ' active-filter';
      };

      return <button className={"filter-btn" + isActive} type="button" key={filter} onClick={onSelectFilter}>{filter}</button>
    })

    return (
      <div className="toolbar">
        {currFilters}
      </div>
    )
  }
}