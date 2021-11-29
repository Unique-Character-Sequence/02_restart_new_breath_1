import c from "./Paginator.module.css";
import {ceil} from "lodash/math";
import {requestSetUsersDatasets} from "../requestSetUsersDatasets";

let Paginator = (props) => {
    let numberOfPages = props.totalNumber / props.itemsPerSet
    let listOfPagesNumbers = []
    for (let i = 1; i <= ceil(numberOfPages); i++) {
        listOfPagesNumbers.push(i)
    }
    let onClick = (pageNumber) => {
        props.setCurrentSetOfUsers(pageNumber)
        requestSetUsersDatasets(props.itemsPerSet, pageNumber, props.setUsersDatasets, props.setTotalNumberOfUsers)
    }
    let mappedListOfPagesNumbers =
        listOfPagesNumbers.slice(0,30).map(pageNumber => <span
            onClick={() => onClick(pageNumber)}
            className={props.selectedPage === pageNumber ? c.isSelected : c.isNotSelected}>
        {pageNumber}</span>)
    return <div className={c.main}>{mappedListOfPagesNumbers}</div>
}

export default Paginator