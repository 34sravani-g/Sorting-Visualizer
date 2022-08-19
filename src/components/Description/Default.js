import React from 'react'

export default function Default() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h2 className="desc_header">Select Algorithm</h2>
                        <div className="desc_body">
                            <p>
                                You must select an algorithm before you can visualize its's
                                execution on an array of numbers
                            </p>
                        </div>                       
                    </div>
                    <div className="col">
                        <h2 className="performance"> Performance</h2>
                        <div className="row performance_body">
                            <div className="col">
                                <p>
                                   Worst-Case time complexity 
                                </p>
                                <p>
                                   Average-Case time complexity 
                                </p><p>
                                   Best-Case time complexity 
                                </p><p>
                                   Worst-Case space complexity 
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
        
    )
}
