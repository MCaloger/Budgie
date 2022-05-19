import React from 'react'

import { ReactComponent as NextIcon } from '../../img/next.svg'
import { ReactComponent as LastIcon } from '../../img/end.svg'
import { ReactComponent as PreviousIcon } from '../../img/previous.svg'
import { ReactComponent as FirstIcon } from '../../img/back.svg'
import Tooltip from '../Tooltip/Tooltip'

export default function PaginationBar(props) {
  return (
    <div className='pagination-ui'>
        <button className="ui-icon" disabled={!props.checkIfOnFirstPage ? '' : 1} onClick={props.firstPage}>
            <Tooltip text="First Page">
                <FirstIcon />
            </Tooltip>
        </button>
        
        <button className="ui-icon" disabled={props.checkIfPreviousPage ? '' : 1} onClick={props.previousPage}>
            <Tooltip text="Back Page">
                <PreviousIcon />
            </Tooltip>
        </button>
        <div>
            <div>Page {props.pageOffset} / {props.pageCount}</div>
        </div>
        <button className="ui-icon" disabled={props.checkIfNextPage ? '' : 1} onClick={props.nextPage}>
            <Tooltip text="Next Page">
                <NextIcon />
            </Tooltip>    
        </button>
        <button className="ui-icon" disabled={!props.checkIfOnLastPage ? '' : 1} onClick={props.lastPage}>
            <Tooltip text="Last Page">
                <LastIcon />
            </Tooltip>
        </button>

        
    </div>
  )
}
