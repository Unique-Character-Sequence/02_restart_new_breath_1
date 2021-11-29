import c from "./Paginator.module.css";

let Paginator = (props) => {
    let numberOfPages = props.totalNumber / props.itemsPerSet
    let listOfPagesNumbers = []
    for (let i = 1; i <= numberOfPages; i++) {
        // console.log(`i = ${i}`);
        listOfPagesNumbers.push(i)
    }
    let mappedListOfPagesNumbers = listOfPagesNumbers.map(pageNumber => <span
        className={props.selectedPage === pageNumber ? c.isSelected : c.isNotSelected}>{pageNumber}</span>)
    // console.log(c.selectedPage);
    return <div className = {c.main}>{mappedListOfPagesNumbers}</div>
    //return mappedListOfPagesNumbers
}

export default Paginator