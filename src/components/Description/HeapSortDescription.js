import React from 'react'
import StopIcon from '@material-ui/icons/Stop';

export default function HeapSortDescription() {
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
                    <h2 className="desc_header">Heap Sort</h2>
                        <div className="desc_body">
                            <p>
                                <a className="ref_link"
                                    href="https://en.wikipedia.org/wiki/Heapsort"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Heap Sort
                                </a>{' '}
                                can be thought of as an improved selection sort that uses the heap data structure rather than a linear-time search to find the maximum or minimum element. It is an in-place sorting algorithm
                                that is not stable and has a somewhat slower running time than Quicksort in practice.
                            </p>
                            <p>
                                The heapsort algorithm can be divided into two parts. In the
                                first step, a heap is built out of the data. The heap is often
                                placed in an array with the layout of a complete binary tree. In
                                the second step, a sorted array is created by repeatedly
                                removing the largest element from the heap (the root of the
                                heap), and inserting it into the array. The heap is updated
                                after each removal to maintain the heap property. Once all
                                objects have been removed from the heap, the result is a sorted
                                array.
                            </p>
                            <ol>
                                <li>
                                Call the buildMaxHeap() function on the list. Also referred to
                                as heapify(), this builds a heap from a list in O(n)
                                operations.
                                </li>
                                <li>
                                Swap the first element of the list with the final element.
                                Decrease the considered range of the list by one.
                                </li>
                                <li>
                                Call the <em>siftDown()</em>, also called{' '}
                                <em>maxHeapify()</em> function on the list to sift the new
                                first element to its appropriate index in the heap.
                                </li>
                                <li>
                                Go to step (2) unless the considered range of the list is one
                                element.
                                </li>
                            </ol>
                        </div>                       
                    </div>
                    <div className="col-md-6">
                        <h2 className="performance"> Performance</h2>
                        <div className="row performance_body">
                            <div className="col">
                                <p>
                                   Worst-Case time complexity -  O(<em>n</em> log <em>n</em>)
                                </p>
                                <p>
                                   Average-Case time complexity -  O(<em>n</em> log <em>n</em>)
                                </p><p>
                                   Best-Case time complexity - O(<em>n</em> log <em>n</em>)
                                </p><p>
                                   Space complexity - O(1)
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
