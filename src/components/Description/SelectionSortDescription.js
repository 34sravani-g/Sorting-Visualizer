import React from 'react'
import StopIcon from '@material-ui/icons/Stop';
export default function SelectionSorttDescription() {
    return (
        <React.Fragment>
            <div className="container">
            <div className="row">
                    <div className="col" style={{color:"white"}}>
                        <p>
                            <StopIcon className="select_cmp1"/>
                            <StopIcon className="select_cmp2"/>
                            - Comparison &nbsp;|
                            <StopIcon className="select_swap"/>
                            - Swapping
                        </p>
                        {/* <p>
                        <StopIcon className="select_swap"/>
                        - Swapping
                        </p> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <h2 className="desc_header">Selection Sort</h2>
                        <div className="desc_body">
                            <p>
                                <a className="ref_link"
                                    href="https://en.wikipedia.org/wiki/Selection_sort"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                Selection Sort
                                </a>{' '}

                                    is an in-place comparison sorting algorithm that divides the input
                                    list into two parts: the sublist of items already sorted, which is
                                    built up from left to right at the front (left) of the list, and
                                    the sublist of items remaining to be sorted that occupy the rest
                                    of the list. Initially, the sorted sublist is empty and the
                                    unsorted sublist is the entire input list. The algorithm proceeds
                                    by finding the smallest element in the unsorted sublist,
                                    exchanging (swapping) it with the leftmost unsorted element
                                    (putting it in sorted order), and moving the sublist boundaries
                                    one element to the right.
                            </p>
                        </div>                       
                    </div>
                    <div className="col">
                        <h2 className="performance"> Performance</h2>
                        <div className="row performance_body">
                            <div className="col-md-6">
                                <p>
                                   Worst-Case time complexity - O(n<sup>2</sup>)
                                </p>
                                <p>
                                   Average-Case time complexity - O(n<sup>2</sup>)
                                </p><p>
                                   Best-Case time complexity - O(n<sup>2</sup>)
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
                                    O(n<sup>2</sup>)
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
