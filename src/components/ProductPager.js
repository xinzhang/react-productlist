import React from 'react';

export default class RequestTablePager extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    const pageFrom = (this.props.currentPage % 3 === 0) ? this.props.currentPage-2 : parseInt(this.props.currentPage / 3) * 3 + 1;
    const pageTo = pageFrom + 2;

    var pageNumbers = [];
    for (let i=pageFrom;i<=pageTo;i++){
        if (this.props.currentPage !== i) {
          pageNumbers.push(<a onClick={()=>this.props.pageNavigation(i)}>{i}</a>)
        } else {
          pageNumbers.push(<span>{i}</span>)
        }
    }

    return (
      <div className="pagination">

          {/*Page {this.props.currentPage} of {this.props.totalPage}*/}

          {this.props.currentPage === 1 &&
            <i className="fa fa-chevron-left fa-fw"></i>
          }
          {this.props.currentPage > 1 &&
          <a onClick={()=>this.props.pageNavigation(this.props.currentPage-1)}>
              <i className="fa fa-chevron-left fa-fw"></i>
          </a>}

          {pageNumbers}

          {this.props.currentPage === this.props.totalPage &&
            <i className="fa fa-chevron-right fa-fw"></i>
          }
          {this.props.currentPage < this.props.totalPage &&
          <a onClick={()=>this.props.pageNavigation(this.props.currentPage+1)}>
              <i className="fa fa-chevron-right fa-fw"></i>
          </a>}
      </div>
    )
  }

}
