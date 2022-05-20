export const sortingController = ({sortType, transactions, ascending}) => {

    switch(sortType) {
        case "amount":
            return sortByAmount({transactions, ascending})
        case "category":
            return sortByCategory({transactions, ascending})
        case "note":
            return sortByNote({transactions, ascending})
        case "transactionDate":
            return sortByTransactionDate({transactions, ascending})
        default:
            throw new Error(`Error: SortType:${sortType}`);
    }

}

export const sortByAmount = ({transactions, ascending}) => {
    let sortedTransactions = transactions.sort((a, b) => {
        let itemA = a.amount;
        let itemB = b.amount;

        if(itemA > itemB) {
            return -1;
        }

        if(itemA < itemB) {
            return 1;
        }
        
        return 0;
    })

    if(!ascending) {
        sortedTransactions.reverse()
    }

    return sortedTransactions
}

export const sortByCategory = ({transactions, ascending}) => {
    let sortedTransactions = transactions.sort((a, b) => {

        // cast to uppercase to aid in sorting
        let categoryNameA = a.category.categoryName.toUpperCase();
        let categoryNameB = b.category.categoryName.toUpperCase();

        if(categoryNameA === "NONE") {
            return ascending ? 1 : -1;
        }

        if(categoryNameB === "NONE") {
            return ascending ? 1 : -1;
        }

        if(categoryNameA > categoryNameB) {
            return 1;
        }

        if(categoryNameA < categoryNameB) {
            return -1;
        }
        
        return 0;
    })

    if(!ascending) {
        sortedTransactions.reverse()
    }

    return sortedTransactions
}

export const sortByNote = ({transactions, ascending}) => {
    let sortedTransactions = transactions.sort((a, b) => {
        let itemA = a.note;
        let itemB = b.note;

        // adjust weight if blank content

        if(itemA === "") {
            return ascending ? 1 : -1;
        }

        if(itemB === "") {
            return ascending ? -1 : 1;
        }

        // sort alphabetically

        if(itemA > itemB) {
            return 1;
        }

        if(itemA < itemB) {
            return -1;
        }
        
        return 0;
    })

    if(!ascending) {
        sortedTransactions.reverse();
    }

    return sortedTransactions;
}

export const sortByTransactionDate = ({transactions, ascending}) => {

    let sortedTransactions = transactions.sort((a, b) => {
        let itemA = a.transactionDate;
        let itemB = b.transactionDate;

        if(itemA > itemB) {
            return -1;
        }

        if(itemA < itemB) {
            return 1;
        }
        
        return 0;
    })

    if(!ascending) {
        sortedTransactions.reverse();
    }

    return sortedTransactions;
}