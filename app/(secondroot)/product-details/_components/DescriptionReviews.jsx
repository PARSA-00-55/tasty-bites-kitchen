"use client"
import { useState } from "react";

const DescriptionReviews = () => {
    const [active, setActive] = useState("Description")
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* tabSetList */}
                    <ul className="list-none flex justify-center mb-9">
                        <li className="mr-10">
                            <button onClick={() => setActive("Description")} className="active playfair font-bold pb-2">
                                Description
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActive("Reviews")} className="playfair font-bold pb-2">
                                Reviews ( 2 )
                            </button>
                        </li>
                    </ul>
                    {/* tab-content */}
                    <div className="tab-content mb-20">
                        {
                            active === "Description" && <div className="animate-fade-up">
                                <p>Description</p>
                            </div>
                        }
                        {
                            active === "Reviews" && <div className="animate-fade-up">
                                <p>Reviews</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescriptionReviews;