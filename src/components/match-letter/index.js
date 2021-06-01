import React, { memo, Fragment, useEffect, useRef, useCallback, useState } from 'react'

export default memo(function HYMatchLetter(props) {
    const { search, input } = props;
    const loc = useRef([]);
    const [currentArr, setCurrent] = useState([])

    const arrZip = useCallback((arr, arrIndex, offset) => {
        function zoneAssert(num, indexArr, length) {
            let maxPoint = 0;
            for (let i=0; i < indexArr.length; i++) {
                if (num < indexArr[i]) {
                    maxPoint = i + 1;
                    break;
                }
            }
            if (maxPoint === 0) {
                maxPoint = indexArr.length + 1;
                if (num < indexArr[maxPoint - 2] + offset) {
                    maxPoint = -maxPoint;
                }
            } else if (maxPoint > 1 && num < indexArr[maxPoint - 2] + length) {
                maxPoint = -maxPoint;
            }

            return maxPoint;
        }

        const newArr = [];
        const pieceZip = [];
        for (let i=0; i < arrIndex.length; i++) {
            pieceZip.push(arr.slice(arrIndex[i], arrIndex[i] + offset).join(""));
        }
        for (let j=0; j < arr.length; j++) {
            if (zoneAssert(j, arrIndex, offset) < 0) {
                newArr.push(pieceZip.shift());
                j = j + offset - 1;
            } else if (zoneAssert(j, arrIndex, offset) > 0) {
                newArr.push(arr[j]);
            }
        }

        return newArr;
    }, [])

    useEffect(() => {
        const ma = new RegExp(search, "g");
        const arr = input.split("");
        const location = [];
        input.replace(ma, (str, index) => {
            location.push(index);    
        });
        loc.current = location.map((item, index) => {
            return item - ((search.length - 1) * index);
        });

        setCurrent(arrZip(arr, location, search.length));
    }, [search, input, arrZip]);

    return (
        <Fragment>
            {currentArr.map((item, index) => {
                if (loc.current.indexOf(index) !== -1) {
                    return (<b className="searchKey" key={item}>{item}</b>)
                } else {
                    return item
                }
            })}
        </Fragment>
    )
})
