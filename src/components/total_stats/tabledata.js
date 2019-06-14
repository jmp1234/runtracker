import React, {Fragment} from 'react';
import TableModal from './modal/table_modal';

export default props => {

  const {date, distance, calories, time, id} = props;
  return(
      <Fragment>
        <td>{date}</td>
        <td>{distance.toFixed(2)}</td>
        <td>{time}</td>
        <td className="calories-data">{calories}</td>
        <td><TableModal date={date} displayActivityLogData={props.displayActivityLogData} id={id}/></td>
      </Fragment>
  )
}
