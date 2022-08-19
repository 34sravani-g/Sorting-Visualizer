import React from 'react'
import StopIcon from '@material-ui/icons/Stop';
export default function QuickSortDescription() {
    return (
        <React.Fragment>
            <div className="container">
            <div className="row">
                    <div className="col" style={{color:"white"}}>
                        <p>
                           <StopIcon className="quick_pivot"/>
                           - Pivot &nbsp;|

                           <StopIcon className="quick_cmp1"/>
                            <StopIcon className="quick_cmp2"/>
                            - Comparison &nbsp;|

                            <StopIcon className="quick_swap"/>
                        - Swapping
                        </p>
                        {/* <p>
                            <StopIcon className="quick_cmp1"/>
                            <StopIcon className="quick_cmp2"/>
                            - Comparison
                        </p>
                        <p>
                        <StopIcon className="quick_swap"/>
                        - Swapping
                        </p> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <h2 className="desc_header">Quick Sort</h2>
                        <div className="desc_body">
                            <p>
                                <a className="ref_link" href="https://en.wikipedia.org/wiki/Quicksort"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Quick Sort
                                </a>{' '}
                                is an efficient, in-place sorting algorith that in practice is
                                faster than MergeSort and HeapSort. However, it is not a stable
                                sorting algorithm, meaning that the relative positioning of
                                equal sort items is not preserved.Quicksort is a divide and
                                conquer algorithm. Quicksort first divides a large array into
                                two smaller sub-arrays: the low elements and the high elements.
                                Quicksort can then recursively sort the sub-arrays. The steps
                                are:
                            </p>
                            <ol>
                                <li>
                                Pick an element, called a pivot, from the array. This is
                                usually done at random.
                                </li>
                                <li>Move pivot element to the start of the array.</li>
                                <li>
                                <em>Partitioning:</em> reorder the array so that all elements
                                with values less than the pivot come before the pivot, while
                                all elements with values greater than the pivot come after it
                                (equal values can go either way). After this partitioning, the
                                pivot is in its final position. This is called the{' '}
                                <em>partition</em> operation.
                                </li>
                                <li>
                                Recursively apply the above steps to the sub-array of elements
                                with smaller values and separately to the sub-array of
                                elements with greater values.
                                </li>
                            </ol>
                            <p>
                                The base case of the recursion is an array of size zero or one,
                                which are sorted by definition.
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
                                   Average-Case time complexity - O(n log n)
                                </p><p>
                                   Best-Case time complexity - O(n log n)
                                </p><p>
                                   Worst-Case space complexity - O(n log n)
                                </p>


                            </div>
                            {/* <div className="col">
                                <p>
                                    O(n<sup>2</sup>)
                                </p>
                                <p>
                                    O(n log n)
                                </p>
                                <p>
                                    O(n log n)
                                </p>
                                <p>
                                    O(n log n)
                                </p>

                            </div> */}
                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>
        
    )
}
