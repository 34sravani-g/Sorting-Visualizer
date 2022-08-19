import React from 'react'
import StopIcon from '@material-ui/icons/Stop';

export default function InsertionSorttDescription() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                        <div className="col" style={{color:"white"}}>
                            <p>
                                <StopIcon className="insert_cmp1"/>
                                <StopIcon className="insert_cmp2"/>
                                - Comparison &nbsp; |
                                <StopIcon className="insert_swap"/>
                                - Swapping
                            </p>
                            {/* <p>
                            
                            </p> */}
                        </div>
                    </div>
                <div className="row">
                    <div className="col md-6">
                    <h2 className="desc_header">Insertion Sort</h2>
                        <div className="desc_body">
                            <p>
                                <a className="ref_link"
                                    href="https://en.wikipedia.org/wiki/Insertion_sort"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Insertion Sort
                                </a>{' '}
                                is a simple sorting algorithm that iterates through an array and
                                at each iteration it removes one element from the array, finds the
                                location it belongs to in the sorted list and inserts it there,
                                repeating until no elements remain in the unsorted list. It is an
                                in-place, stable sorting algorithm that is inefficient on large
                                input arrays but works well for data sets that are almost sorted.
                                It is more efficient in practice compared to other quadratic
                                sorting algorithms like bubble sort and selection sort.
                            </p>
                        </div>                       
                    </div>
                    <div className="col-md-6">
                        <h2 className="performance"> Performance</h2>
                        <div className="row performance_body">
                            <div className="col">
                                <p>
                                   Worst-Case time complexity - O(n<sup>2</sup>)
                                </p>
                                <p>
                                   Average-Case time complexity - O(n<sup>2</sup>)
                                </p><p>
                                   Best-Case time complexity - O(n)
                                </p><p>
                                   Worst-Case space complexity - O(1)
                                </p>


                            </div>
                            {/* <div className="col">
                                <p>
                                    O(n<sup>2</sup>)
                                </p>
                                <p>
                                    O(n<sup>2</sup>)
                                </p>
                                <p>
                                    O(n)
                                </p>
                                <p>
                                    O(1)
                                </p>

                            </div> */}
                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>
        
    )
}
