import React from 'react';
import './index.css';

const LEFT_COLUMN = ['A', 'B', 'C']
const RIGHT_COLUMN = ['D', 'E', 'F']

class SeatBooking extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seatIds: [],
      bookedSeatIds: [],
      date: new Date().toISOString().split('T')[0]
    }
  }

  seatChartRender = () => {
    return(<div className='box'>
      {Array(10).fill(0).map((el, id) => {
        return(
          <div className='left-column'>
            {Array(3).fill(0).map((el, index) => {
		          return(<div>
		            <span>{(id+1).toString() + LEFT_COLUMN[index]}</span>
		          </div>)
            })}
          </div>
        )
      })}
    </div>)
  }

  checkBooking = () => {
    if (this.state.seatIds.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  bookSeats = (e) => {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {
    const buttonDisabled = this.checkBooking();

    return(
      <div>
        <div className="row justify-content-center mt-3">
          <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
            <div className="form-group">
              <label>Booking Date</label>
              <input type="date" name="bookingDate" onChange={this.dateChange} value={this.state.bookingDate} className="form-control" />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className='col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-3'>
            {this.seatChartRender()}

            <button className={`mt-3 w-100 btn btn-primary ${buttonDisabled ? 'disabled' : ''}`} onClick={this.bookSeats}>Book My Seat</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SeatBooking;
