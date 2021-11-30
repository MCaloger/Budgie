export const sortingController = ({sortType, transactions, ascending}) => {

    console.log("sorttype", sortType)

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
            throw `Error: SortType:${sortType}`
    }

}

export const sortByAmount = ({transactions, ascending}) => {
    let sortedTransactions = transactions.sort((a, b) => {
        let itemA = a.amount;
        let itemB = b.amount;

        if(itemA === "") {
            return 1;
        }

        if(itemB === "") {
            return -1;
        }

        if(itemA > itemB) {
            return 1;
        }

        if(itemA < itemB) {
            return -1;
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
        let categoryNameA = a.category.categoryName.toUpperCase();
        let categoryNameB = b.category.categoryName.toUpperCase();

        if(categoryNameA === "") {
            return 1;
        }

        if(categoryNameB === "") {
            return -1;
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

        if(itemA === "None") {
            if(ascending) {
                return 1
            } else {
                return 0
            }
        }

        if(itemB === "None") {
            if(ascending) {
                return 1
            } else {
                return 0
            }
        }

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

        if(itemA === "") {
            return 1;
        }

        if(itemB === "") {
            return -1;
        }

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