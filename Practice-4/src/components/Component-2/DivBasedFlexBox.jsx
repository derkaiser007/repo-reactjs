import React from "react";
import './DivBasedFlexBox.css'

export default function DivBasedFleBox() {
    return(
        <>
        <section>
            <div className="column">
                <article className="card">
                    <h3 className="card-title">Title-1</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, qui?</p>
                </article>
                <article className="card">
                    <h3 className="card-title">Title-2</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque animi optio incidunt voluptas ea cupiditate.</p>
                </article>
                <article className="card">
                    <h3 className="card-title">Title-3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellat beatae possimus nesciunt. Odio mollitia sapiente commodi dolorem rem. Sint maxime quae assumenda? Alias culpa accusamus vitae laborum perferendis fugiat sunt rerum omnis temporibus quaerat?</p>
                </article>
            </div>
        </section>      
        </>
    )
}